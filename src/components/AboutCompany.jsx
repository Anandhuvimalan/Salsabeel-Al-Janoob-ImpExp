import { useState, useRef } from "react"
import { motion } from "framer-motion"
import video1 from '@/assets/videos/video1.mp4';
import video2 from '@/assets/videos/video2.mp4';
import video3 from '@/assets/videos/video3.mp4';
import video5 from '@/assets/videos/video5.mp4';
import video6 from '@/assets/videos/video6.mp4';

export const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null)

  const handleMouseMove = (event) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (event.clientX - left) / width
    const relativeY = (event.clientY - top) / height

    const tiltX = (relativeY - 0.5) * 10
    const tiltY = (relativeX - 0.5) * -10

    itemRef.current.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`
  }

  const handleMouseLeave = () => {
    if (itemRef.current) {
      itemRef.current.style.transform = ""
    }
  }

  return (
    <motion.div
      ref={itemRef}
      className={`relative rounded-3xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  )
}

const Features = () => (
  <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 lg:px-10 pb-10 bg-slate-900">
    <div className="text-center py-16 lg:py-24">
      <h2 className="text-4xl font-bold text-blue-50">Our Key Features</h2>
      <p className="mt-2 text-lg text-gray-300">
        Explore the diverse range of services we offer to cater to your specific needs, powered by innovation and
        expertise.
      </p>
    </div>
    <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(6,_minmax(100px,_1fr))] gap-4">
      {/* Large Video Card */}
      <BentoTilt className="col-span-1 sm:col-span-2 row-span-3 bg-orange-400">
        <video src={video1} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-blue-50 font-circular-web bg-gradient-to-t from-black/30 to-transparent">
          <h1 className="text-2xl font-bold mb-2">Global Trade Simplified</h1>
          <p className="text-base">Seamless export and import solutions tailored for your business needs.</p>
        </div>
      </BentoTilt>

      {/* Tall Video Card */}
      <BentoTilt className="row-span-2 sm:row-span-4 bg-orange-400">
        <video src={video5} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-blue-50 font-circular-web bg-gradient-to-t from-black/30 to-transparent">
          <h1 className="text-2xl font-bold mb-2">Eco-Friendly Waste Solutions</h1>
          <p className="text-base">Specialized chemical and all waste management for a cleaner tomorrow.</p>
        </div>
      </BentoTilt>

      {/* Small Video Cards */}
      <BentoTilt className="row-span-2 sm:row-span-3 bg-orange-400">
        <video src={video2} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-blue-50 font-circular-web bg-gradient-to-t from-black/30 to-transparent">
          <h1 className="text-2xl font-bold mb-2">Building the Future</h1>
          <p className="text-base">From design to demolition, we handle all civil contracts with precision.</p>
        </div>
      </BentoTilt>

      <BentoTilt className="row-span-2 sm:row-span-3 bg-orange-400">
        <video src={video3} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-blue-50 font-circular-web bg-gradient-to-t from-black/30 to-transparent">
          <h1 className="text-2xl font-bold mb-2">Retail Made Simple</h1>
          <p className="text-base">Expert consultancy for convenience stores, restaurants, and more.</p>
        </div>
      </BentoTilt>

      {/* Small Video Card */}
      <BentoTilt className="row-span-1 sm:row-span-2 bg-orange-400">
        <video src={video6} autoPlay loop muted className="h-full w-full object-cover"></video>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-blue-50 font-circular-web bg-gradient-to-t from-black/30 to-transparent">
          <h1 className="text-2xl font-bold mb-2">Guiding Careers Forward</h1>
          <p className="text-base">Empowering students with education and career planning.</p>
        </div>
      </BentoTilt>
    </div>
  </div>
)

export default Features

