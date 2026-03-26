import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Particles from './Particles'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="app-container">
      <section className='fixed w-full h-full bg-[#c0acde] top-0 left-0 z-[-1]'>
        <Particles
          particleCount={570}
          particleSpread={7}
          speed={0.1}
          particleColors={["#b380ff","#d89eff","#c3c2ff"]}
          particleHoverFactor={0.3}
          alphaParticles
          particleBaseSize={170}
          sizeRandomness={0.6}
          cameraDistance={17}
          disableRotation
        />
      </section>

      <NavBar></NavBar>

      <main>
        {/* Child routes render right here! */}
        <Outlet />
      </main>

      <footer>© 2026 My App</footer>
    </div>
  )
}
