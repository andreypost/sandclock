import React, { useState, useEffect } from 'react'
import './faq.scss'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

const Faq: React.FC = () => {
  const [opacity, setPageView] = useState('')
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback faqpage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>Faq</h1>
        </Banner>
      </header>
      <main className="section">


      </main>
    </div>
  )
}
export default Faq