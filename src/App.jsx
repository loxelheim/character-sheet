import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.module.css'

import PixelCard from './components/PixelCard/PixelCard'
import Particles from './components/Particles'


let char = {
  name: {first:"Lorenzo", last: "Calzone"},
  title: "Sir",
  level: 35,
  race: "Human",
  class: "Kitchen-Knight",
  abilities: [
    {name: "Heavy Knead", rank: 3},
    {name: "Precarious Dash", rank: 2},
    {name: "Quick Stir", rank: 2}
  ]
}

function App() {
  const [count, setCount] = useState(0)

  return (<>
  
    <section className='fixed w-full h-full bg-[#200b41] top-0 left-0'>
      <Particles
        particleCount={570}
        particleSpread={7}
        speed={0.25}
        particleColors={["#b380ff","#d89eff","#c3c2ff"]}
        moveParticlesOnHover
        particleHoverFactor={0.3}
        alphaParticles
        particleBaseSize={170}
        sizeRandomness={0.6}
        cameraDistance={17}
        disableRotation
      />
    </section>

    <PixelCard variant='pink' className='ml-auto mr-auto mt-[5vh] max-w-5/6 max-h-[90vh] border-amber-200'>
      <div className='w-full h-full absolute left-0 top-0 text-amber-200'>
        <h1 className='text-4xl text-center p-5 font-mono'>Character Sheet</h1>
        <hr />
        <section>
          <h2 className='text-3xl'>{char.title} {char.name.first} {char.name.last}</h2>
          <hr />
          <h2 className='text-3xl'>Level {char.level} {char.race} {char.class}</h2>
          <hr />
          <p>Abilities:
          <ul className='pl-5'>
            {char.abilities.map(ability => <li>RANK {ability.rank} // {ability.name}</li>)}
          </ul>
          </p>
        </section>
      </div>
    </PixelCard>

  </>)
}

export default App
