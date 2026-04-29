'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const campuses = [
  { id: 1, name: 'Thalambur Campus', image: '/thalambur.png', href: '/thalambur' },
  { id: 2, name: 'Pallavaram Campus', image: '/pallavaram.png', href: '/pallavaram' },
  { id: 3, name: 'Dargaroad Campus', image: '/dargaroad/common-page.jpg', href: '/dargaroad' },
  { id: 4, name: 'Cantonment Campus', image: '/cantonment.png', href: '/cantonment' },
]

const CARD_WIDTH = 280;
const HORIZONTAL_GAP = 310;

// --- MOBILE COMPONENT (Simplified vertical list) ---
const MobileCard = ({ campus, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="w-full"
  >
    <Link href={campus.href} target="_blank" className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-md border border-gray-100">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
        <Image src={campus.image} alt={campus.name} fill className="object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm font-bold text-[#152f5c] uppercase leading-tight">{campus.name}</h3>
        <span className="text-[10px] font-black text-[#F7931E] uppercase tracking-wider">Explore Campus →</span>
      </div>
    </Link>
  </motion.div>
)

// --- DESKTOP CARD (Your specialized animation) ---
const DesktopCard = ({ campus, index, phase }) => {
  const variants = {
    initial: { y: -600, opacity: 0, x: "-50%" },
    dropped: { 
      y: 0, 
      opacity: 1, 
      x: "-50%",
      transition: { type: 'spring', damping: 20, stiffness: 80 } 
    },
    split: { 
      x: `calc(-50% + ${(index - 1.5) * HORIZONTAL_GAP}px)`, 
      y: 0,
      opacity: 1,
      transition: { 
        delay: index * 0.05, 
        type: 'spring', 
        damping: 22, 
        stiffness: 90 
      } 
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={phase}
      className="absolute left-1/2 top-0 group"
      style={{ zIndex: 10 - index, width: `${CARD_WIDTH}px` }}
    >
      <Link href={campus.href} target="_blank">
        <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-white shadow-2xl transition-all duration-500 group-hover:-translate-y-6">
          <div className="relative aspect-[3/4.5]">
            <Image src={campus.image} alt={campus.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1931] via-transparent to-transparent p-8 flex flex-col justify-end text-center">
              <h3 className="text-white font-black text-xl mb-4 uppercase leading-tight">{campus.name}</h3>
              <span className="mx-auto px-6 py-2 bg-white text-[#0a1931] text-xs font-black uppercase rounded-full group-hover:bg-[#F7931E] group-hover:text-white transition-colors">Explore</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CampusSection() {
  const [phase, setPhase] = useState('initial')
  const [isMobile, setIsMobile] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (inView && !isMobile) {
      setPhase('dropped')
      const timer = setTimeout(() => setPhase('split'), 1000)
      return () => clearTimeout(timer)
    } else if (!inView) {
      setPhase('initial')
    }
  }, [inView, isMobile])

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden py-8 bg-[#fdfaf5]">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
         <Image src="/section-3.png" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-20 text-center mb-12 lg:mb-24 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl lg:text-7xl font-black text-[#1a1a1a] uppercase tracking-tighter"
        >
          Wisdom Is Strength
        </motion.h2>
        <p className="mt-4 text-[10px] lg:text-[14px] font-black tracking-[0.4em] uppercase text-[#152f5c] border-y border-[#152f5c]/20 py-2 inline-block">
          Explore Our World-Class Campuses
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {isMobile ? (
          // MOBILE LAYOUT: Clean vertical list
          <div className="flex flex-col gap-4">
            {campuses.map((campus, idx) => (
              <MobileCard key={campus.id} campus={campus} index={idx} inView={inView} />
            ))}
          </div>
        ) : (
          // DESKTOP LAYOUT: High-end drop animation
          <div className="relative h-[600px] flex items-center justify-center">
            {campuses.map((campus, idx) => (
              <DesktopCard key={campus.id} campus={campus} index={idx} phase={phase} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}