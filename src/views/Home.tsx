import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.styles.scss'
import axios from 'axios'
import Nav from 'Nav'
import Banner from 'Banner'
import Footer from 'Footer'
import InfoModal from 'components/Info.modal'
import {
  errorInfoModal,
  succsessInfoModal,
  unsetInfoModal,
} from 'components/info.modal.slice'
import { useAppDispatch } from 'utils/hooks'
import ok from 'svg/ok.svg'
import git from 'svg/git.svg'
import medium from 'svg/medium.svg'
import twitt from 'svg/twitt.svg'
import discord from 'svg/discord.svg'
import telega from 'svg/telega.svg'
import mail from 'svg/mail.svg'
import advant_savvy from 'svg/advant_savvy.svg'
import advant_zero from 'svg/advant_zero.svg'
import advant_impact from 'svg/advant_impact.svg'
import roll_shark from 'svg/roll_shark.svg'
import roll_transfer from 'svg/roll_transfer.svg'
import roll_capital from 'svg/roll_capital.svg'
import arrow from 'svg/arrow.svg'
import roll_allocation from 'svg/roll_allocation.svg'
import roll_paper from 'svg/roll_paper.svg'
import roll_print from 'svg/roll_print.svg'
import roll_sign from 'svg/roll_sign.svg'
import quiz_fund from 'svg/quiz_fund.svg'
import quiz_donate from 'svg/quiz_donate.svg'
import quiz_will from 'svg/quiz_will.svg'

