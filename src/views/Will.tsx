import React, { useState, useEffect } from 'react'
import './Will.styles.scss'
import Nav from 'components/Nav'
import circle from 'svg/circle.svg'
import line from 'svg/line.svg'

interface Options {
  data: string,
  commit: string,
}

const Will: React.FC = (props, { data, commit }: Options) => {
  // const [commits, setCommits] = useState<string[]>([]) // useState<Array<{ data: string, commit: string }>>([])
  const [opacity, setPageView] = useState(''),
    [basicText, setBasicText] = useState(''),
    [commits, setCommits] = useState([{ data, commit }]),
    [userRepo, setUserRepo] = useState('')

  const handleTextareaInput = (e: { target: any }) => {
    setBasicText(e.target.value)
    localStorage.setItem('basicText', e.target.value)
  }

  const handleBasicForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  // async function getCommits(repo: string) {
  //   let url = `https://api.github.com/repos/${repo}/commits`
  //   // while (url) {
  //   const response = await fetch(url, {
  //     headers: { 'User-Agent': 'Our script' },
  //   });
  //   const body = await response.json()
  //   let nextPage: any = response.headers.get('Link')?.match(/<(.*?)>; rel="next"/)
  //   nextPage = nextPage?.[1]
  //   if (nextPage) {
  //     console.log(body, nextPage)
  //     url = nextPage
  //   }
  //   return body
  //   // for (const commit of body) {
  //   //   yield commit
  //   // }
  //   // }
  // }
  // let url = `https://api.github.com/repos/andreypost/portfolio/commits`
  // async function HandleCommits(user = 'andreypost/portfolio') {
  const url = `https://api.github.com/repos/${userRepo}/commits`

  async function HandleCommits() {
    // const arr: [{ data: string, commit: string }] = [{ data: '', commit: '' }]
    // const arr = [...commits]
    fetch(url, {
      headers: {
        'User-Agent': 'Our script'
      }
    })
      .then(response => response.json())
      .then((body) => console.log(body))
    // .catch(() => )
    // const response = await fetch(url, {
    //   headers: { 'User-Agent': 'Our script' },
    // });
    // const body = await response.json()
    // let nextPage: any = response.headers.get('Link')?.match(/<(.*?)>; rel="next"/)
    // nextPage = nextPage?.[1]
    // if (nextPage) {
    //   console.log(body, nextPage)
    //   url = nextPage
    // } else if (!nextPage) {
    //   url = ''
    // }

    // console.log(body)
    // for await (const commit of body) {
    //   arr.unshift({ 'data': commit.commit.author.date.match(/\d\d\d\d\-\d\d\-\d\d/gi).join(''), 'commit': commit.commit.message })
    // }
    // setCommits(arr)
  }

  useEffect(() => {
    setTimeout(() => setPageView('active'));
    const text = localStorage.getItem('basicText')
    if (text) setBasicText(text)
    /*async function* getCommits(repo: string) {
      let url = `https://api.github.com/repos/${repo}/commits`
      while (url) {
        const response = await fetch(url, {
          headers: { 'User-Agent': 'Our script' },
        });
        const body = await response.json()
        let nextPage: any = response.headers.get('Link')?.match(/<(.*?)>; rel="next"/)
        nextPage = nextPage?.[1]
        url = nextPage
        for (const commit of body) {
          yield commit
        }
      }
    }
    async function HandleCommits() {
      // const arr: [{ data: string, commit: string }] = [{ data: '', commit: '' }]
      const arr = [{ data, commit }]
      for await (const commit of getCommits('andreypost/portfolio')) {
        arr.unshift({ 'data': commit.commit.author.date.match(/\d\d\d\d\-\d\d\-\d\d/gi).join(''), 'commit': commit.commit.message })
      }
      setCommits(arr)
    }
    (async () => {
      const arr = []
      for await (const commit of getCommits('andreypost/sandclock-build')) {
        arr.unshift({ 'data': commit.commit.author.date.match(/\d\d\d\d\-\d\d\-\d\d/gi).join(''), 'commit': commit.commit.message })
      }
      // console.log(arr)
      setCommits(arr)
    })();*/

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
              <img src={circle} alt="" />
              <p>Basics</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
              <p>Nominees</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
              <p>Residuary</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
              <p>Gifts</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
              <p>Funeral</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
              <p>Provisions</p>
            </li>

            <li className="line">
              <img src={line} alt="" />
            </li>

            <li className="circle">
              <img src={circle} alt="" />
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
          {commits.length > 0 && commits.map((item, sha) => <p key={sha}><span>data:</span>  {item.data}, <br /> <span>commit:</span>  {item.commit}</p>)}
          <input type="text" name="repo" id="repo" value={userRepo} onChange={e => setUserRepo(e.target.value)} />
          <button type="button" onClick={() => HandleCommits()}>GET COMMITS</button>
        </div> */}

      </main>
    </div>
  )
}
export default Will