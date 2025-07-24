import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  adventure: string
  content: string
  rating: number
  avatar: string
}

// PUBLIC_INTERFACE
export const Testimonials: React.FC = () => {
  /**
   * Testimonials section showcasing customer experiences and reviews
   */
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'California, USA',
      adventure: 'Everest Base Camp Trek',
      content: 'Absolutely life-changing experience! The guides were incredible and the organization was flawless. I pushed my limits and discovered strength I never knew I had.',
      rating: 5,
      avatar: '/testimonials/sarah.jpg'
    },
    {
      id: '2',
      name: 'Marcus Chen',
      location: 'Singapore',
      adventure: 'Patagonia Wilderness',
      content: 'The landscapes were breathtaking and the small group size made it feel personal. Every detail was taken care of. Already planning my next adventure!',
      rating: 5,
      avatar: '/testimonials/marcus.jpg'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      location: 'Madrid, Spain',
      adventure: 'Iceland Northern Lights',
      content: 'Magical doesn\'t even begin to describe it. Seeing the Northern Lights dance across the sky was worth every moment. Professional team and unforgettable memories.',
      rating: 5,
      avatar: '/testimonials/emma.jpg'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#18253a] mb-4">
            What Our Adventurers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real adventurers who trusted us with their journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#a74525] fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div>
                  <div className="font-semibold text-[#18253a]">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  <div className="text-sm text-[#a74525] font-medium">{testimonial.adventure}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
