'use client'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Metrics from '@/components/sections/Metrics'
import About from '@/components/sections/About'
import Capabilities from '@/components/sections/Capabilities'
import WorkflowArchitecture from '@/components/sections/WorkflowArchitecture'
import CaseStudies from '@/components/sections/CaseStudies'
import AIAutomation from '@/components/sections/AIAutomation'
import TechStack from '@/components/sections/TechStack'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Capabilities />
      <WorkflowArchitecture />
      <CaseStudies />
      <AIAutomation />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
