import { Resend } from "resend";
import { ConfirmEmailTemplate } from "@/components/confirm-email-template";
import { ResetPasswordEmailTemplate } from "@/components/reset-password-email-template";

const resend = new Resend(process.env.RESEND_API_KEY)

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
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        react: ResetPasswordEmailTemplate({resetLink}),
        text: "email template field"
    })
}