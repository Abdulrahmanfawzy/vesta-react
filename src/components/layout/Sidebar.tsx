import logo from "@/assets/b321ca5a3c314e620c5ad260e856babb89b6b16c.png";
import {
  BarChart3,
  LogOut,
  ReceiptText,
  RotateCcw,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@/app/routes/paths";

type NavigationItem = {
  label: string;
  icon: LucideIcon;
  to?: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Overview",
    icon: ReceiptText,
    to: PATHS.overview,
  },
  {
    label: "Analysis",
    icon: BarChart3,
    to: PATHS.analysis,
  },
  {
    label: "Returns",
    icon: RotateCcw,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 lg:w-20 w-15 p-1 flex-col bg-primary text-white ${
          isOpen ? "flex" : "hidden"
        } lg:flex`}
        aria-label="Main navigation"
      >
        <div className="flex h-16 shrink-0 items-center justify-center">
          <img src={logo} alt="Vesta" className="size-29 object-contain" />
        </div>

        <nav className="flex flex-col items-center gap-2 pt-16">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const className =
              "group flex w-full shrink-0 flex-col items-center gap-0.5 py-1.5 text-[9px] leading-tight transition-colors";

            const content = (
              <>
                <span
                  className="flex lg:size-7.5 sm:size-6 items-center justify-center rounded-lg 
                transition-colors group-hover:bg-white/10"
                >
                  <Icon />
                </span>

                <span className="lg:text-sm sm:text-xs">{item.label}</span>
              </>
            );

            return item.to ? (
              <NavLink
                key={item.label}
                to={item.to}
                end
                className={({ isActive }) =>
                  [
                    className,
                    isActive
                      ? "text-secondary"
                      : "text-white/70 hover:text-white",
                  ].join(" ")
                }
                onClick={onClose}
              >
                {content}
              </NavLink>
            ) : (
              <button
                key={item.label}
                type="button"
                className={`${className} text-white/70 hover:text-white`}
                onClick={onClose}
              >
                {content}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto flex shrink-0 justify-center pb-8">
          <button
            type="button"
            className="flex flex-col items-center gap-0.5 text-[9px] leading-tight text-secondary"
          >
            <span className="flex size-7 items-center justify-center rounded-lg hover:bg-white/10">
              <LogOut size={30} strokeWidth={1.8} />
            </span>

            <span className="text-[16px]">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
