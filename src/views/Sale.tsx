import React, { useState, useEffect } from 'react'
import Nav from 'components/Nav'
import { User } from '../App'

const Sale: React.FC = () => {
  const [opacity, setPageView] = useState('')
  const setUser = () => {
    User.name === '' ? User.name = 'Andrey' : User.name = ''
    console.log(User)
  }
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback salepage ' + opacity}>
      <header onClick={setUser}>
        <Nav />
      </header>
      <main className="section" style={{ marginTop: '180px' }}>
      </main>
    </div>
  )
}
export default Sale