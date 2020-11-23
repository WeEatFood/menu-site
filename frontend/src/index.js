/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import client from "./utils/apolloClient"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import './scss/_config.scss'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

