"use server"

import { CurrentUserRole } from "@/lib/auth"
import { UserRole } from "@prisma/client"

export const admin = async () => {

    const role = await CurrentUserRole()

    if (role === UserRole.ADMIN) {
        return {success: "Allowed!"}
    }

    return {error: "Forbissen!"}
}