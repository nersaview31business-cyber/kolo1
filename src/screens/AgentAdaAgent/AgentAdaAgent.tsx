import {
  ActivityIcon,
  BellIcon,
  ChevronRightIcon,
  MessageCircleIcon,
  MessageSquareIcon,
  MoreVerticalIcon,
  PieChartIcon,
  PlusIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

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

export const AgentAdaAgent = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#f9fafb] overflow-hidden">
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

      <div className="flex flex-col flex-1">
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

        <main className="flex-1 overflow-auto px-8 py-6 bg-[#f9fafb]">
          <div className="flex items-center justify-end mb-6">
            <Button className="bg-[#4f80ff] hover:bg-[#3d6ee6] rounded-lg h-auto px-4 py-2.5 shadow-sm">
              <PlusIcon className="w-4 h-4 mr-2" />
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-sm">
                Create new agent
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl">
            <Card className="bg-[#ffffff] rounded-2xl border border-[#e5e7eb] overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-[180px] bg-[url(/agents.png)] bg-cover bg-center rounded-t-2xl" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-[#ffffff] hover:bg-[#f3f4f6] rounded-lg h-8 w-8 shadow-sm"
                  >
                    <MoreVerticalIcon className="w-4 h-4 text-[#6b7280]" />
                  </Button>
                </div>
                <div className="px-6 py-5">
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#1f2937] text-xl mb-1.5">
                    Nama Agents 01
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#6b7280] text-sm">
                    Last Trained 3 Minutes Ago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};
