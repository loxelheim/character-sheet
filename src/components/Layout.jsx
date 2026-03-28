import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Particles from './Particles'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="app-container">
      <section className='fixed w-full h-full bg-beige-100 top-0 left-0 z-[-1]'>
        <Particles
          particleCount={570}
          particleSpread={7}
          speed={0.1}
          particleColors={[
            "#6F6A5F",
            "#5E5A50",
            "#4D4942"]}
          particleHoverFactor={0.3}
          alphaParticles
          particleBaseSize={170}
          sizeRandomness={0.6}
          cameraDistance={17}
          disableRotation
        />
        {/* Vignette */}
        <div className="w-full h-full absolute top-0 left-0 bg-radial from-transparent from-60% to-beige-500"></div>
      </section>

      <NavBar></NavBar>

      <main>
        {/* Child routes render right here! */}
        <Outlet />
      </main>

      <footer className='w-full h-10 text-center'>© 2026 My App</footer>
    </div>
  )
}
