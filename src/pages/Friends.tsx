import React, { useState, useEffect } from 'react'
import './friends_styles.scss'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import part_aragon from '../img/svg/part_aragon.svg'
import part_babylon from '../img/svg/part_babylon.svg'
import part_connext from '../img/svg/part_connext.svg'
import part_ether from '../img/svg/part_ether.svg'
import part_gnosis from '../img/svg/part_gnosis.svg'
import part_linkdrop from '../img/svg/part_linkdrop.svg'
import part_zeppelin from '../img/svg/part_zeppelin.svg'
import part_internet from '../img/svg/part_internet.svg'
import part_superfluid from '../img/svg/part_superfluid.svg'
import part_commons from '../img/svg/part_commons.svg'
import part_xdai from '../img/svg/part_xdai.svg'

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
          {[{ img: part_aragon, link: '' },
          { img: part_babylon, link: '' },
          { img: part_connext, link: '' },
          { img: part_ether, link: '' },
          { img: part_gnosis, link: '' },
          { img: part_linkdrop, link: '' },
          { img: part_zeppelin, link: '' },
          { img: part_internet, link: '' },
          { img: part_superfluid, link: '' },
          { img: part_commons, link: '' },
          { img: part_xdai, link: '' },
          ].map(obj =>
            <a href={obj.link} target="blanc" key={obj.img}>
              <img src={obj.img} alt="" />
            </a>
          )}
        </div>
      </main>
    </div>
  )
}
export default Friends