'use client'

import UserInfo from "@/components/User-Info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {

    const user = useCurrentUser()

    return (
        <div>
            <UserInfo user={user} label="Client Cmponent" />
        </div>
    );
}
 
export default ClientPage;