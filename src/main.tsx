import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Authprovider } from './contexts/auth'

import './styles/gloval.css'

ReactDOM.render(
  <React.StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </React.StrictMode>,
  document.getElementById('root')
)
