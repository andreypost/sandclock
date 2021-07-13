import React, { createContext, useState, Suspense, lazy } from 'react'
import ReactDom from 'react-dom'
import './styles/normalize.css'
import './styles/common.scss'
import { Provider } from 'react-redux'
import { store } from 'store'
import Spiner from 'Spiner'
// import './i18n'


interface SCProps {
    suggestions: Array<{
        header: string
        orgs: [{ title: string; type: string; mission: string }]
    }>
    setSuggestions: (arg0: any) => void
}

export const SuggestionsContext = createContext({} as SCProps)
// export const SuggestionsContext = createContext<SCProps>({
//     suggestions: [],
//     setSuggestions: () => { return }
// })

const AppRouter = lazy(() => import('./AppRouter'))

const App: React.FC = () => {
    const [suggestions, setSuggestions] = useState([])
    return (
        <SuggestionsContext.Provider value={{ suggestions, setSuggestions }}>
            <Provider store={store}>
                <Suspense fallback={<Spiner />}>
                    <AppRouter />
                </Suspense>
            </Provider>
        </SuggestionsContext.Provider>
    )
}

//func for svg to load as sprites in index.html and use them in components -> <svg><use xlinkHref={arrow}></use></svg>
// const importAllSvg = (webpackContext: __WebpackModuleApi.RequireContext) => {
//   webpackContext.keys().forEach(webpackContext)
// }
// importAllSvg(require.context('./img/spriteSvg', false, /\.(svg)$/))

// if (process.env.NODE_ENV !== 'production') {
// console.log(process.env.NODE_ENV, 'development ')
// }

ReactDom.render(<App />, document.getElementById('root'))
