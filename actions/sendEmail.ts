import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/app/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    "use server"
    const senderEmail = formData.get('senderEmail')
    const senderMessage = formData.get('message')

   
    if(!validateString(senderEmail, 500)){
        return {
            error: "Invalid sender email"
        }
    }

    if(!validateString(senderMessage, 5000)){
        return {
            error: "Invalid sender message"
        }
    }    

   try {
       const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'jeremyjdz@gmail.com',
            subject: "Message from Portfolio Site",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {message: senderMessage as string, senderEmail: senderEmail as string})
        })

        return {
            data
       }

   } catch(error: unknown) {
        return {
            error: getErrorMessage(error)
        }
   }

   
}