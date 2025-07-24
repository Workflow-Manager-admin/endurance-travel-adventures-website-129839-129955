import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, Users, Star } from 'lucide-react'
import { Adventure } from '@/lib/supabase'
import { formatPrice, slugify } from '@/lib/utils'
import { Button } from './ui/Button'

interface AdventureCardProps {
  adventure: Adventure
  featured?: boolean
}

// PUBLIC_INTERFACE
export const AdventureCard: React.FC<AdventureCardProps> = ({ 
  adventure, 
  featured = false 
}) => {
  /**
   * Card component for displaying adventure information with image, details, and booking option
   */
  const adventureSlug = slugify(adventure.title)

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? 'lg:col-span-2 lg:row-span-2' : ''
    }`}>
      <div className="relative">
        <Image
          src={adventure.image_url || '/placeholder-adventure.jpg'}
          alt={adventure.title}
          width={featured ? 800 : 400}
          height={featured ? 600 : 300}
          className={`w-full object-cover ${featured ? 'h-80' : 'h-48'}`}
        />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            adventure.difficulty === 'Easy' 
              ? 'bg-green-100 text-green-800'
              : adventure.difficulty === 'Moderate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {adventure.difficulty}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-[#a74525] text-white px-3 py-1 rounded-full text-sm font-bold">
            {formatPrice(adventure.price)}
          </span>
        </div>

        {/* Featured Badge */}
        {adventure.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="h-4 w-4 mr-1 fill-current" />
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className={`font-bold text-[#18253a] mb-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {adventure.title}
        </h3>
        
        <p className={`text-gray-600 mb-4 ${featured ? 'text-base' : 'text-sm'}`}>
          {adventure.short_description}
        </p>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {adventure.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {adventure.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            Small Groups
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={`/adventures/${adventureSlug}`}
            className="text-[#a74525] hover:text-[#8b3a1f] font-medium transition-colors"
          >
            Learn More →
          </Link>
          <Button variant="primary" size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}
