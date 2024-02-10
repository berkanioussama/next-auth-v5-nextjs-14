'use client'

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "@/components/auth/Login-Form";
import CardWrapper from "@/components/auth/Card-Wrapper";

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
            <Dialog>
                <DialogTrigger asChild={asChild}>
                    {children}
                </DialogTrigger>
                <DialogContent className="p-0 w-auto bg-transparent border-none">
                    <CardWrapper 
                        headerLabel={'Welcome back'}
                        backButtonLabel={'Don`t have an account?'} backButtonHref={'/auth/register'} 
                        showSocial
                    >
                        <LoginForm/>
                    </CardWrapper>
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>
    );
}
 
export default LoginButton;