'use client'

import {FcGoogle} from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { Button } from '@/components/ui/button';

const Social = () => {
    return (
        <div className="w-full flex gap-x-2 items-center">
            <Button 
                size="lg" 
                variant="outline" 
                className='w-full' 
                onClick={()=>{}}
            >
                <FcGoogle className="w-5 h-5"/>
            </Button>
            <Button 
                size="lg" 
                variant="outline" 
                className='w-full' 
                onClick={()=>{}}
            >
                <FaGithub className="w-5 h-5"/>
            </Button>
        </div>
    );
}
 
export default Social;