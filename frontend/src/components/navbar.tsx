import * as React from "react"
import logo from "@/assets/logo.png"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full flex items-center justify-between px-4">
        <NavigationMenuItem>
          <a className="flex items-center">
            <img src={logo} className="h-12 w-auto" />
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">BEADB</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
