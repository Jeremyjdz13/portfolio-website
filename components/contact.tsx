"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/app/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from "../actions/sendEmail"
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

function Contact() {
    const { ref } = useSectionInView('Contact', 0.5)
  return (
    <motion.section 
        id="contact" 
        ref={ref} 
        className="scroll-mt-28 sm:mb-28 w-[min(100%, 38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at{" "}<a className='underline' href="mailto:jeremyjdz@gmail.com">jeremyjdz@gmail.com</a>{" "}or through this form.</p>
        <form 
            className='mt-10 flex flex-col dark:text-black'
            action={async formData => {
                const { data, error } = await sendEmail(formData)
                if (error) {
                  toast.error(error)
                    return
                }

                toast.success("Email sent successfully!")
            }}
        >
            <input
                name="senderEmail"
                type="email" 
                placeholder="Email" 
                className='px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
                required 
                maxLength={500}
                />
            <textarea
                name='message'
                placeholder="Message" 
                className='p-4 h-52 my-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
                required 
                maxLength={5000}
            />
           <SubmitBtn />
        </form>
    </motion.section>
  )
}

export default Contact