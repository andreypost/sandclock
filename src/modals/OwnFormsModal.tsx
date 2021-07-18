import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'utils/hooks'
import { selectModalActive, ownFormStartModal, ownFormEndModal, unsetModal, messageTypeModal, messageFieldModal, messageSuccsessModal, messageErrorModal } from './modal.slice'

const Div = styled.div`

  opacity         : 0;
  position        : fixed;
  z-index         : -99;
  left            : 0;
  top             : 0;
  width           : 100%;
  height          : 200%;
  overflow        : auto;
  background-color: rgba(0, 0, 0, 0.2);
  transition      : opacity .4s, z-index .1s .4s;

  #individualStartForm,
  #individualSubmitForm {
    box-sizing   : border-box;
    width        : 90%;
    margin       : 15vh auto 0;
    padding      : 92px 48px 30px;
    border-radius: 30px;
    box-shadow   : 0px 16px 16px rgba(0, 0, 0, 0.25);
    background   : #fefaff;
    transform    : scale(0);
    transition   : transform 0.6s;
  
    @media (min-width: 992px) {
      width: 601px;
    }
  
    label {
      display      : inline-block;
      font-weight  : 700;
      font-size    : 18px;
      margin-bottom: 24px;
    }
  
    input,
    textarea,
    button {
      box-sizing   : border-box;
      border-radius: 15px;
      width      : 100%;
      height     : 53px;
      padding    : 0 24px;
      font-size  : 18px;
      font-weight: 700;
      margin-bottom: 24px;
      border       : 1px solid #fff7cc;
      box-shadow   : 4px 4px 4px rgba(0, 0, 0, 0.25);
      background   : #ffffff;
      transition   : all 0.2s;
  
      &::placeholder {
        font-weight: 400;
        opacity    : 0.75;
      }
    }

    .goBack {
      color     : #7f7d80;
      transition: color 0.4s;
  
      @media (min-width: 992px) {
        &:hover {
          cursor: pointer;
          color : #000000;
        }
      }
    }

  }
  #individualStartForm {
    .individual_types {
      label {
        margin-bottom: 9px;
      }

      >div {
        display      : grid;
        grid-template: repeat(1, 1fr) / repeat(2, 1fr);
        grid-gap     : 15px;

        input {
          font-weight: 400;

          @media (min-width: 992px) {
            &:hover {
              cursor    : pointer;
              background: #fff7cc;
            }
          }

          &:active {
            box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);
          }

          &.active {
            background: #fff7cc;
          }
        }
      }
    }

    [name='address'] {
      margin-bottom: 16px;
    }

    .individual_city {
      display      : grid;
      grid-template: repeat(1, 1fr) / repeat(3, 1fr);
      grid-gap     : 25px;

      input {
        text-align: center;
      }

      input[name='state'] {
        padding-right: 52px;
        background   : url(svg/arrow_placeholder.svg) no-repeat 90% center;
      }
    }

    button {
      display   : block;
      width     : 195px;
      margin    : auto;
      font-size : 24px;
      background: linear-gradient(90deg, #ffd7d7 0%, #feffdf 100%);
    }
  }

  #individualSubmitForm {
    textarea {
      height : 104px;
      padding: 24px;
    }

    >div {
      display              : grid;
      grid-template-columns: 95px 195px;
      grid-gap             : 15px;
      justify-content      : center;

      input,
      button {
        width      : 100% !important;
        font-size  : 24px;
        font-weight: 400;
        background : linear-gradient(90deg, #ffd7d7 0%, #feffdf 100%);

        @media (min-width: 992px) {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  &.ownStartActive.startForm, &.ownEndActive.endForm  {
    z-index   : 999;
    opacity   : 1;
    transition: z-index .1s, opacity .4s .1s;

    #individualStartForm,
    #individualSubmitForm {
      transform: scale(1);
    }
  }`

