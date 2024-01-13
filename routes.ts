export const publicRoutes = [
    /** the pathes can see it with out log in */
    "/",
]

export const authRoutes = [
    /** the pathes used for authentication*/
    "/auth/login",
    "/auth/register",
    "/auth/error",
]

export const adminRoutes = [
    /** the pathes can admin see */
    "/dashboard",
]

/** prefix for api authentication routes */
export const apiAuthPrifix = "/api/auth"

/** defult redirect path after loggin in */
export const DEFAULT_LOGIN_REDIRECT = "/settings"