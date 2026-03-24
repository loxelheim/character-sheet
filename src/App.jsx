import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.module.css'

import PixelCard from './components/PixelCard/PixelCard'
import Particles from './components/Particles'

// Dummy Data
const rpgCharacter = {
  id: "hero_9921",
  metadata: {
    name: "Valerius the Bold",
    class: "Paladin",
    race: "Human",
    level: 14,
    alignment: "Lawful Good"
  },
  
  // Primary attributes
  stats: {
    strength: 18,
    dexterity: 10,
    constitution: 16,
    intelligence: 12,
    wisdom: 14,
    charisma: 16
  },
  
  // Current status
  status: {
    hp: { current: 112, max: 125 },
    mp: { current: 45, max: 60 },
    sp: { current: 88, max: 100 },
    isResting: false,
    activeEffects: ["Blessing of Light", "Encumbered"]
  },
  
  // Equipped items
  equipment: {
    head: "Gilded Greathelm",
    chest: "Steel Plate Mail",
    mainHand: "Sun-Forged Longsword",
    offHand: "Heavy Oak Shield",
    accessory: "Ring of Fire Resistance"
  },
  
  // Inventory list
  inventory: [
    { item: "Health Potion", quantity: 5, weight: 0.5 },
    { item: "Whetstone", quantity: 1, weight: 0.2 },
    { item: "Rations", quantity: 10, weight: 1.0 },
    { item: "Old Map", quantity: 1, weight: 0.1 }
  ],
  
  // Simple method to simulate an action
  takeDamage(amount) {
    this.status.hp.current = Math.max(0, this.status.hp.current - amount);
    return `${this.metadata.name} took ${amount} damage! Current HP: ${this.status.hp.current}`;
  }
};

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
          {/* id: "hero_9921" */}
          {/* metadata: {
            name: "Valerius the Bold",
            class: "Paladin",
            race: "Human",
            level: 14,
            alignment: "Lawful Good"
          } */}
          <table>
            <tbody>
              <tr><td>Name</td><td>{rpgCharacter.metadata.name}</td></tr>
              <tr><td>Class</td><td>{rpgCharacter.metadata.class}</td></tr>
              <tr><td>Race</td><td>{rpgCharacter.metadata.race}</td></tr>
              <tr><td>Level</td><td>{rpgCharacter.metadata.level}</td></tr>
            </tbody>
          </table>
          {/* // Primary attributes
            stats: {
              strength: 18,
              dexterity: 10,
              constitution: 16,
              intelligence: 12,
              wisdom: 14,
              charisma: 16
          } */}
          <table>
            <tbody>
              <tr><td>strength</td><td>{rpgCharacter.stats.strength}</td></tr>
              <tr><td>dexterity</td><td>{rpgCharacter.stats.dexterity}</td></tr>
              <tr><td>constitution</td><td>{rpgCharacter.stats.constitution}</td></tr>
              <tr><td>intelligence</td><td>{rpgCharacter.stats.intelligence}</td></tr>
              <tr><td>wisdom</td><td>{rpgCharacter.stats.wisdom}</td></tr>
              <tr><td>charisma</td><td>{rpgCharacter.stats.charisma}</td></tr>
            </tbody>
          </table>
  
          {/* // Current status
          status: {
            hp: { current: 112, max: 125 },
            mp: { current: 45, max: 60 },
            stamina: 88,
            isResting: false,
            activeEffects: ["Blessing of Light", "Encumbered"]
          } */}
          <table>
            <tbody>
              <tr><td>Health</td><td>{rpgCharacter.status.hp.current}</td><td>/</td><td>{rpgCharacter.status.hp.max}</td></tr>
              <tr><td>Mana</td><td>{rpgCharacter.status.mp.current}</td><td>/</td><td>{rpgCharacter.status.mp.max}</td></tr>
              <tr><td>Stamina</td><td>{rpgCharacter.status.sp.current}</td><td>/</td><td>{rpgCharacter.status.sp.max}</td></tr>
            </tbody>
          </table>
        </section>
      </div>
    </PixelCard>

  </>)
}

export default App
