import UserInfo from "@/components/User-Info";
import { CurrentUser } from "@/lib/auth";

const ServerPage = async () => {

    const user = await CurrentUser()

    return (
        <div>
            <UserInfo user={user} label="Server Cmponent" />
        </div>
    );
}
 
export default ServerPage;