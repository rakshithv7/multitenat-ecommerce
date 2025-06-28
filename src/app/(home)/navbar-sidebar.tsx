"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: Props) => {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none w-[260px]">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="p-4">
          <div className="flex flex-col gap-2">
            {/* Main nav links */}
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  asChild
                  variant="ghost"
                  className={cn(
                    "justify-start w-full bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg text-left",
                    isActive &&
                      "bg-black text-white hover:bg-black hover:text-white"
                  )}
                  onClick={() => onOpenChange(false)}
                >
                  <Link href={item.href}>{item.children}</Link>
                </Button>
              );
            })}

            {/* Divider */}
            <div className="my-2 border-t pt-2" />

            {/* Login */}
            <Button
              asChild
              variant="ghost"
              className="justify-start w-full bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg text-left"
              onClick={() => onOpenChange(false)}
            >
              <Link href="/sign-up">Log in</Link>
            </Button>

            {/* Start Selling */}
            <Button
              asChild
              variant="ghost"
              className="justify-start w-full bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg text-left"
              onClick={() => onOpenChange(false)}
            >
              <Link href="/sell">Start selling</Link>
            </Button>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
