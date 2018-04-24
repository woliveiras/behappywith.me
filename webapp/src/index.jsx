import React from 'react'
import './img/favicon.ico'
import './index.css'
import './css/pure-min.css'
import { render } from 'react-dom'
import App from './components/App'

render(
  <App />,
  document.querySelector('#app')
)
