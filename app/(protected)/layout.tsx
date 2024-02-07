import Navbar from "@/app/(protected)/_components/Navbar"

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 justify-center items-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-600">
            <Navbar />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default ProtectedLayout