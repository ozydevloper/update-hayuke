"use client";
import { Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const TopBar = () => {
  const { setTheme } = useTheme();
  return (
    <div className="w-full flex items-center justify-between px-5 border-b py-1">
      <span className="font-bold text-xl">Hayuke!</span>
      <div className="flex items-center justify-center gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <Moon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tema</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size={"md"}>
              <div className="flex items-center justify-between gap-x-2 p-1">
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                  <AvatarImage />
                </Avatar>
                <span className="font-normal text-sm">Anonim</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Akun</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log-In</DropdownMenuItem>
            <DropdownMenuItem>Sign-In</DropdownMenuItem>
            <DropdownMenuItem>Log-Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
