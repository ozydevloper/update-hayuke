"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative ${open ? "translate-x-0" : "-translate-x-[72%]"}`}
    >
      <Card className="w-64 max-64 min-h-dvh bg-background z-50 absolute p-0 gap-0 border-l-0 border-t-0 border-b-0">
        <div className="flex ">
          <div className="p-2 absolute -right-10 top-1/2 bg-background border border-l-0 rounded-r-full">
            <ArrowBigRight />
          </div>
          <div className="flex items-center justify-center font-bold text-sm my-5  w-full text-center">
            Admin Dashboard
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Sidebar;
