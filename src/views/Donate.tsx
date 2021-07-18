import React, { useState, useContext, useEffect, useCallback } from 'react'
import './Donate.scss'
import { SuggestionsContext } from '../index'
import axios from 'axios'
import Nav from 'Nav'
import Banner from 'Banner'
import Footer from 'Footer'
import { useAppDispatch } from 'utils/hooks'
import { missionTypeModal, ownFormStartModal, messageErrorModal, messageExceedModal, messageSentModal } from 'modals/modal.slice'
import info_circle from 'svg/info_circle.svg'

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
}

// const Donate: React.FC<Props> = ({ suggestions, setSuggestions }: Props, { boxIndex = 0, inputIndex = 0}: Options) => {
const Donate: React.FC<Options> = ({ boxIndex = 0, inputIndex = 0 }: Options) => {
  const dispatch = useAppDispatch(),
    [opacity, setPageView] = useState(''),
    { suggestions, setSuggestions } = useContext(SuggestionsContext),
    [levelDonate, setLevelDonate] = useState({ value: 0, submit: '', class: '' })

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
    return setSuggestions(dbSuggestions) // remove on production
    // axios.get('https://www.sandclock.org/api')
    //   .then(results => setSuggestions(results))
    //   .catch(() => dispatch(retrieveInfoModal()))
  }, [setSuggestions])

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
      dispatch(messageExceedModal())
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
        dispatch(messageSentModal())
        setLevelDonate({ value: 0, submit: '', class: '' })
        document
          .querySelectorAll('.episode')
          .forEach((item) => item.classList.remove('active'))
        document
          .querySelectorAll('.donate_item')
          .forEach((item) => item.classList.remove('active'))
      })
      .catch(() => dispatch(messageErrorModal()))
    // .finally(() => )
  }
  useEffect(() => {
    setTimeout(() => setPageView('active'))
    if (suggestions.length < 1) getAllSuggestions() // fetch results
    // if (Object.entries(suggestions).length === 0) getAllSuggestions()
  }, [getAllSuggestions, suggestions])
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
                    key={obj.header}>
                    <div className="individual" onClick={() => dispatch(ownFormStartModal())}>
                      <h4>
                        Individual <br /> / <br /> Add Your Own
                      </h4>
                    </div>
                    {obj.orgs.map(orgs => (
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
                          onClick={e => {
                            const episode = e.currentTarget.closest<HTMLDivElement>('.episode')
                            dispatch(missionTypeModal({ title: episode?.dataset.title, type: episode?.dataset.type, mission: episode?.dataset.mission }))
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
                  onClick={e => e.currentTarget.classList.toggle('active')}
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
                suggestions.map(obj =>
                  obj.orgs.map(orgs => (
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
                          onKeyPress={e => {
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
    </div>
  )
}
export default Donate