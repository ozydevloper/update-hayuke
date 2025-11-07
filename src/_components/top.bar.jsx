"use client";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { useSession } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import login from "@/lib/auth/login";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { logout } from "@/lib/auth/logout";
import { useEffect, useState } from "react";

const TopBar = () => {
  const { setTheme } = useTheme();
  const router = useRouter()
  const {data: session} = useSession()

  return (
    <div className="w-full h-9 sticky top-0 left-0 right-0 flex items-center justify-between px-3 py-5 border-b bg-background z-50">
      <Logo />
      <div className="flex items-center gap-x-2">
        {
          session && session.user.role === "ADMIN" && <Button size={'sm'} variant={'ghost'} className={'font-bold text-sm'} onClick={() => router.push("/dashboard/admin")}>Admin</Button>
        }
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Tema</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {

              session ? 
                <Avatar>
                  <AvatarImage src={session?.user?.image} alt="hayuke-avatar" />
                  <AvatarFallback>H</AvatarFallback>                    
                </Avatar>
               : <Button size={"sm"}>Masuk</Button>

            }
            
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Akun</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {session ?<DropdownMenuItem onClick={() => logout()}>Log-out</DropdownMenuItem> : <DropdownMenuItem onClick={() => login()}>Log-in</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
