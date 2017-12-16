//Import Dependencies Here
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//Main Routes for Index
import Routes from './src/routes/Routes'

ReactDOM.render(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    , document.querySelector('#app'))
