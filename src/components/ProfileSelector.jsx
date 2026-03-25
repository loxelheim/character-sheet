import { useEffect, useState } from 'react'
import { getProfiles } from '../api/jsonplaceholder.js'
import PixelCard from './PixelCard.jsx'

function ProfileSelector() {
  const [users, setUsers] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    async function loadUsers() {
      setUsers(await getProfiles())
    }
    loadUsers()
  }, [])

  const showUserDetail = (user) => {
    console.log(user);
    setCurrentUser(user)
    setShowDetail(true);
  }

  return (
    <PixelCard variant='pink' className='border-amber-200 text-amber-200'>
      {!showDetail ? <ul className='p-10'>
        {users.map((user, i) => <li key={user.id} className='
          border-2 border-amber-250 rounded-md
          p-2 m-1 
          bg-violet-500
          hover:bg-violet-800
        '>
          <button onClick={() => { showUserDetail(user) }}>🔍 {user.name} 🔍</button>
        </li>)}
      </ul> : <section className='p-10'>
        { currentUser !== null ? <section className='
          border-2 border-amber-250 rounded-md
          p-2 m-1 
          bg-violet-500
          hover:bg-violet-800'>
          {/* Detail view for profile */}
          <h2>Clone Nr. {currentUser.id} // {currentUser.username}</h2>
          <hr />
          <h3>{currentUser.name}</h3>
          <h3>{currentUser.email}</h3>
          <h3>{currentUser.phone}</h3>
          <h3>{currentUser.website}</h3>
          
          <button onClick={() => { setCurrentUser(null); setShowDetail(false) }}>❌ Close Detail ❌</button>
        </section> : <section className=''>
          <p>Something went wrong!</p>
          <button onClick={() => { setCurrentUser(null); setShowDetail(false) }}>❌ Close View ❌</button>
        </section> }
      </section>}
    </PixelCard>
  )
}

export default ProfileSelector