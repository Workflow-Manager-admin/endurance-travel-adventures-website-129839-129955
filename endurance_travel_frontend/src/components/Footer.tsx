import React from 'react'
import Link from 'next/link'
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

// PUBLIC_INTERFACE
export const Footer: React.FC = () => {
  /**
   * Website footer with contact information, links, and social media
   */
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#18253a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-[#a74525]" />
              <span className="text-xl font-bold">Endurance Travel</span>
            </div>
            <p className="text-gray-300 text-sm">
              Creating extraordinary adventure experiences that push boundaries and create lifelong memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/adventures" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Our Adventures
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Adventures */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Adventures</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/adventures/mountain-expeditions" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Mountain Expeditions
                </Link>
              </li>
              <li>
                <Link href="/adventures/wilderness-treks" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Wilderness Treks
                </Link>
              </li>
              <li>
                <Link href="/adventures/cultural-journeys" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Cultural Journeys
                </Link>
              </li>
              <li>
                <Link href="/adventures/extreme-sports" className="text-gray-300 hover:text-[#38bdf8] transition-colors">
                  Extreme Sports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#a74525]" />
                <span className="text-gray-300 text-sm">info@endurancetravel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#a74525]" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#a74525] mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Adventure Street<br />
                  Mountain View, CA 94041
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Endurance Travel Adventures. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-[#38bdf8] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-[#38bdf8] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
