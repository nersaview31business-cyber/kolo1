import { MoreVerticalIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Sidebar } from "../../components/Layout/Sidebar";
import { Topbar } from "../../components/Layout/Topbar";

export const AgentAdaAgent = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#f9fafb] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

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
