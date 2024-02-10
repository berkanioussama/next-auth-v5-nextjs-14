"use client"

import * as z from 'zod'
import { settings } from "@/actions/settings";
import { useForm } from 'react-hook-form';
import { SettingsSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useCurrentUser } from '@/hooks/use-current-user';

import { useState, useTransition } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormError from '@/components/Form-Error';
import FormSuccess from '@/components/Form-Seccess';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserRole } from '@prisma/client';
import { Switch } from '@/components/ui/switch';

const Settings = () => {

    const user = useCurrentUser()
    
    const [isPanding, startTransition] = useTransition()

    const { update } = useSession()

    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(()=> {
            settings(values)
                .then((data)=> {
                    if (data.error) {
                        setError(data.error)
                    }

                    if (data.success) {
                        update()
                        setSuccess(data.success)
                    }
                })
                .catch(()=> setError("Somthing went wrong!"))
        })
    }

    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        }
    })

    return (
        <Card className="min-w-[23rem] max-w-[40rem]">
            <CardHeader>
                <p className="text-2xl text-center font-semibold ">
                    ⚙️ Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form 
                        className='space-y-6' 
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className='space-y-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({field})=> (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='Name'
                                                type='text'
                                                disabled={isPanding}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {user?.isOAuth === false && (
                            <div>    
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder='example@email.com'
                                                    type='email'
                                                    disabled={isPanding}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='password'
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Old password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder='********'
                                                    type='password'
                                                    disabled={isPanding}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='newPassword'
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>New password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder='********'
                                                    type='password'
                                                    disabled={isPanding}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            )}
                            <FormField
                                control={form.control}
                                name='role'
                                render={({field})=> (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            disabled={isPanding}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value={UserRole.USER}>
                                                    User
                                                </SelectItem>
                                                <SelectItem value={UserRole.ADMIN}>
                                                    Admin
                                                </SelectItem>
                                                <SelectItem value={UserRole.SUPERVISOR}>
                                                    Supervisor
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {user?.isOAuth === false && (
                                <FormField
                                    control={form.control}
                                    name='isTwoFactorEnabled'
                                    render={({field})=> (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                            <div className="space-y-0.5">
                                                <FormLabel>Two Factor Authentication</FormLabel>
                                                <FormDescription>Enable TwoFactor authentication for your account</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled={isPanding}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button type='submit' disabled={isPanding}>
                            Save update
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
 
export default Settings;