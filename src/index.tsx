import React from 'react'
import ReactDom from 'react-dom'
import './styles/normalize.css'
import './styles/common.scss'
import App from './App'
// import './i18n'

//func for svg to load as sprites in index.html and use them in components -> <svg><use xlinkHref={arrow}></use></svg>
// const importAllSvg = (webpackContext: __WebpackModuleApi.RequireContext) => {
//   webpackContext.keys().forEach(webpackContext)
// }
// importAllSvg(require.context('./img/spriteSvg', false, /\.(svg)$/))

// if (process.env.NODE_ENV !== 'production') {
// console.log(process.env.NODE_ENV, 'development ')
// }

ReactDom.render(<App />, document.getElementById('root'))
