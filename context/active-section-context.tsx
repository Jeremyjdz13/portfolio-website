"use client"
import React, { useState, useContext }  from 'react'
import type { SectionName } from '@/app/lib/types'

type ActiveSectionContextProviderProps = {  
    children: React.ReactNode
    }
type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
    }

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({ children }:ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection ] = useState<SectionName>('Projects')
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider 
        value={{ 
            activeSection, 
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
            }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
    }
    return context
}

export default ActiveSectionContextProvider 