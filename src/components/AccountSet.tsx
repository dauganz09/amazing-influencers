import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useSession } from "@clerk/nextjs";
import { BellIcon, PanelsTopLeftIcon, SettingsIcon, UserIcon } from 'lucide-react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

export default function AccountSet({ className }: HTMLAttributes<HTMLElement>) {
  const router = useRouter();
  const { session } = useSession();

  return (
    <div className={cn("flex flex-row space-x-4", className)}>
      <Button variant={"ghost"} className="w-10 h-10 relative px-0">
        <BellIcon />
        <span className="absolute block w-3 h-3 rounded-full bg-red-500 border border-white top-0 right-0" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="w-10 h-10 relative hover:bg-transparent hover:opacity-90 px-0">
            <UserIcon />
            <span className="absolute block w-3 h-3 rounded-full bg-green-500 border border-white bottom-0 right-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-3">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href={"/dashboard"}>
              <PanelsTopLeftIcon className="mr-2" /> Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:cursor-pointer">
            <Link href={"/dashboard/settings"}>
              <SettingsIcon className="mr-2" /> Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="hover:cursor-pointer"
            onClick={() => {
              session?.end();
              router.push("/");
            }}
          >
            <span>
              <UserIcon className="mr-2" /> Log out
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}