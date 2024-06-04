"use client"
import { useTheme } from "next-themes";
import { Moon, Sun, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { SearchModalBtn } from "./search-modal";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Navbar() {
    const { setTheme } = useTheme();

    return <>
        <nav className="sticky z-50 top-0 bg-white/30 border-b border-gray-200 dark:bg-zinc-950/30 dark:border-white/10 backdrop-blur-sm w-full px-6 py-3 flex justify-between items-center shadow-md select-none">
            <div className="flex items-center gap-x-10">
                <h1 className="text-lg font-semibold">Urban Fits API Docs</h1>
                <Link target="_blank" href="https://urbanfits.ae">
                    <Button variant="outline" size="sm" className="text-xs whitespace-nowrap">
                        Visit Urban Fits&nbsp;&nbsp;&nbsp; <SquareArrowOutUpRight className="h-[1rem] w-[1rem]" />
                    </Button>
                </Link>
            </div>
            <section className="flex justify-center items-center gap-x-4">
                <SearchModalBtn />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
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
            </section>
        </nav>
    </>
}