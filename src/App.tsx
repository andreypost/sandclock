import React, { Suspense, lazy } from 'react'
import { useState } from 'react'
import {
    Route,
    HashRouter,
    // BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import Spiner from 'Spiner'
// import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store } from './store'
// import { PersistGate } from 'redux-persist/integration/react'

const Sale = lazy(() => import('views/Sale'))
const Home = lazy(() => import('views/Home'))
const Fund = lazy(() => import('views/Fund'))
const Donate = lazy(() => import('views/Donate'))
const Will = lazy(() => import('views/Will'))
const About = lazy(() => import('views/About'))
const Faq = lazy(() => import('views/Faq'))
const Friends = lazy(() => import('views/Friends'))
const Footer = lazy(() => import('components/Footer'))

const App = (): any => {
    const [suggestions, setSuggestions] = useState([])
    return (
        <Provider store={store}>
            {/* <PersistGate persistor={persistor} loading={<Loading />}> */}
            <HashRouter basename="/">
                <Suspense fallback={<Spiner />}>
                    {/* <ConnectedRouter history={history}> */}
                    <Switch>
                        <Route path="/sale" component={Sale} />
                        <Route exact path="/" component={Home} />
                        <Route path="/fund" component={Fund} />
                        <Route path="/about" component={About} />
                        <Route path="/donate" render={() => (<Donate suggestions={suggestions} setSuggestions={setSuggestions} />)} />
                        <Route path="/will" component={Will} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/friends" component={Friends} />
                    </Switch>
                    <Footer />
                    {/* </ConnectedRouter> */}
                </Suspense>
            </HashRouter>
            {/* </PersistGate> */}
        </Provider>
    )
}
export default App

export const User = {
    name: ''
}
