import React, { useState, useEffect } from 'react'
import './About.scss'
import Nav from 'Nav'
import Banner from 'Banner'
import Footer from 'Footer'
import arrow from 'svg/arrow.svg'

const About: React.FC = () => {
  const [opacity, setPageView] = useState('')
  useEffect(() => {
    setTimeout(() => setPageView('active'))
  }, [])
  return (
    <div className={'fallback aboutpage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>Provisioning for the Future? No-Loss Donations?</h1>
          <h5>
            Focusing on ease of use, Sandclock automates the movement of your
            funds from bank or blockchain wallet to wherever you would like them
            to be, based on your chosen allocation. Along the way to its final
            destination, your funds will be intelligently used to generate
            yield, for a period of time determined by you, the user.
          </h5>
          <h5>
            Whether it be a no-loss donation, or setting up a fund for your
            family or your future self, Sandclock can do it!
          </h5>
          <h5>
            Check our <a href="">Terms of Service</a> for more information.
          </h5>
        </Banner>
      </header>
      <main className="section">
        <article>
          <h5>
            Join our <a href=""> community Discord</a> to get support or learn
            more.
          </h5>
        </article>
        <section className="aboutpage_faq">
          <h2>FAQ</h2>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>What is a No-Loss donation?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A: A No-Loss donation is a way to donate without risking the
                principal or, if you simply want to use it to amplify your
                donation by donating both principal and yield, even better.
                Conversely, you can set up a fund and “donate” principal and
                yield to yourself, your family, or someone else.
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span> How do vaults generate yield?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  Banks generate yield by lending up to 90% of your funds. You
                  can think of a vault as your own personal, non-custodial bank,
                  with an automated investment strategy which generates yield
                  over time. Currently, the blockchain space is growing by leaps
                  and bounds, and with that comes demand. Demand drives interest
                  rates up, which result in higher yield. Additionally, because
                  the interest rates are algorithmically determined, it is
                  easier to define a “bottom,” as the minimum rate is determined
                  by the lending markets we use.
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>What strategy do these vaults use?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  We have two vaults, our own in-house tranche and a fixed-yield
                  vault by our partners, 88MPH. <br />
                  For the tranche, money goes in and is spread out across a
                  myriad of Open Finance protocols. This mitigates risk and,
                  through borrowing, interest is generated. Our other vault, the
                  88MPH fixed-yield vault, generates yield through the purchase
                  of fixed-rate bonds. On top of that, we receive a part of
                  88MPH’s fees by staking their tokens. You can read more about
                  it <a href="">here.</a>{' '}
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>Are there risks?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  There is also the risk of a vault being exploited by malicious
                  actors. To put you at ease, the vaults we deploy come with
                  partial insurance. The MPH vaults are exclusive to Sandclock
                  and thus operate on a whitelist basis, ensuring higher
                  security.
                </span>
              </p>
              <p>
                A:
                <span>
                  Risks are inherent to any financial system. That being said,
                  this new paradigm manages collateral liquidation through the
                  use of smart contracts. When the value of the collateral
                  crosses under an arbitrary threshold, the collateral gets
                  liquidated. Black swan events are by definition unlikely and
                  we will do our best to mitigate this.
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>Are the vaults insured?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:<span>Insurance status will be included in the UI.</span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:
              <span>
                Can I use the protocol and “donate” the yield to myself?
              </span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  Of course! The principal and the yield are allocated in
                  whatever way you see fit. You decide who it gets donated to,
                  if at all, and when. Just head on over to Set up a Fund.”
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:
              <span>
                Can I withdraw from the vault before the maturation date?
              </span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  No. Once the funds are in, a time lock is automatically
                  triggered. It might be worth asking, depending on the strategy
                  employed by the vault, but in all likelihood it will not be
                  possible.
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>How does the $SAND token accrue value?</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  It controls the treasury according to the allocation set by
                  the tokenomics. Profit sharing occurs X times a year.
                </span>
              </p>
            </div>
          </article>
          <article>
            <h6
              onClick={e =>
                e.currentTarget.closest('article')?.classList.toggle('active')
              }
            >
              Q:<span>Why only X times a year? :[</span>
              <img src={arrow} alt="" />
            </h6>
            <div>
              <p>
                A:
                <span>
                  1. Ethereum transfers are expensive. 2. We want to generate
                  yield with the treasury funds, and that involves being on L1.
                  For that to be economically viable and because the purpose of
                  this protocol is also to contribute to the betterment of
                  mankind, the smart treasury deposits funds quarterly and locks
                  them up for a year, thereby creating a positive feedback loop
                  and more money for nonprofits that deserve to be supported.
                </span>
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default About
