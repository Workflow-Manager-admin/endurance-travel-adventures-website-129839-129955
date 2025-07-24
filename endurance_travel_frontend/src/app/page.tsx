import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturedAdventures } from '@/components/FeaturedAdventures'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedAdventures />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
