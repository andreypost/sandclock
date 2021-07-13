import React, { useState, useContext, useEffect, useCallback } from 'react'
import './Donate.styles.scss'
import axios from 'axios'
import Nav from 'Nav'
import Banner from 'Banner'
import Footer from 'Footer'
import InfoModal from 'components/Info.modal'
import {
  unsetInfoModal,
  // retrieveInfoModal,
  typeInfoModal,
  fieldInfoModal,
  succsessInfoModal,
  errorInfoModal,
  exceedInfoModal,
  sentInfoModal,
} from 'components/info.modal.slice'
import { useAppDispatch } from 'utils/hooks'
import info_circle from 'svg/info_circle.svg'
import ogr_info_dog from 'svg/ogr_info_dog.svg'
import { SuggestionsContext } from '../index'

// mock fetch server
const dbSuggestions = JSON.parse(
  JSON.stringify([
    {
      header: 'Suggestions',
      orgs: [
        {
          title: 'Epi4Dogs',
          type: '501(c)(3)',
          mission: 'Short text.',
        },
        {
          title: 'Epi5Dogs',
          type: '501(c)(3)',
          mission:
            'Long text - Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi6Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi7Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi8Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi9Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi10Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi11Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Alma Mater',
      orgs: [
        {
          title: 'Epi12Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi13Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Animal',
      orgs: [
        {
          title: 'Epi14Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi15Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi16Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi17Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Civil Rights',
      orgs: [
        {
          title: 'Epi18Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi19Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi20Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Environment',
      orgs: [
        {
          title: 'Epi21Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi22Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Humanitarian',
      orgs: [
        {
          title: 'Epi23Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
    {
      header: 'Politics',
      orgs: [
        {
          title: 'Epi24Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
        {
          title: 'Epi25Dogs',
          type: '501(c)(3)',
          mission:
            'Epi4Dogs Foundation Inc.’s purpose is advancement of science and education of EPI (Exocrine Pancreatic Insufficiency for dogs) by raising funds for EPI research that will yield useful insights or positive outcomes in better managing the EPI health condition in dogs and cats, and promoting EPI education through EPI awareness efforts by educating the public and offering assistance to pet owners, vet schools, veterinarians and veterinary researchers.',
        },
      ],
    },
  ]),
)

// interface Props {
//   suggestions: Array<{ header: string, orgs: [{ title: string, type: string, mission: string }] }>
//   setSuggestions: (arg0: any) => void
// }

interface Options {
  boxIndex: number
  inputIndex: number
  title?: string
  type?: string
  mission?: string
  new(name: string): { string: any }[]
}

// const Donate: React.FC<Props> = ({ suggestions, setSuggestions }: Props, { boxIndex = 0, inputIndex = 0, title, type, mission }: Options) => {
const Donate: React.FC<Options> = ({ boxIndex = 0, inputIndex = 0, title, type, mission }: Options) => {
  const dispatch = useAppDispatch(),
    [opacity, setPageView] = useState(''),
    { suggestions, setSuggestions } = useContext(SuggestionsContext),
    [ownForm, setOwnForm] = useState({ form_1: '', form_2: '' }),
    [orgInfoOverlay, setOrgInfoOverlay] = useState({
      value: { title: title, type: type, mission: mission },
      class: '',
    }),
    [nameOwnForm, setNameOwnForm] = useState(''),
    [typeOwnForm, setTypeOwnForm] = useState({
      value: '',
      org: '',
      individual: '',
    }),
    [addressOwnForm, setAddressOwnForm] = useState(''),
    [cityOwnForm, setCityOwnForm] = useState(''),
    [stateOwnForm, setStateOwnForm] = useState(''),
    [codeOwnForm, setCodeOwnForm] = useState(''),
    [emailOwnForm, setEmailOwnForm] = useState(''),
    [einOwnForm, setEinOwnForm] = useState(''),
    [messageOwnForm, setMessageOwnForm] = useState(''),
    [levelDonate, setLevelDonate] = useState({
      value: 0,
      submit: '',
      class: '',
    }),
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

  const handleEpisodeCollectionView = (e: { target: any }) => {
    if (e.target.classList.contains('active')) return
    const target = e.target
    document
      .querySelector<HTMLHeadingElement>('.suggestion .active')
      ?.classList.remove('active')
    target.classList.add('active')
    document
      .querySelector('.orgs_container>.active')
      ?.classList.remove('active')
    const container = document.querySelector<HTMLDivElement>('.orgs_container')
    if (container)
      container.style.height =
        document.querySelectorAll('.orgs_container .boxes')[target.dataset.tab]
          ?.clientHeight +
        62 +
        'px'
    document
      .querySelectorAll<HTMLDivElement>('.orgs_container .boxes')
    [target.dataset.tab]?.classList.add('active')
  }
  const getAllSuggestions = useCallback(() => {
    setSuggestions(dbSuggestions) // remove on production
    // axios.get('https://www.sandclock.org/api')
    //   .then(results => setSuggestions(results))
    //   .catch(() => dispatch(retrieveInfoModal()))
  }, [setSuggestions])
  const handleOwnTypeForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!typeOwnForm.value) {
      dispatch(typeInfoModal())
      return
    }
    setOwnForm({ form_1: '', form_2: 'active' })
  }
  const handleOwnSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(user)
    const field = emailOwnForm || einOwnForm
    if (!field) {
      dispatch(fieldInfoModal())
      return
    }
    axios
      .post(`https://www.sandclock.org/api/subscribe`, {
        body: user,
        headers: { 'Content-Type:': 'application/json' },
      })
      .then(() => {
        dispatch(succsessInfoModal())
        setOwnForm({ form_1: '', form_2: '' })
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
      .catch(() => dispatch(errorInfoModal()))
    // .finally(() => dispatch(unsetInfoModal())
  }
  const handlePercentLevelDonate = (e: { target: any }) => {
    let percent = 0
    e.target
      .closest('main')
      .querySelectorAll('.donate_item input')
      .forEach((item: HTMLInputElement) => (percent += +item.value))
    setLevelDonate({
      value: percent,
      submit: percent > 0 ? 'active' : '',
      class: percent > 100 ? 'active' : '',
    })
  }
  const handleEpisodesInputs = (e: { target: any }) => {
    if (e.target.classList.contains('info')) return
    const target = e.target.closest('.episode'),
      episodeInput = target
        .closest('main')
        .querySelector(`.donate_item[data-index='${target.dataset.index}']`)
    if (!target.classList.contains('active')) {
      target.classList.add('active')
      episodeInput.classList.add('active')
      episodeInput.querySelector('input').setAttribute('type', 'text')
    } else {
      target.classList.remove('active')
      episodeInput.classList.remove('active')
      episodeInput.querySelector('input').value = ''
      episodeInput.querySelector('input').setAttribute('type', 'hidden')
    }
    handlePercentLevelDonate(e)
  }
  const handleOnInputValue = (e: { target: any }) => {
    const value = e.target.value
    if (value > 100 || value <= 0 || value.startsWith(0)) e.target.value = ''
    handlePercentLevelDonate(e)
  }
  const handleSubmitAllocationForm = (e: {
    target: any
    preventDefault: () => void
  }) => {
    e.preventDefault()
    if (levelDonate.value > 100) {
      dispatch(exceedInfoModal())
      return
    }
    const data = new FormData(),
      inputs = e.target.elements
    for (const input of inputs) {
      if (input.value) data.append(input.name, input.value)
    }
    axios
      .post(`https://www.sandclock.org/api/subscribe`, {
        body: data,
        headers: { 'Content-Type:': 'application/json' },
      })
      .then(() => {
        dispatch(sentInfoModal())
        setLevelDonate({ value: 0, submit: '', class: '' })
        document
          .querySelectorAll('.episode')
          .forEach((item) => item.classList.remove('active'))
        document
          .querySelectorAll('.donate_item')
          .forEach((item) => item.classList.remove('active'))
      })
      .catch(() => dispatch(errorInfoModal()))
    // .finally(() => )
  }
  useEffect(() => {
    setTimeout(() => setPageView('active'))
    if (suggestions.length < 1) getAllSuggestions() // fetch results
    // if (Object.entries(suggestions).length === 0) getAllSuggestions()

    const unsetState = () => {
      dispatch(unsetInfoModal())
      setOwnForm({ form_1: '', form_2: '' })
      setOrgInfoOverlay({ value: { title: '', type: '', mission: '' }, class: '', })
    }
    const checkKeyDown = (e: { key: string }) => {
      if (e.key === 'Escape') unsetState()
    }
    document.addEventListener('keydown', (e) => checkKeyDown(e))
    return (
      unsetState(),
      document.removeEventListener('keydown', checkKeyDown)
    )
  }, [dispatch, getAllSuggestions, suggestions.length])
  return (
    <div className={'fallback donatepage ' + opacity}>
      <header>
        <Nav />
        <Banner>
          <h1>What Is Dear To You?</h1>
          <h5>
            Donating to a charity that is close to your heart? Supporting your
            alma mater? Or perhaps you have an individual in mind.
          </h5>
          <h5>
            Choose below, or add your own! We will ensure they will get these
            funds, and we will issue you a refund equivalent to your principal
            if you choose to keep it.
          </h5>
          <form action="" id="orgsSearch">
            <input
              type="search"
              pattern="[^'\x22]+"
              placeholder="Start Typing..."
            />
          </form>
        </Banner>
      </header>
      <main>
        <div className="orgs">
          <div className="orgs_section section">
            <article className="suggestion">
              {suggestions &&
                suggestions.length > 0 &&
                suggestions.map((obj, index) => (
                  <h3
                    className={index === 0 ? 'active' : ''}
                    key={obj.header}
                    data-tab={index}
                    onClick={handleEpisodeCollectionView}
                  >
                    {obj.header}
                  </h3>
                ))}
            </article>
            <div className="orgs_container">
              {suggestions &&
                suggestions.length > 0 &&
                suggestions.map((obj, index) => (
                  <div
                    className={'boxes ' + (index === 0 ? 'active' : '')}
                    key={obj.header}
                  >
                    <div
                      className="individual"
                      onClick={() =>
                        setOwnForm({ form_1: 'active', form_2: '' })
                      }
                    >
                      <h4>
                        Individual <br /> / <br /> Add Your Own
                      </h4>
                    </div>
                    {obj.orgs.map((orgs) => (
                      <div
                        className="episode"
                        key={orgs.title}
                        data-index={boxIndex++}
                        data-title={orgs.title}
                        data-type={orgs.type}
                        data-mission={orgs.mission}
                        onClick={handleEpisodesInputs}
                      >
                        <img
                          src={info_circle}
                          alt=""
                          className="info"
                          onClick={(e) => {
                            const episode =
                              e.currentTarget.closest<HTMLDivElement>(
                                '.episode',
                              )
                            setOrgInfoOverlay({
                              value: {
                                title: episode?.dataset.title,
                                type: episode?.dataset.type,
                                mission: episode?.dataset.mission,
                              },
                              class: 'active',
                            })
                          }}
                        />
                        <h4>{orgs.title}</h4>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="allocation section">
          <form
            action=""
            id="allocationForm"
            onSubmit={handleSubmitAllocationForm}
          >
            <section>
              <h4>Your Allocation</h4>
              <div className="yield">
                <p data-tooltip="Yield is the profit generated by the strategy. We will refund the rest.">
                  Yield
                </p>
                <div
                  onClick={(e) => e.currentTarget.classList.toggle('active')}
                />
                <p data-tooltip="Choose this if you want to donate everything.">
                  Whole
                </p>
              </div>
              <p className="total_donate">
                Total:
                <span className={levelDonate.class}>{levelDonate.value}%</span>
              </p>
            </section>
            <div className="allocation_container">
              {suggestions &&
                suggestions.length > 0 &&
                suggestions.map((obj) =>
                  obj.orgs.map((orgs) => (
                    <div
                      key={orgs.title}
                      className="donate_item"
                      data-index={inputIndex}
                    >
                      {orgs.title}
                      <label>
                        <input
                          type="hidden"
                          name={orgs.title}
                          data-index={inputIndex++}
                          defaultValue=""
                          onInput={handleOnInputValue}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) e.preventDefault()
                          }}
                          required
                        />
                      </label>
                    </div>
                  )),
                )}
            </div>
            <button
              type="submit"
              className={levelDonate.submit}
              form="allocationForm"
            >
              Proceed
            </button>
          </form>
        </div>
      </main>
      <Footer />
      <InfoModal />
      <div
        className={'modal ' + ownForm.form_1}
        onClick={(e) => {
          if (e.target === e.currentTarget)
            setOwnForm({ form_1: '', form_2: '' })
        }}
      >
        <form action="" id="individualStartForm" onSubmit={handleOwnTypeForm}>
          <label htmlFor="name">Recipient’s name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={nameOwnForm}
            placeholder="Name Surname"
            pattern="[A-Za-z]{2,}\s[A-Za-z]{2,}"
            onChange={(e) => setNameOwnForm(e.target.value)}
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
            onChange={(e) => setAddressOwnForm(e.target.value)}
            autoComplete="off"
          />
          <div className="individual_city">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={cityOwnForm}
              onChange={(e) => setCityOwnForm(e.target.value)}
              autoComplete="off"
            />
            <input
              type="text"
              name="state"
              id="state"
              placeholder="State"
              value={stateOwnForm}
              onChange={(e) => setStateOwnForm(e.target.value)}
              autoComplete="off"
            />
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Zip Code"
              value={codeOwnForm}
              onChange={(e) => setCodeOwnForm(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button type="submit" form="individualStartForm">
            →
          </button>
        </form>
      </div>
      <div
        className={'modal ' + ownForm.form_2}
        onClick={(e) => {
          if (e.target === e.currentTarget)
            setOwnForm({ form_1: 'active', form_2: '' })
        }}
      >
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
            onChange={(e) => setEmailOwnForm(e.target.value)}
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
            onChange={(e) => setEinOwnForm(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="message">
            Message or Additional Information (optional)
          </label>
          <textarea
            name="message"
            id="message"
            value={messageOwnForm}
            onChange={(e) => setMessageOwnForm(e.target.value)}
            autoComplete="off"
          ></textarea>
          <div>
            <input
              type="button"
              value="←"
              onClick={() => setOwnForm({ form_1: 'active', form_2: '' })}
            />
            <button type="submit" form="individualSubmitForm">
              Add
            </button>
          </div>
        </form>
      </div>
      <div
        className={'modal orginfo ' + orgInfoOverlay.class}
        onClick={(e) => {
          if (e.target === e.currentTarget)
            setOrgInfoOverlay({
              value: { title: '', type: '', mission: '' },
              class: '',
            })
        }}
      >
        <div>
          <div className="orginfo_header">
            <img src={ogr_info_dog} alt="" />
            <h3>{orgInfoOverlay.value.title}</h3>
          </div>
          <article className="orginfo_article">
            <h4>Type</h4>
            <p>{orgInfoOverlay.value.type}</p>
            <h4>Mission</h4>
            <p>{orgInfoOverlay.value.mission}</p>
          </article>
          <p
            className="goBack"
            onClick={() =>
              setOrgInfoOverlay({
                value: { title: '', type: '', mission: '' },
                class: '',
              })
            }
          >
            ← Go back
          </p>
        </div>
      </div>
    </div>
  )
}
export default Donate
