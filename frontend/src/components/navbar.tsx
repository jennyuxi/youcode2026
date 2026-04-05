import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-300 bg-white">
      <div className="flex items-center px-4 py-2">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          <img src={logo} className="h-12 w-auto" alt="Logo" />

            <Link to="/docs" className="text-2xl font-bold tracking-wide">
                BEADB
            </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto">
          <Link to="/profile">
            <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </Link>
        </div>

      </div>
    </header>
  )
}