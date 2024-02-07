"use client"

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";

const Settings = () => {

    const user = useCurrentUser()

    const onLogout = () => {
        logout()
    }

    return (
        <div className="p-6 bg-neutral-50">
            Settings page must be protected redircrt to it whene login
            <p>the session {JSON.stringify(user)}</p>
            <Button type="submit" onClick={onLogout}>
                Sign Out
            </Button>
        </div>
    );
}
 
export default Settings;