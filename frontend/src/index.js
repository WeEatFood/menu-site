/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import './scss/_config.scss'
import 'bootstrap/dist/css/bootstrap.css'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

