import React from 'react'
import ReactDOM from 'react-dom'
import MyReactLib from 'my-react-lib'
require('../../../node_modules/my-react-lib/lib/App.css')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MyReactLib />,
    document.body.appendChild(document.createElement('div')),
  )
})
