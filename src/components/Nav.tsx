import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/svg/logo.svg'

const Nav: React.FC = () => (
  // const myRef = useRef<HTMLAnchorElement>(null);
  // const tooltip = useRef<HTMLParagraphElement>(null);
  // if (myRef && myRef.current && tooltip && tooltip.current) {
  //   tooltip.current.style.left = `${(tooltip.current.offsetWidth - myRef.current.offsetWidth) / 2}px`
  //   console.log((tooltip.current.offsetWidth - myRef.current.offsetWidth) / 2);
  // }
  <nav>
    <div className="section">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li className="sale">
          <Link to="/sale">Sale</Link>
          <p>(soon™)</p>
        </li>
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="fund">
          <Link to="/fund">App</Link>
          <p className="tooltip">Set up a fund for yourself or your family and provision for the future!</p>
        </li>
        <li className="donate">
          <Link to="/donate">No-Loss Donation</Link>
          <p className="tooltip">Make a zero-loss donation to your favorite charities, alma mater, or individual(s)!</p>
        </li>
        <li className="will">
          <Link to="/will">Get a Free Will</Link>
          <p className="tooltip">Want a free will or revocable living trust? We’ve got you covered.</p>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
          <ul className="switch">
            <li className="faq">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="friends">
              <Link to="/friends">Projects & <br /> Friends</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
)
export default Nav