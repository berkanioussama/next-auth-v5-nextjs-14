'use client'

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import FormError from "@/components/Form-Error";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole
}

const RoleGate = ({children, allowedRole}: RoleGateProps) => {

    const role = useCurrentRole()

    if (role !== allowedRole) {
        return (
            <div>
                <FormError message="You do not have permition to view this content!"/>
            </div>
        );
    }

    return (
        <div>
            {children}
        </div>
    )
}
 
export default RoleGate;