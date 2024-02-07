"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormError from "@/components/Form-Error";
import FormSuccess from "@/components/Form-Seccess";
import { useState, useTransition } from "react";
import { ResetSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { reset } from '@/actions/reset';

const ResetForm = () => {

    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const [isPanding, startTransition] = useTransition()

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
          email: "",
        },
    });

    const onSubmit = (values: z.infer<typeof ResetSchema>)=>{
        setError("")
        setSuccess("")
        
        startTransition(()=>{
            reset(values)
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
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type='submit' className='w-full' disabled={isPanding}>
                    Send reset email
                </Button>
            </form>
        </Form>
    );
}
 
export default ResetForm;