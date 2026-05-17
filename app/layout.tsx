import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fouad Maasdorp | Growth Systems Architect',
  description: 'AI-assisted acquisition systems, workflow automation, CRM architecture, and operational intelligence designed to improve lead velocity, conversion efficiency, and operational scalability.',
  openGraph: {
    title: 'Fouad Maasdorp | Growth Systems Architect',
    description: 'Building AI-powered growth systems that scale businesses efficiently.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg text-slate-100 antialiased overflow-x-hidden">
  <div className="animated-page-bg" />
  {children}
</body>
    </html>
  )
}
