import React, { Component } from "react";
import SHOP_DATA from "./shopeData";
import Collection from "../../components/collection/collection";

class ShopPage extends Component {
  state = {
    collection: SHOP_DATA,
  };
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, title, items }) => (
          <Collection key={id} title={title} items={items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
