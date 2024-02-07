'use client'

import { usePathname } from "next/navigation";
import UserButton from "@/components/auth/User-Button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {

    const pathName = usePathname()

    return (
        <nav className="flex justify-between items-center w-[40rem] px-6 py-4 rounded-xl bg-secondary shadow-sm ">
            <div className="flex gap-x-4">
                <Button 
                    asChild
                    variant={pathName === "/settings" ? "default" : "outline"}
                >
                    <Link href="/settings">
                        Settings
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathName === "/server" ? "default" : "outline"}
                >
                    <Link href="/server">
                        Server
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathName === "/client" ? "default" : "outline"}
                >
                    <Link href="/client">
                        Client
                    </Link>
                </Button>
                <Button 
                    asChild
                    variant={pathName === "/admin" ? "default" : "outline"}
                >
                    <Link href="/admin">
                        Admin
                    </Link>
                </Button>
            </div>
            <UserButton/>
        </nav>
    );
}
 
export default Navbar;