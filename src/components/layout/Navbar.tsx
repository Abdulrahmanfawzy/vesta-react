
import { useMemo } from "react";
import { Bell, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import { PATHS } from "@/app/routes/paths";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type NavbarProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

type StoredUser = {
  name?: string;
  email?: string;
  avatar?: string | null;
  profile_picture?: string | null;
  image?: string | null;
};

const USER_STORAGE_KEYS = [
  "user",
  "currentUser",
  "current_user",
  "authUser",
  "auth_user",
  "userData",
  "user_data",
  "profile",
  "auth",
];

function isStoredUser(value: unknown): value is StoredUser {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Record<string, unknown>;

  return (
    typeof candidate.name === "string" ||
    typeof candidate.email === "string" ||
    typeof candidate.avatar === "string" ||
    typeof candidate.profile_picture === "string" ||
    typeof candidate.image === "string"
  );
}

function readStoredUser(): StoredUser | null {
  if (typeof window === "undefined") return null;

  const storages = [
    window.sessionStorage,
    window.localStorage,
  ];

  for (const storage of storages) {
    // Check common profile-storage keys first.
    for (const key of USER_STORAGE_KEYS) {
      const rawValue = storage.getItem(key);

      if (!rawValue) continue;

      try {
        const parsed: unknown = JSON.parse(rawValue);

        if (isStoredUser(parsed)) return parsed;

        if (
          parsed &&
          typeof parsed === "object" &&
          "user" in parsed &&
          isStoredUser(
            (parsed as { user: unknown }).user
          )
        ) {
          return (
            parsed as { user: StoredUser }
          ).user;
        }
      } catch {
        // Ignore non-JSON values such as tokens.
      }
    }

    // Support a profile saved under a custom storage key.
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);

      if (!key || USER_STORAGE_KEYS.includes(key)) continue;

      const rawValue = storage.getItem(key);

      if (!rawValue) continue;

      try {
        const parsed: unknown = JSON.parse(rawValue);

        if (isStoredUser(parsed)) return parsed;

        if (
          parsed &&
          typeof parsed === "object" &&
          "user" in parsed &&
          isStoredUser(
            (parsed as { user: unknown }).user
          )
        ) {
          return (
            parsed as { user: StoredUser }
          ).user;
        }
      } catch {
        // Ignore values that are not JSON.
      }
    }
  }

  return null;
}

function getInitials(name?: string, email?: string) {
  const value = name?.trim() || email?.trim() || "User";
  const parts = value.split(/[\s@._-]+/).filter(Boolean);

  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : value.slice(0, 1).toUpperCase();
}

const PAGE_TITLES: Record<string, string> = {
  [PATHS.overview]: "Overview",
  [PATHS.analysis]: "Analysis",
  [PATHS.returns]: "Returns",
  [PATHS.settings]: "Settings",
};

export function Navbar({
  onToggleSidebar,
  isSidebarOpen,
}: NavbarProps) {
  const { pathname } = useLocation();

  const pageTitle = PAGE_TITLES[pathname] ?? "Dashboard";

  const user = useMemo(() => readStoredUser(), []);

  const userName =
    user?.name?.trim() ||
    user?.email?.trim() ||
    "User";

  const avatarUrl =
    user?.avatar ||
    user?.profile_picture ||
    user?.image ||
    undefined;

  const initials = getInitials(user?.name, user?.email);

  return (
    <header
      className="sticky top-0 z-30 flex h-15.5 lg:h-27.5 items-center justify-between border-b
      border-neutral-200 bg-white px-4 sm:px-6 lg:p-8"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="lg:hidden"
          aria-label={
            isSidebarOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isSidebarOpen}
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

        <div className="flex flex-col py-4">
          <h1 className="font-semibold tracking-tight text-primary lg:text-[36px] sm:text-[20px]">
            {pageTitle}
          </h1>

          <p className="mt-0.5 lg:text-[36px] sm:text-[20px] font-medium text-secondary">
            Hello {userName} !
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-neutral-200 lg:size-12.5 sm:size-10"
          aria-label="Notifications"
        >
          <Bell size={24} />
        </button>

        <Avatar className="lg:size-18.5 sm:size-12.5">
          {avatarUrl && (
            <AvatarImage
              src={avatarUrl}
              alt={userName}
            />
          )}

          <AvatarFallback className="bg-primary text-white">
            {initials}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}