import React from "react";
import { connect } from "react-redux";
import Collection from "../../components/collection/collection";
import { selectShopItems } from "../../redux/shop/shop-selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, title, items }) => (
        <Collection key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopItems(state),
});

export default connect(mapStateToProps, null)(ShopPage);
