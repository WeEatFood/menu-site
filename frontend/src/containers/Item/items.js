import gql from 'graphql-tag'

// TODO make sure query works in graphql playground
const ITEMS_QUERY = gql`
  query Items {
      items {
          id
          title
          category{
              id
              name
          }
          image{
              url
          }
          price
      }
  }
  `
export default ITEMS_QUERY
