import React from "react";
import Items from "../../components/Items";
import Query from "../../components/Query";
import ITEMS_QUERY from "../../queries/items/items";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ITEMS_QUERY}>
            {({ data: { items } }) => {
              return <items items={items} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
