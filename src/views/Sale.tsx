import React, { useState, useEffect } from 'react'
import Nav from 'Nav'
import Footer from 'Footer'

const Sale: React.FC = () => {
  const [opacity, setPageView] = useState('')
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback salepage ' + opacity}>
      <header>
        <Nav />
      </header>
      <main className="section" style={{ marginTop: '180px' }}></main>
      <Footer />
    </div>
  )
}
export default Sale
