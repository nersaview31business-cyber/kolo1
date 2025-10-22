import { BellIcon, ChevronRightIcon, MessageCircleIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import { Button } from "../ui/button";

export const Topbar = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#ffffff] border-b border-[#e5e7eb]">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#ffffff] rounded-lg border border-[#e5e7eb]">
        <span className="[font-family:'Inter',Helvetica] font-medium text-[#6b7280] text-sm">
          Kirichat Framework Na...
        </span>
        <ChevronRightIcon className="w-4 h-4 text-[#9ca3af] rotate-90" />
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg h-9 w-9 hover:bg-[#f3f4f6]"
        >
          <MessageCircleIcon className="w-5 h-5 text-[#6b7280]" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-lg h-9 w-9 hover:bg-[#f3f4f6]"
        >
          <BellIcon className="w-5 h-5 text-[#6b7280]" />
        </Button>

        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
