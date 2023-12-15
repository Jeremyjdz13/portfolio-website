"use client"
import React from 'react'
import { BsSun } from 'react-icons/bs'
import { GiEclipse } from "react-icons/gi";
import clsx from 'clsx';
import { useTheme } from '@/context/theme-context';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme()
  return (
   <div className={clsx({
    "glow-container": theme === "dark",
   })}>
     <button 
        className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-none dark:shadow-none dark:glow-container'
        onClick={toggleTheme}
    >
        {theme === 'light' ? <BsSun /> : <GiEclipse />}
    </button>
   </div>
  )
}
