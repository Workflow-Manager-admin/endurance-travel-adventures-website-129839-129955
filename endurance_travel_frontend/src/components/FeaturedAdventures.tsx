'use client'

import React, { useEffect, useState } from 'react'
import { supabase, Adventure } from '@/lib/supabase'
import { AdventureCard } from './AdventureCard'
import { Button } from './ui/Button'

// PUBLIC_INTERFACE
export const FeaturedAdventures: React.FC = () => {
  /**
   * Section displaying featured adventures with dynamic data from Supabase
   */
  const [adventures, setAdventures] = useState<Adventure[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedAdventures = async () => {
      try {
        const { data, error } = await supabase
          .from('adventures')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false })
          .limit(6)

        if (error) {
          console.error('Error fetching adventures:', error)
          // Use fallback data for demo
          setAdventures(getFallbackAdventures())
        } else {
          setAdventures(data || getFallbackAdventures())
        }
      } catch (error) {
        console.error('Error connecting to Supabase:', error)
        setAdventures(getFallbackAdventures())
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedAdventures()
  }, [])

  const getFallbackAdventures = (): Adventure[] => [
    {
      id: '1',
      title: 'Everest Base Camp Trek',
      description: 'Experience the ultimate mountain adventure with our guided trek to Everest Base Camp.',
      short_description: 'Trek to the base of the world\'s highest mountain through stunning Himalayan landscapes.',
      image_url: '/adventures/everest-base-camp.jpg',
      gallery_images: [],
      duration: '14 days',
      difficulty: 'Challenging',
      location: 'Nepal Himalayas',
      price: 2499,
      featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Patagonia Wilderness',
      description: 'Explore the pristine wilderness of Patagonia with expert guides.',
      short_description: 'Discover glaciers, mountains, and wildlife in Earth\'s last frontier.',
      image_url: '/adventures/patagonia.jpg',
      gallery_images: [],
      duration: '10 days',
      difficulty: 'Moderate',
      location: 'Argentina & Chile',
      price: 1899,
      featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Iceland Northern Lights',
      description: 'Chase the Northern Lights across Iceland\'s dramatic landscapes.',
      short_description: 'Winter adventure combining glacier walks, hot springs, and aurora hunting.',
      image_url: '/adventures/iceland.jpg',
      gallery_images: [],
      duration: '7 days',
      difficulty: 'Easy',
      location: 'Iceland',
      price: 1299,
      featured: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ]

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#18253a] mb-4">
              Featured Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular expeditions and life-changing experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18253a] mb-4">
            Featured Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular expeditions and life-changing experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {adventures.map((adventure, index) => (
            <AdventureCard 
              key={adventure.id} 
              adventure={adventure} 
              featured={index === 0}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Adventures
          </Button>
        </div>
      </div>
    </section>
  )
}
