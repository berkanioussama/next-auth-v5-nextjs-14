'use client'

import {useForm} from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';

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
import FormSuccess from '../FormSeccess';

const LoginForm = () => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
        console.log(values)
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
                                        placeholder='********'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message='Cant login' />
                <FormSuccess message='login Successed' />
                <Button type='submit' className='w-full '>
                    Login
                </Button>
            </form>
        </Form>
    );
}
 
export default LoginForm;