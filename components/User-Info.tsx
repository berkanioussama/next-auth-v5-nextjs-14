import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps{
    user?: ExtendedUser
    label: string
}

const UserInfo = ({user, label}: UserInfoProps) => {
    return (
        <Card className="w-[40rem] shadow-sm">
            <CardHeader>
                <p className="text-2xl text-center font-semibold">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-4 ">
                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        ID: 
                    </p>
                    <p className="p-1 text-xs text-mono bg-slate-100 rounded-md">
                        {user?.id}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        NAME: 
                    </p>
                    <p className="p-1 text-mono bg-slate-100 rounded-md">
                        {user?.name}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        Email: 
                    </p>
                    <p className="p-1 text-mono bg-slate-100 rounded-md">
                        {user?.email}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        Role: 
                    </p>
                    <p className="p-1 text-mono bg-slate-100 rounded-md">
                        {user?.role}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        Two factor authentication: 
                    </p>
                    <Badge 
                        variant={user?.isTwoFactorEnabled ? "success" : "destructive"}
                    >
                        {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default UserInfo;