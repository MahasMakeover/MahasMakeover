'use client'

import { Sparkles } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
      <div className="relative flex flex-col items-center bg-white/95 backdrop-blur-md px-10 py-8 rounded-3xl shadow-2xl border border-accent/10">
        {/* Logo/Brand spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-accent/20" />
          
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-accent border-r-accent2 animate-spin" />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent2 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="text-white animate-pulse" size={20} />
            </div>
          </div>
        </div>
        
        {/* Loading text with animated dots */}
        <div className="mt-4 flex items-center gap-1.5 text-text font-medium">
          <span>Loading</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </div>
      </div>
    </div>
  )
}

