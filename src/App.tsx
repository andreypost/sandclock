import React, { createContext, useState, Suspense, lazy } from 'react'
import {
  HashRouter,
  // BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'store'
// import { ConnectedRouter } from 'connected-react-router'
// import { PersistGate } from 'redux-persist/integration/react'
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
        <HashRouter>
          {/* <BrowserRouter basename="/"> */}
          <Suspense fallback>
            <AppRouter />
          </Suspense>
          {/* </BrowserRouter> */}
        </HashRouter>
      </Provider>
    </SuggestionsContext.Provider>
  )
}

export default App

// const App: React.FC = () => {
//     const [suggestions, setSuggestions] = useState([])
//     return (
//         <Provider store={store}>
//             {/* <PersistGate persistor={persistor} loading={<Loading />}> */}
//             <HashRouter basename="/">
//                 <Suspense fallback={<Spiner />}>
//                     {/* <ConnectedRouter history={history}> */}
//                     <Switch>
//                         <Route path="/sale" component={Sale} />
//                         <Route exact path="/" component={Home} />
//                         <Route path="/fund" component={Fund} />
//                         <Route path="/about" component={About} />
//                         <Route path="/donate" render={() => (<Donate suggestions={suggestions} setSuggestions={setSuggestions} />)} />
//                         <Route path="/will" component={Will} />
//                         <Route path="/faq" component={Faq} />
//                         <Route path="/friends" component={Friends} />
//                     </Switch>
//                     <Footer />
//                     {/* </ConnectedRouter> */}
//                 </Suspense>
//             </HashRouter>
//             {/* </PersistGate> */}
//         </Provider>
//     )
// }
// export default App
