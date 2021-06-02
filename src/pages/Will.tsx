import React, { useState, useEffect } from 'react'
import './will.scss'
import Nav from '../components/Nav'

interface Options {
  data: string,
  commit: string,
}

const Will: React.FC = (props, { data, commit }: Options) => {
  // const [commits, setCommits] = useState<string[]>([]) // useState<Array<{ data: string, commit: string }>>([])
  const [opacity, setPageView] = useState(''),
    [basicText, setBasicText] = useState('')
  // [commits, setCommits] = useState([{ data, commit }])

  const handleTextareaInput = (e: { target: any }) => {
    setBasicText(e.target.value)
    localStorage.setItem('basicText', e.target.value)
  }

  const handleBasicForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }
  async function* getCommits(repo: string) {
    let url = `https://api.github.com/repos/${repo}/commits`
    while (url) {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Our script' },
      });
      const body = await response.json()
      let nextPage: any = response.headers.get('Link')?.match(/<(.*?)>; rel="next"/)
      // console.log(nextPage)
      nextPage = nextPage?.[1]
      url = nextPage
      for (const commit of body) {
        yield commit
      }
    }
  }
  useEffect(() => {
    setTimeout(() => setPageView('active'));
    const text = localStorage.getItem('basicText')
    if (text) setBasicText(text)
    // (async () => {
    //   const arr = []
    //   for await (const commit of getCommits('andreypost/sandclock-build')) {
    //     arr.unshift({ 'data': commit.commit.author.date.match(/\d\d\d\d\-\d\d\-\d\d/gi).join(''), 'commit': commit.commit.message })
    //   }
    //   // console.log(arr)
    //   setCommits(arr)
    // })();
    async function HandleCommits() {
      // const arr: [{ data: string, commit: string }] = [{ data: '', commit: '' }]
      const arr = [{ data, commit }]
      for await (const commit of getCommits('andreypost/sandclock-build')) {
        arr.unshift({ 'data': commit.commit.author.date.match(/\d\d\d\d\-\d\d\-\d\d/gi).join(''), 'commit': commit.commit.message })
      }
      // console.log(arr)
      // setCommits(arr)
    }
    HandleCommits()
  }, [])
  return (
    <div className={'fallback willpage ' + opacity}>
      <header>
        <Nav />
      </header>
      <main>
        <nav className="section progress">
          <ul>

            <li className="circle active">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Basics</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Nominees</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Residuary</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Gifts</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Funeral</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Provisions</p>
            </li>

            <li className="line">
              <svg>
                <use xlinkHref="#line"></use>
              </svg>
            </li>

            <li className="circle">
              <svg>
                <use xlinkHref="#circle"></use>
              </svg>
              <p>Finalize</p>
            </li>

          </ul>
        </nav>
        <section className="section header">
          <h2>Basic details</h2>
        </section>

        <div className="forms">
          <div className="section">
            <form action="" id="basicForm" onSubmit={handleBasicForm}>

              <label htmlFor="name">Full Legal Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="textarea">Describe your story...</label>
              <textarea name="textarea" id="textarea" value={basicText} onChange={handleTextareaInput} />
              <button type="submit" form="basic">Subscribe</button>

            </form>
          </div>
        </div>

        {/* <div className="section commits">
          <h2>Commits for this project:</h2>
          {commits.length > 0 && commits.map((item, index) => <p key={index}><span>data:</span>  {item.data}, <br /> <span>commit:</span>  {item.commit}</p>)}
          <button type="button">GET more COMMITS</button>
        </div> */}

      </main>
    </div>
  )
}
export default Will