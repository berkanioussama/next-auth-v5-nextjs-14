import UserInfo from "@/components/User-Info";
import { Card } from "@/components/ui/card";
import { CurrentUser } from "@/lib/auth";

const ServerPage = async () => {

    const user = await CurrentUser()

    return (
        <Card>
            <UserInfo user={user} label="Server Cmponent" />
        </Card>
    );
}
 
export default ServerPage;