const AuthLayout = ({ children }: { children: React.ReactNode })=> {

    return (
        <main className="h-full flex justify-center items-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-600">
            {children}
        </main>
    )
}
export default AuthLayout