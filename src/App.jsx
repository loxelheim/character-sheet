import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Particles from './components/Particles'
import CharacterSheet from './components/CharacterSheet'
import ProfileSelector from './components/ProfileSelector'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  
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
    
    <ProfileSelector></ProfileSelector>
    {/* <CharacterSheet></CharacterSheet> */}

  </>)
}

export default App
