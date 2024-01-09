import { cn } from '@/lib/utils'

import { Poppins } from 'next/font/google'
const popp = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

interface HeaderProps{
    label: string;
}
const Header = ({label}: HeaderProps) => {
    return (
        <div className='w-full flex flex-col gap-y-4 justify-center items-center'>
            <h1 className={cn(popp.className,"text-3xl ")}>
                Auth
            </h1>
            <p className='text-sm text-muted-foreground'>
                {label}
            </p>
        </div>
    );
}
 
export default Header;