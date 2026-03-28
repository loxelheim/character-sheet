import { useEffect, useState } from 'react'
import { getProfiles } from '../api/jsonplaceholder.js'
import PixelCard from './PixelCard.jsx'

function ProfileSelector() {
  const [users, setUsers] = useState(null)
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

  return (<>
      {!users ? <>
        <h2>Loading Users ... </h2>
      </> : <>
        {!showDetail ? 
        <ul className='p-10'>
          {users.map((user, i) => 
            <li key={user.id} className=' 
              p-4 mb-4
              bg-beige
              hover:bg-beige-100
              shadow-xl shadow-beige-400
            ' onClick={() => { showUserDetail(user) }}>
              <button >▶ {user.name}</button>
            </li>
          )}
        </ul> : <section className='p-10'>
          { currentUser !== null ? <section className='
            p-4 
            border-beige-200 
            bg-beige'>
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
      </>}
    {/* <PixelCard variant='pink' className='border-amber-200 text-amber-200'>
    </PixelCard> */}
  </>
  )
}

export default ProfileSelector