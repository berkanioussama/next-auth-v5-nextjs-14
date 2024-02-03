import { db } from "@/lib/db";

export const getTowFactorTokenByToken = async (token: string) => {
    try{
        const towFactorToken = await db.twoFactorToken.findUnique({
            where: {token}
        })

        return towFactorToken

    } catch {
        return null
    }
}

export const getTowFactorTokenByEmail = async (email: string) => {
    try{
        const towFactorToken = await db.twoFactorToken.findFirst({
            where: {email}
        })

        return towFactorToken

    } catch {
        return null
    }
}