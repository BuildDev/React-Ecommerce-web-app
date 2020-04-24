import React from "react";
import { connect } from "react-redux";
import Collection from "../collection/collection";
import { selectShopItems } from "../../redux/shop/shop-selectors";
import "./collection-preview.scss";

const CollectionPreview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, title, items }) => (
        <Collection key={id} title={title} items={items} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: selectShopItems(state),
});

export default connect(mapStateToProps, null)(CollectionPreview);
