import { useState, useEffect } from 'react'
import './Faq.scss'
import Nav from 'Nav'
import Banner from 'Banner'
import Footer from 'Footer'

const Faq = () => {
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
      <main className="section"></main>
      <Footer />
    </div>
  )
}
export default Faq
