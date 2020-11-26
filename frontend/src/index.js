/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import client from './components/Queries/Items'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import './scss/_config.scss'
import 'bootstrap/dist/css/bootstrap.css'


// TODO error in the client that needs hotfix
ReactDOM.render(
  <ApolloProvider client={ client }>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

