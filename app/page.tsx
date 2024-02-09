
import LoginButton from '@/components/auth/Login-Button'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { Poppins } from 'next/font/google'
const popp = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className='flex flex-col h-full justify-center items-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-600'>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md',popp.className)}>
        🔐 Auth
        </h1>
        <p className='text-lg text-white'>
        Simple Aurhentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
