'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import NavItems from "@/components/NavItems"

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in")
    }

    const user = { name: "Mohak", email: "contact@hacking.com" }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500" />
                }
            >
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://plus.unsplash.com/premium_vector-1750473392717-d4bd3760d8d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
                </Avatar>

                <div className="hidden md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="text-gray-400 min-w-56">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>

                        <div className="flex relative items-center gap-3 py-2">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://plus.unsplash.com/premium_vector-1750473392717-d4bd3760d8d2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
                                <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-base font-medium text-gray-400">
                                    {user.name}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {user.email}
                                </span>
                            </div>

                        </div>

                    </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-progress">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block"/>
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
                <nav className="sm:hidden">
                    <NavItems/>
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown