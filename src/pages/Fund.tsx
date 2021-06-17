import React, { useState, useEffect } from 'react';
import './fund.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Profiles from '../components/Profiles';
import logo from '../img/svg/logo.svg'
import link from '../img/svg/link.svg'
import risk_yearn from '../img/svg/risk_yearn.svg'
import risk_mph from '../img/svg/risk_mph.svg'

const Fund: React.FC = () => {
  const [opacity, setPageView] = useState('')
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback fundpage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>Select Your Risk Profile.</h1>
          <h5>Earn yield on your deposits using a myriad of curated DeFi protocols, and practice safety by purchasing insurance whenever possible.</h5>
          <h5>At Sandclock, we give you two options to choose from: a variable-rate tranche, and fixed-rate vault.
            The variable-rate tranch combines fixed and variable rate vaults to give you a greater upside. The fixed-rate vault ensures maximum stability for the chosen yield. Regardless, both are zero-loss.</h5>
        </Banner>
      </header>
      <main>
        <div className="profiles">
          <section className="section">
            <h2>Vaults</h2>
            <div className="offers">
              <h3>Low Risk</h3>
              <article>
                <Profiles>
                  {{
                    aum: 'UST',
                    api: '85%',
                    media: <img src={logo} alt="" />,
                    link: <a href="">Sandclock<img src={link} alt="" /></a>,
                    actions: <button className="soon">Soon™</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <img src={risk_yearn} alt="" />,
                    link: <a href="">Yearn<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <img src={risk_mph} alt="" />,
                    link: <a href="">88MPH<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <img src={risk_yearn} alt="" />,
                    link: <a href="">Yearn<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <img src={risk_mph} alt="" />,
                    link: <a href="">88MPH<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <img src={risk_yearn} alt="" />,
                    link: <a href="">Yearn<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <img src={risk_mph} alt="" />,
                    link: <a href="">88MPH<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
              </article>
              <h3>Moderate Risk</h3>
              <article>
                <Profiles>
                  {{
                    aum: 'UST',
                    api: '85%',
                    media: <img src={logo} alt="" />,
                    link: <a href="">Sandclock<img src={link} alt="" /></a>,
                    actions: <button className="soon">Soon™</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <img src={risk_yearn} alt="" />,
                    link: <a href="">Yearn<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <img src={risk_mph} alt="" />,
                    link: <a href="">88MPH<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <img src={risk_mph} alt="" />,
                    link: <a href="">88MPH<img src={link} alt="" /></a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default Fund