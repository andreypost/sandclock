import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Message from 'modals/Message'
import IndividualOwnForms from 'modals/IndividualOwnForms'
import Mission from 'modals/Mission'
import { unsetMessageModal } from 'modals/message.modal.slice'
import { unsetModal } from 'modals/modal.slice'
import { useAppDispatch } from 'utils/hooks'
import crypto_ether from 'svg/crypto_ether.svg'
import crypto_xdai from 'svg/crypto_xdai.svg'

const Footer: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    const unsetState = (e: { key: string }) => {
      if (e.key === 'Escape') dispatch(unsetMessageModal()), dispatch(unsetModal())
    }
    document.addEventListener('keydown', e => unsetState(e))
    return document.removeEventListener('keydown', unsetState)
  }, [dispatch])
  return (
    <footer className="section footer">
      <div className="footer_crypto">
        <p>Powered by</p>
        <div>
          <Link to="/" target="blanc">
            <img src={crypto_ether} alt="" className="ether" />
          </Link>
          <Link to="/" target="blanc">
            <img src={crypto_xdai} alt="" className="xdai" />
          </Link>
        </div>
      </div>
      <div className="footer_terms">
        <p>
          Copyright © 2021 Sandclock Co., a Wyoming Public Benefit Corporation.
          All rights reserved. Sandclock is an online service that provides
          legal forms and legal information. We are not a law firm and are not a
          substitute for an attorney’s advice. Use of this website is subject to
          our{' '}
          <a href="" target="blanc">
            Terms of Service
          </a>{' '}
          &{' '}
          <a href="" target="blanc">
            Privacy Notice
          </a>
          .
        </p>
        <p>
          Send all information requests to{' '}
          <a href="mailto:info@sandclock.org" target="blanc">
            info@sandclock.org
          </a>
        </p>
      </div>
      <Message />
      <IndividualOwnForms />
      <Mission />
    </footer>
  )
}
export default Footer
