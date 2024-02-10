import { Resend } from "resend";
import { ConfirmEmailTemplate } from "@/components/Confirm-Email-Template";
import { ResetPasswordEmailTemplate } from "@/components/Reset-Password-Email-Template";

const resend = new Resend(process.env.RESEND_API_KEY)

const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        react: ConfirmEmailTemplate({confirmLink}),
        text: "email template field"
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        react: ResetPasswordEmailTemplate({resetLink}),
        text: "reset password template field"
    })
}

export const sendTwoFactorEmail = async (email: string, token: string) => {

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "2FA code",
        html: `<h2>Your 2FA code: ${token}</h2>`
    })
}