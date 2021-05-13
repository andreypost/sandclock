import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => (
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []),
  <footer className="section footer">
    <div className="footer_crypto">
      <p>Powered by</p>
      <div>
        <Link to="/" target="blanc">
          <svg className="ether">
            <use xlinkHref="#crypto_ether"></use>
          </svg>
        </Link>
        <Link to="/" target="blanc">
          <svg className="xdai">
            <use xlinkHref="#crypto_xdai"></use>
          </svg>
        </Link>
      </div>
    </div>
    <div className="footer_terms">
      <p>Copyright © 2021 Sandclock Co., a Wyoming Public Benefit Corporation. All rights reserved. Sandclock is an online service that provides legal forms and legal information. We are not a law firm and are not a substitute for an attorney’s advice. Use of this website is subject to our <a href="" target="blanc">Terms of Service</a> & <a href="" target="blanc">Privacy Notice</a>.</p>
      <p>Send all information requests to <a href="mailto:info@sandclock.org" target="blanc">info@sandclock.org</a></p>
    </div>
  </footer>
)
export default Footer