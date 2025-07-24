'use client'

import React, { useEffect, useState } from 'react'
import { Filter, Search } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AdventureCard } from '@/components/AdventureCard'
import { Button } from '@/components/ui/Button'
import { supabase, Adventure } from '@/lib/supabase'

export default function AdventuresPage() {
  const [adventures, setAdventures] = useState<Adventure[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
  const [selectedLocation, setSelectedLocation] = useState<string>('')

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const { data, error } = await supabase
          .from('adventures')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching adventures:', error)
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

    fetchAdventures()
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
    },
    {
      id: '4',
      title: 'Amazon Rainforest Expedition',
      description: 'Deep jungle exploration in the heart of the Amazon.',
      short_description: 'Wildlife encounters and indigenous culture in the world\'s largest rainforest.',
      image_url: '/adventures/amazon.jpg',
      gallery_images: [],
      duration: '8 days',
      difficulty: 'Moderate',
      location: 'Peru',
      price: 1599,
      featured: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'Kilimanjaro Summit',
      description: 'Reach the highest peak in Africa on this challenging climb.',
      short_description: 'Stand on the roof of Africa and witness breathtaking sunrise views.',
      image_url: '/adventures/kilimanjaro.jpg',
      gallery_images: [],
      duration: '7 days',
      difficulty: 'Challenging',
      location: 'Tanzania',
      price: 2199,
      featured: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'Norwegian Fjords Kayaking',
      description: 'Paddle through dramatic fjords and pristine waters.',
      short_description: 'Sea kayaking adventure through Norway\'s most spectacular landscapes.',
      image_url: '/adventures/norway-fjords.jpg',
      gallery_images: [],
      duration: '5 days',
      difficulty: 'Easy',
      location: 'Norway',
      price: 999,
      featured: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  ]

  const filteredAdventures = adventures.filter(adventure => {
    const matchesSearch = adventure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         adventure.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = !selectedDifficulty || adventure.difficulty === selectedDifficulty
    const matchesLocation = !selectedLocation || adventure.location.includes(selectedLocation)
    
    return matchesSearch && matchesDifficulty && matchesLocation
  })

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#18253a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Adventures
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover extraordinary expeditions that will challenge your limits and create memories that last a lifetime
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a74525] focus:border-[#a74525]"
              >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Challenging">Challenging</option>
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a74525] focus:border-[#a74525]"
              >
                <option value="">All Locations</option>
                <option value="Nepal">Nepal</option>
                <option value="Iceland">Iceland</option>
                <option value="Argentina">Argentina</option>
                <option value="Peru">Peru</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Norway">Norway</option>
              </select>
            </div>
            
            <div className="relative flex-1 md:flex-initial md:w-80">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search adventures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a74525] focus:border-[#a74525]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
          ) : filteredAdventures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAdventures.map((adventure) => (
                <AdventureCard key={adventure.id} adventure={adventure} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-[#18253a] mb-4">No adventures found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedDifficulty('')
                  setSelectedLocation('')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
