import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

// PUBLIC_INTERFACE
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-[#18253a] text-white hover:bg-[#0f1926] focus:ring-[#18253a]',
    secondary: 'bg-[#38bdf8] text-white hover:bg-[#0ea5e9] focus:ring-[#38bdf8]',
    accent: 'bg-[#a74525] text-white hover:bg-[#8b3a1f] focus:ring-[#a74525]',
    outline: 'border-2 border-[#18253a] text-[#18253a] hover:bg-[#18253a] hover:text-white focus:ring-[#18253a]',
    ghost: 'text-[#18253a] hover:bg-[#18253a]/10 focus:ring-[#18253a]'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
