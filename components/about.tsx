"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/app/lib/hooks';

function About() {
  
  const { ref } = useSectionInView('About', 0.75)

  return (
    <motion.section 
        className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        ref={ref}
    >
       <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'> After spending several years studying{" "}<span className='font-medium'>Studio Painting</span> and a career in <span className='font-medium'>Information Technology</span>, I decided to pursue my passion for programming and enrolled in <span className='italic'>"Continual Education"</span>{" "}certificate program and earned{" "}<span className="font-medium">JavaScript, React, and Nodejs</span>{" "}<span className='underline'>Certificate of Completion</span>.{" "}<span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and NoSql databases like MongoDB and Firebase
        </span>
        . I am also familiar with TypeScript and Zod. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.</p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and table top role playing games. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium"> ancient history and theology</span>. I am in the process converting my shed into an art studio and can't wait to start making art again.
        </p>
    </motion.section>
  )
}

export default About