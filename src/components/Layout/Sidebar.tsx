import {
  ActivityIcon,
  ChevronRightIcon,
  MessageSquareIcon,
  PieChartIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";

const navigationItems = [
  { icon: ActivityIcon, label: "Dashboard", active: false },
  { icon: UsersIcon, label: "Agents", active: true },
  { icon: PieChartIcon, label: "Usage", active: false },
  { icon: MessageSquareIcon, label: "Chat Log", active: false },
];

const settingsSubItems = [
  { label: "Generals", active: false },
  { label: "Team", active: false },
  { label: "Plan", active: false },
  { label: "Billings", active: false },
];

export const Sidebar = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-64 bg-[#ffffff] border-r border-[#e5e7eb]">
      <div className="p-5 border-b border-[#e5e7eb]">
        <div className="flex items-center gap-2">
          <img className="w-9 h-9" alt="Symbol" src="/symbol.svg" />
          <h1 className="[font-family:'Urbanist',Helvetica] font-bold text-[#1f2937] text-xl">
            Kirichat
          </h1>
          <Badge className="ml-1 px-2 py-0.5 bg-[#f3f4f6] rounded-md border-0 h-auto">
            <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#6b7280] text-xs">
              Pro
            </span>
          </Badge>
        </div>
      </div>

      <nav className="flex flex-col p-3 gap-0.5">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              item.active ? "bg-[#f3f4f6]" : "hover:bg-[#f9fafb]"
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? "text-[#1f2937]" : "text-[#6b7280]"}`} />
            <span
              className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-sm ${
                item.active ? "text-[#1f2937]" : "text-[#6b7280]"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f9fafb] transition-colors mt-2">
          <SettingsIcon className="w-5 h-5 text-[#6b7280]" />
          <span className="flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[#6b7280] text-sm">
            Framework Settings
          </span>
          <ChevronRightIcon className="w-4 h-4 text-[#6b7280]" />
        </button>

        <div className="flex flex-col ml-7 mt-1">
          {settingsSubItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center px-3 py-1.5 rounded-lg hover:bg-[#f9fafb] transition-colors"
            >
              <span className="flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-[#9ca3af] text-xs">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};
