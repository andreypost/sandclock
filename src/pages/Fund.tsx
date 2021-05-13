import React, { useState, useEffect } from 'react';
import './fund.scss';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Profiles from '../components/Profiles';

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
                    media: <svg>
                      <use xlinkHref="#logo"></use>
                    </svg>,
                    link: <a href="">Sandclock
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button className="soon">Soon™</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <svg>
                      <use xlinkHref="#risk_yearn"></use>
                    </svg>,
                    link: <a href="">Yearn
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <svg>
                      <use xlinkHref="#risk_mph"></use>
                    </svg>,
                    link: <a href="">88MPH
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <svg>
                      <use xlinkHref="#risk_yearn"></use>
                    </svg>,
                    link: <a href="">Yearn
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <svg>
                      <use xlinkHref="#risk_mph"></use>
                    </svg>,
                    link: <a href="">88MPH
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <svg>
                      <use xlinkHref="#risk_yearn"></use>
                    </svg>,
                    link: <a href="">Yearn
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <svg>
                      <use xlinkHref="#risk_mph"></use>
                    </svg>,
                    link: <a href="">88MPH
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
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
                    media: <svg>
                      <use xlinkHref="#logo"></use>
                    </svg>,
                    link: <a href="">Sandclock
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button className="soon">Soon™</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'USDP',
                    api: '60%',
                    media: <svg>
                      <use xlinkHref="#risk_yearn"></use>
                    </svg>,
                    link: <a href="">Yearn
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <svg>
                      <use xlinkHref="#risk_mph"></use>
                    </svg>,
                    link: <a href="">88MPH
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
                    actions: <button>Deposit</button>
                  }}
                </Profiles>
                <Profiles>
                  {{
                    aum: 'sUSD',
                    api: '?% (fixed) + ?%',
                    media: <svg>
                      <use xlinkHref="#risk_mph"></use>
                    </svg>,
                    link: <a href="">88MPH
                    <svg>
                        <use xlinkHref="#link"></use>
                      </svg>
                    </a>,
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