'use client'

import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({children,mode = "redirect",asChild}) => {

    const router = useRouter()
    const handleClick = ()=>{
        router.push("/auth/login");
    }

    if(mode === "modal"){
        return (
            <div className="cursor-pointer">
                TODO: create the modal here
            </div>
        );
    }
    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>
    );
}
 
export default LoginButton;