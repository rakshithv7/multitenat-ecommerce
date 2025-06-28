"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavbarSidebar } from "./navbar-sidebar";
import { MenuIcon } from "lucide-react";



const poppins=Poppins({
    subsets: ["latin"],
    weight: ["700"],
})
interface NavbarItemsProps{
    href:string;
    children: React.ReactNode;
    isActive: boolean;
};
const NavbarItem =({
    href,
    children,
    isActive,
}:NavbarItemsProps)=>{
    return(
        <Button 
        asChild
        variant="outline"
        className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",isActive && "bg-black text-white hover:bg-black hover:text-white",
        )}
        >
        <Link href={href}>
        {children}
        </Link>
        </Button>
    )
}
const navbarItems=[
    {href:"/",children:"Home"},
    {href:"/about",children:"About"},
    {href:"/features",children:"Features"},
    {href:"/pricing",children:"Pricing"},
    {href:"/contact",children:"Contact"},
];
 const Navbar = ()=>{
    const pathname=usePathname();
    const [SidebarOpen,setIsSidebarOpen] =useState(false);
    return(
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
            <span className={cn("text-5xl font-semibold",poppins.className)}>
                RR
            </span>
            </Link>

            <NavbarSidebar
            items={navbarItems}
            open={SidebarOpen}
            onOpenChange={setIsSidebarOpen}
            />
            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item)=>(
                    <NavbarItem
                    key={item.href}
                    href={item.href}
                    isActive={pathname===item.href}
                    >
                    {item.children}
                    </NavbarItem>
                ))}

            </div>
            <div className="hidden lg:flex gap-2 items-center">
                <Button
                asChild
                variant="secondary"
                 className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg items-center",
        )}
                >
                <Link href="/sign-up">
                    Log in
                </Link>
                </Button>
                <Button
                asChild
                variant="secondary"
                className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg items-center",
        )}
                >
                    <Link href="/sell">
                    Start selling
                    </Link>
                </Button>
            </div>
            <div className="flex lg:hidden items-center justify-center">
                <Button
                variant="ghost"
                className="size-12 border-transparent bg-white"
                onClick={()=> setIsSidebarOpen(true)}
                >
                    <MenuIcon/>
                </Button>
            </div>
        </nav>
    )
}
export default Navbar