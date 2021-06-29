import { lazy } from 'react'
const Sale = lazy(() => import('views/Sale'))
const Home = lazy(() => import('views/Home'))
const Fund = lazy(() => import('views/Fund'))
const Donate = lazy(() => import('views/Donate'))
const Will = lazy(() => import('views/Will'))
const About = lazy(() => import('views/About'))
const Faq = lazy(() => import('views/Faq'))
const Friends = lazy(() => import('views/Friends'))

import { SALE_ROUTE, HOME_ROUTE, FUND_ROUTE, DONATE_ROUTE, WILL_ROUTE, ABOUT_ROUTE, FAQ_ROUTE, FRIENDS_ROUTE } from 'utils/routes.constants'

export const publicRoutes = [
    {
        path: SALE_ROUTE,
        Component: Sale
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: FUND_ROUTE,
        Component: Fund
    },
    {
        path: DONATE_ROUTE,
        Component: Donate
    },
    {
        path: WILL_ROUTE,
        Component: Will
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: FAQ_ROUTE,
        Component: Faq
    },
    {
        path: FRIENDS_ROUTE,
        Component: Friends
    },
]

export const privatRoutes = [{}]