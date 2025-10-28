"use client";

import { Button } from "@/components/ui/button";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronLeft, Menu } from "lucide-react";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Root>

      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed top-0 left-0 z-20 h-dvh"
      >
        <Collapsible.Content forceMount>
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } w-64 h-dvh bg-background border top-0 left-0 fixed p-4 transition-all ease-in-out duration-300`}
          >
            <div className="flex items-center justify-center">
              <h1>Admin Dashboard</h1>
              <Collapsible.Trigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <ChevronLeft />
                </Button>
              </Collapsible.Trigger>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
      {children}
    </div>
  );
};

export default DashboardLayout;
