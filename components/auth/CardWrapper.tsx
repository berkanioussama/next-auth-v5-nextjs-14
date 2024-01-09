'use client'

import { 
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Header from "@/components/auth/Header";
import Social from "@/components/auth/Social";
import BackButton from "@/components/auth/BackButton";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
const CardWrapper: React.FC<CardWrapperProps> = ({children,headerLabel,backButtonLabel,backButtonHref,showSocial}) => {
    return (
        <Card className="w-full max-w-96 shadow-sm">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
}
 
export default CardWrapper;