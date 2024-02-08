'use client'

import { admin } from "@/actions/admin";
import FormSuccess from "@/components/Form-Seccess";
import RoleGate from "@/components/auth/Role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {

    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response)=>{
                if (response.ok) {
                    toast.success("Allowed API Route!")
                }else {
                    toast.error("Forbidden API Route!")
                }
            })
    }

    const onServerActionClick = () => {
        admin()
            .then((data)=>{
                if (data.error) {
                    toast.error(data.error)
                }else {
                    toast.success(data.success)
                }
            })
    }

    return (
        <Card className="w-[40rem]">
            <CardHeader>
                <p className="text-2xl text-center font-semibold">
                🔑 Admin
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN} >
                    <FormSuccess message="You are allowed to see this content because you are an Admin" />
                </RoleGate>
                <div className="flex flex-row justify-between items-center border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Admin-only API Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row justify-between items-center border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Admin-only Server Action
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default AdminPage;