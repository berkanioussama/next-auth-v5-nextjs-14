'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';

import { 
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form';
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/FormError';
import FormSuccess from '@/components/FormSeccess';
import { login } from '@/actions/login';
import Link from 'next/link';

const LoginForm = () => {

    const searchParams = useSearchParams()
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with other Oauth" : "";

    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const [isPanding, startTransition] = useTransition()

    const [showTowFactor, setShowTowFactor] = useState(false)

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
        startTransition(()=>{
            login(values)
                .then((data)=>{
                    if (data?.error) {
                        form.reset()
                        setError(data?.error)
                    }
                    if (data?.success) {
                        form.reset()
                        setError(data?.success)
                    }
                    
                    //  2fa
                    if (data?.twoFactor) {
                        setShowTowFactor(true)
                    }
                })
                    .catch(()=>setError("Somthing went wrong in login"))
        })
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
            >
                {showTowFactor && (
                <div className='space-y-4'>
                    <FormField 
                        control={form.control} 
                        name="code"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Two factor code</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        type="text"
                                        disabled={isPanding}
                                        placeholder='123456'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                )}

                {!showTowFactor && (
                <div className='space-y-4'>
                    <FormField 
                        control={form.control} 
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        type="email"
                                        disabled={isPanding}
                                        placeholder='examplename@mail.com'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control} 
                        name="password"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        type="password"
                                        disabled={isPanding}
                                        placeholder='********'
                                    />
                                </FormControl>
                                <Button size="sm" variant="link" asChild className='px-0 font-normal'>
                                    <Link href="/auth/reset">
                                        Forget password?
                                    </Link>
                                </Button>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                )}
                <FormError message={error || urlError} />
                <FormSuccess message={success} />
                <Button type='submit' className='w-full' disabled={isPanding}>
                    {showTowFactor ? "Confirm" : "Login"}
                </Button>
            </form>
        </Form>
    );
}
 
export default LoginForm;