const Home: React.FC = () => {
  const dispatch = useAppDispatch(),
    [opacity, setPageView] = useState(''),
    [email, setEmail] = useState(''),
    [roll, setRoll] = useState('')
  const handleEmailFormImage = (message: boolean) => {
    const sub = document.querySelector('.subscribe'),
      ok = document.querySelector('.done')
    if (sub && ok) {
      sub.classList.add('inactive')
      ok.classList.add('active')
      if (!message) ok.classList.add('faulty')
      setTimeout(() => {
        sub.classList.remove('inactive')
        ok.classList.remove('active')
        if (!message) ok.classList.remove('faulty')
      }, 3000)
    }
  }
  const handleSubmitEmailForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const user = {
      email: email,
    }
    axios
      .post(`https://www.sandclock.org/api/subscribe`, {
        body: user,
        headers: { 'Content-Type:': 'application/json' },
      })
      .then(() => {
        dispatch(succsessInfoModal())
        handleEmailFormImage(true)
      })
      .catch(() => {
        dispatch(errorInfoModal())
        handleEmailFormImage(false)
      })
      .finally(() => {
        setEmail('')
      })
  }
  useEffect(() => {
    setTimeout(() => setPageView('active'))
    const unsetState = (e: { key: string }) => {
      if (e.key === 'Escape') {
        dispatch(unsetInfoModal())
      }
    }
    document.addEventListener('keydown', (e) => unsetState(e))
    return document.removeEventListener('keydown', unsetState)
  }, [])
  return (
    <div className={'fallback homepage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>
            No-Loss Donations for You, <br /> and Your Family.
          </h1>
          <h5>
            Powered by blockchain technology and a wide range of Open Finance
            protocols, Sandclock gives you the ability to make No-Loss
            Donations, or to simply provision for you and your family’s future.
          </h5>
          <form action="" id="bannerForm" onSubmit={handleSubmitEmailForm}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="off"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" form="bannerForm">
              <span className="subscribe">Subscribe</span>
              <img src={ok} alt="" className="done" />
            </button>
          </form>
          <ul className="banner_social">
            <li>
              <Link to="/">
                <img src={git} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={medium} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/SandclockOrg" target="blanc">
                <img src={twitt} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://discord.gg/T2tPpkZBR8" target="blanc">
                <img src={discord} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://t.me/sandclockorg" target="blanc">
                <img src={telega} alt="" />
              </Link>
            </li>
            <li>
              <Link to="mailto:info@sandclock.org" target="blanc">
                <img src={mail} alt="" />
              </Link>
            </li>
          </ul>
        </Banner>
      </header>
      <main className="section" style={{ position: 'relative' }}>
        <article className="advantages">
          <h2>Why Sandclock?</h2>
          <div className="advantages_descript">
            <div>
              <img src={advant_savvy} alt="" />
              <h5>Savvy</h5>
              <p>
                Whether you’re growing your capital, provisioning for your
                family’s future, and/or donating to charity, this is the way to
                go about it.
              </p>
            </div>
            <div>
              <img src={advant_zero} alt="" />
              <h5>Zero-Loss</h5>
              <p>
                Keep your money, donate the yield; Or donate it all, to your
                family, or your charity of choice. Possibilities are endless—you
                decide the allocation.
              </p>
            </div>
            <div>
              <img src={advant_impact} alt="" />
              <h5>Amplify your impact</h5>
              <p>
                Automatically leverage decentralized finance protocols to grow
                your net worth.
              </p>
            </div>
          </div>
        </article>
        <div className={'rolldown uno ' + roll}>
          <h2>Get Started!</h2>
          <div className="rolldown_section">
            <div className="rolldown_descript">
              <div>
                <img src={roll_shark} alt="" />
                <article>
                  <h5>1. Select your risk profile</h5>
                  <p>
                    We have multiple tranches to match your risk profile, so
                    simply pick from the list.
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_transfer} alt="" />
                <article>
                  <h5>
                    2. Choose how you’re going to deposit the funds, and for how
                    long
                  </h5>
                  <p>
                    We support credit/debit cards, ACH transfers, and Web3. Pick
                    whichever!
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_capital} alt="" />
                <article>
                  <h5>3. Allocate your capital as you please</h5>
                  <p>
                    Distribute your capital however you see fit, the world is
                    your oyster.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="rolldown_arrow" onClick={() => setRoll('')}>
            <img src={arrow} alt="" />
            <p>Go back</p>
          </div>
        </div>
        <div className={'rolldown dous ' + roll}>
          <h2>Get Started!</h2>
          <div className="rolldown_section">
            <div className="rolldown_descript">
              <div>
                <img src={roll_allocation} alt="" />
                <article>
                  <h5>1. Select your fav organizations and allocation</h5>
                  <p>
                    There are a myriad to pick from, but you can also add your
                    own. Then select your allocation.
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_transfer} alt="" />
                <article>
                  <h5>
                    2. Choose how you’re going to deposit the funds, and for how
                    long
                  </h5>
                  <p>
                    We support credit/debit cards, ACH transfers, and Web3. Pick
                    whichever!
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_capital} alt="" />
                <article>
                  <h5>3. Allocate your capital as you please</h5>
                  <p>
                    Distribute your capital however you see fit, the world is
                    your oyster.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="rolldown_arrow" onClick={() => setRoll('')}>
            <img src={arrow} alt="" />
            <p>Go back</p>
          </div>
        </div>
        <div className={'rolldown tres ' + roll}>
          <h2>Get Started!</h2>
          <div className="rolldown_section">
            <div className="rolldown_descript">
              <div>
                <img src={roll_paper} alt="" />
                <article>
                  <h5>1. Pick your product and fill it out online</h5>
                  <p>
                    Will or Revocable Living Trust (soon™), up to you. Fill it
                    out. Shouldn’t take you more than 20 minutes!
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_print} alt="" />
                <article>
                  <h5>2. Print out the forms*</h5>
                  <p>
                    A digital document is automatically generated from the
                    information provided to you via email.
                  </p>
                </article>
              </div>
              <div>
                <img src={roll_sign} alt="" />
                <article>
                  <h5>3. Sign & Store</h5>
                  <p>
                    To be valid, sign it alongside your two adult witnesses.
                    Store it in a safe place.
                  </p>
                </article>
              </div>
            </div>
            <div className="rolldown_line"></div>
            <div className="rolldown_descript">
              <div className="center">
                <article>
                  <h5>
                    *Complicated estate? <br /> No problem.
                  </h5>
                  <p>
                    Schedule your visit to an attorney in your area and bring
                    your Sandlock forms with you.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="rolldown_arrow" onClick={() => setRoll('')}>
            <img src={arrow} alt="" />
            <p>Go back</p>
          </div>
        </div>
        <article className="quiz">
          <h2>
            What Would You Like <br /> To Do Today?
          </h2>
          <div className="quiz_action">
            <div className="">
              <h5>Set Up a Fund</h5>
              <img src={quiz_fund} alt="" />
              <button onClick={() => setRoll('fundset')}>Learn More</button>
            </div>
            <div>
              <h5>Make a Zero-Loss Donation</h5>
              <img src={quiz_donate} alt="" />
              <button onClick={() => setRoll('donateset')}>Learn More</button>
            </div>
            <div>
              <h5>Get a Free Will / RLT</h5>
              <img src={quiz_will} alt="" />
              <button onClick={() => setRoll('willset')}>Learn More</button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <InfoModal />
    </div>
  )
}
export default Home
