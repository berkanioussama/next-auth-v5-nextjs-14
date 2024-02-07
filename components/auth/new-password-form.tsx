"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormError from "@/components/Form-Error";
import FormSuccess from "@/components/Form-Seccess";
import { useState, useTransition } from "react";
import { NewPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { newPassword } from '@/actions/new-password';
import { useSearchParams } from "next/navigation";

export const NewPasswordForm = () => {

    const searchParams = useSearchParams();

    const token = searchParams.get("token");

    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const [isPanding, startTransition] = useTransition()

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>)=>{
        setError("")
        setSuccess("")
        
        startTransition(()=>{
            newPassword(values, token)
                .then((data)=>{
                    setError(data?.error)
                    setSuccess(data?.success)
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
                    Reset password
                </Button>
            </form>
        </Form>
    )
}