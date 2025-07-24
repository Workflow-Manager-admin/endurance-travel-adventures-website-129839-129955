'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronRight, Play } from 'lucide-react'
import { Button } from './ui/Button'

// PUBLIC_INTERFACE
export const Hero: React.FC = () => {
  /**
   * Hero section with compelling adventure imagery and call-to-action
   */
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mountain.jpg"
          alt="Mountain adventure landscape"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Push Your</span>
          <span className="block text-[#a74525]">Boundaries</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Embark on extraordinary adventures that challenge your limits and create memories that last a lifetime
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="accent" size="lg" className="text-lg px-8 py-4">
            Explore Adventures
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          
          <button className="flex items-center space-x-3 text-white hover:text-[#38bdf8] transition-colors group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-[#38bdf8]/30 transition-colors">
              <Play className="h-6 w-6 ml-1" />
            </div>
            <span className="text-lg font-medium">Watch Our Story</span>
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#38bdf8]">500+</div>
            <div className="text-gray-300 mt-1">Adventures Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#38bdf8]">50+</div>
            <div className="text-gray-300 mt-1">Countries Explored</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#38bdf8]">10k+</div>
            <div className="text-gray-300 mt-1">Happy Adventurers</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  )
}
