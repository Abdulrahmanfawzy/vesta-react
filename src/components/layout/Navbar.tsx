import {
  Bell,
  X,
  Menu,
} from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type NavbarProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export function Navbar({
  onToggleSidebar,
  isSidebarOpen,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-15.5 lg:h-27.5 items-center justify-between border-b 
    border-neutral-200 bg-white px-4 sm:px-6 lg:p-8 ">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={isSidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isSidebarOpen}
          onClick={onToggleSidebar}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        <div className="flex flex-col py-4">
          <h1 className=" font-semibold tracking-tight text-primary lg:text-[36px] sm:text-[20px]">
            Overview
          </h1>

          <p className="mt-0.5 lg:text-[36px] sm:text-[20px] font-medium text-secondary">
            Hello John !
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-neutral-200 lg:size-12.5 sm:size-10"
          aria-label="Notifications"
        >
          <Bell size={24} />
        </Button>

        <Avatar className="lg:size-18.5 sm:size-12.5">
          <AvatarFallback className="bg-primary text-white">
            M
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}