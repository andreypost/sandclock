import React, { Suspense, lazy } from 'react'
import { useState } from 'react'
import {
    Route,
    HashRouter,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import Loader from './components/Loader'
// import { ConnectedRouter } from 'connected-react-router';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor, history } from 'app/store';

const Sale = lazy(() => import('./pages/Sale'))
const Home = lazy(() => import('./pages/Home'))
const Fund = lazy(() => import('./pages/Fund'))
const Donate = lazy(() => import('./pages/Donate'))
const Will = lazy(() => import('./pages/Will'))
const About = lazy(() => import('./pages/About'))
const Faq = lazy(() => import('./pages/Faq'))
const Friends = lazy(() => import('./pages/Friends'))
const Footer = lazy(() => import('./components/Footer'))

const App = (): any => {
    const [suggestions, setSuggestions] = useState([])
    return (
        // <Provider store={store}>
        // <PersistGate persistor={persistor} loading={<Loading />}>
        // <Router basename="/">
        <HashRouter basename="/">
            <Suspense fallback={<Loader />}>
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
        // </Router>
        // </PersistGate>
        // </Provider>
    )
}
export default App

export const User = {
    name: ''
}
