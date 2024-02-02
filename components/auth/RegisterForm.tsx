'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import bcrypt from 'bcrypt'
import { useState, useTransition } from 'react';
import { RegisterSchema } from '@/schemas';

import { 
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/FormError';
import FormSuccess from '@/components/FormSeccess';
import { register } from '@/actions/register';

const RegisterForm = () => {

    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const [isPanding, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
          email: "",
          name: "",
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>)=>{
        startTransition(()=>{
            register(values)
                .then((data)=>{
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
            >
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
                        name="name"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        type="text"
                                        disabled={isPanding}
                                        placeholder='example Name'
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
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type='submit' className='w-full' disabled={isPanding}>
                    Register
                </Button>
            </form>
        </Form>
    );
}
 
export default RegisterForm;