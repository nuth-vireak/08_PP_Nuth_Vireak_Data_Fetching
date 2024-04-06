'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle

} from "@/components/ui/navigation-menu";

import Link from "next/link";

import {PiDevToLogoFill} from "react-icons/pi";


export function Header() {
    return (
        <div className="flex items-center justify-between shadow p-3 px-10 fixed z-10 w-full bg-white">
            <div className={"flex gap-3 justify-between items-center"}>
                <PiDevToLogoFill className={"text-5xl"} />
            </div>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                            <Link href="/product" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Products
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}