const OwnFormsModal = () => {
  const modalState = useAppSelector(selectModalActive),
    dispatch = useAppDispatch(),
    [typeOwnForm, setTypeOwnForm] = useState({
      value: '',
      org: '',
      individual: '',
    }),
    [nameOwnForm, setNameOwnForm] = useState(''),
    [addressOwnForm, setAddressOwnForm] = useState(''),
    [cityOwnForm, setCityOwnForm] = useState(''),
    [stateOwnForm, setStateOwnForm] = useState(''),
    [codeOwnForm, setCodeOwnForm] = useState(''),
    [emailOwnForm, setEmailOwnForm] = useState(''),
    [einOwnForm, setEinOwnForm] = useState(''),
    [messageOwnForm, setMessageOwnForm] = useState(''),
    user = {
      name: nameOwnForm,
      type: typeOwnForm.value,
      address: addressOwnForm,
      city: cityOwnForm,
      state: stateOwnForm,
      code: codeOwnForm,
      email: emailOwnForm,
      Ein: einOwnForm,
      message: messageOwnForm,
    }

  const handleOwnTypeForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!typeOwnForm.value) {
      dispatch(messageTypeModal())
      return
    }
    dispatch(ownFormEndModal())
  }

  const handleOwnSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(user)
    const field = emailOwnForm || einOwnForm
    if (!field) {
      dispatch(messageFieldModal())
      return
    }
    axios
      .post(`https://www.sandclock.org/api/subscribe`, {
        body: user,
        headers: { 'Content-Type:': 'application/json' },
      })
      .then(() => {
        dispatch(messageSuccsessModal())
        setNameOwnForm('')
        setTypeOwnForm({ value: '', org: '', individual: '' })
        setAddressOwnForm('')
        setCityOwnForm('')
        setStateOwnForm('')
        setCodeOwnForm('')
        setEmailOwnForm('')
        setEinOwnForm('')
        setMessageOwnForm('')
      })
      .catch(() => dispatch(messageErrorModal()))
    // .finally(() => dispatch(unsetMessageModal())
  }
  return (
    <>
      <Div className={modalState + ' startForm'} onClick={e => { if (e.target === e.currentTarget) dispatch(unsetModal()) }}>
        <form action="" id="individualStartForm" onSubmit={handleOwnTypeForm}>
          <label htmlFor="name">Recipient’s name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={nameOwnForm}
            placeholder="Name Surname"
            pattern="[A-Za-z]{2,}\s[A-Za-z]{2,}"
            onChange={e => setNameOwnForm(e.target.value)}
            autoComplete="off"
            required
          />
          <div className="individual_types">
            <label>Type</label>
            <div>
              <input
                type="button"
                value="Org"
                className={typeOwnForm.org}
                onClick={() =>
                  setTypeOwnForm({
                    value: 'Org',
                    org: 'active',
                    individual: '',
                  })
                }
              />
              <input
                type="button"
                value="Individual"
                className={typeOwnForm.individual}
                onClick={() =>
                  setTypeOwnForm({
                    value: 'Individual',
                    org: '',
                    individual: 'active',
                  })
                }
              />
            </div>
          </div>
          <label htmlFor="address">Address (if known)</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Street"
            value={addressOwnForm}
            onChange={e => setAddressOwnForm(e.target.value)}
            autoComplete="off"
          />
          <div className="individual_city">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={cityOwnForm}
              onChange={e => setCityOwnForm(e.target.value)}
              autoComplete="off"
            />
            <input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              value={stateOwnForm}
              onChange={e => setStateOwnForm(e.target.value)}
              autoComplete="off"
            />
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Zip Code"
              value={codeOwnForm}
              onChange={e => setCodeOwnForm(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button type="submit" form="individualStartForm">→</button>
        </form>
      </Div>
      <Div className={modalState + ' endForm'} onClick={e => { if (e.target === e.currentTarget) dispatch(unsetModal()) }}>
        <form
          action=""
          id="individualSubmitForm"
          onSubmit={handleOwnSubmitForm}
        >
          <label htmlFor="email">Email (if known)</label>
          <input
            type="email"
            name="email"
            id="email"
            value={emailOwnForm}
            placeholder="email@com.net"
            onChange={e => setEmailOwnForm(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            autoComplete="off"
          />
          <label htmlFor="ein">EIN (if known/applicable)</label>
          <input
            type="text"
            name="ein"
            id="ein"
            value={einOwnForm}
            placeholder="XX-XXXXXXX"
            pattern="[0-9]{2}-[0-9]{8,}"
            onChange={e => setEinOwnForm(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="message">
            Message or Additional Information (optional)
          </label>
          <textarea
            name="message"
            id="message"
            value={messageOwnForm}
            onChange={e => setMessageOwnForm(e.target.value)}
            autoComplete="off"
          ></textarea>
          <div>
            <input
              type="button"
              value="←"
              onClick={() => dispatch(ownFormStartModal())}
            />
            <button type="submit" form="individualSubmitForm">
              Add
            </button>
          </div>
        </form>
      </Div>
    </>
  )
}

export default OwnFormsModal
