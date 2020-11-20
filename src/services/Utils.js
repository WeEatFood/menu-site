import React, { useState, useEffect } from 'react'


const Utils = () => {
  const [page, setPage] = useState(null)

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/[process.env.CONTENTFUL_SPACE_ID]/`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer [process.env.CONTENTFUL_ACCESS_TOKEN]",
        },
        // Send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // Rerender the entire component with new data
        setPage(data.pageCollection.items[0]);
      })
  }, [])

  if (!page) {
    return "Loading...";
  }

  // Render the fetched Contentful data

}

export default Utils
