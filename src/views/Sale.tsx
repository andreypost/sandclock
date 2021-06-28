import React, { useState, useEffect } from 'react'
import Nav from 'components/Nav'

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
      <main className="section" style={{ marginTop: '180px' }}>
      </main>
    </div>
  )
}
export default Sale