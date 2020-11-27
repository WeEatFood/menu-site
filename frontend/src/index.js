/** @format */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import './scss/_config.scss'
import 'bootstrap/dist/css/bootstrap.css'

const httpLink = createHttpLink({
  uri: 'http://localhost:1337/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
)

