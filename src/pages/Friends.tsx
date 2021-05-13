import React, { useState, useEffect } from 'react'
import './friends.scss'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

const Friends: React.FC = () => {
  const [opacity, setPageView] = useState('')
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback friendspage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>Sandclock does not stand on its own.</h1>
          <h5>The project would not have been made possible without the help of other projects & friends.</h5>
          <h5>Below you can find a list of every project we relied on, sorted alphabetically. Make sure to pay them a visit!</h5>
        </Banner>
      </header>
      <main className="section">
        <div className="friends_links">
          {[{ img: '#part_aragon', link: '' },
          { img: '#part_babylon', link: '' },
          { img: '#part_connext', link: '' },
          { img: '#part_ether', link: '' },
          { img: '#part_gnosis', link: '' },
          { img: '#part_linkdrop', link: '' },
          { img: '#part_zeppelin', link: '' },
          { img: '#part_internet', link: '' },
          { img: '#part_superfluid', link: '' },
          { img: '#part_commons', link: '' },
          { img: '#part_xdai', link: '' },
          ].map(obj =>
            <a href={obj.link} target="blanc" key={obj.img}>
              <svg>
                <use xlinkHref={obj.img}></use>
              </svg>
            </a>
          )}
        </div>
      </main>
    </div>
  )
}
export default Friends