import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";
import "./collection-preview.scss";
import Collection from "../collection/collection";
import { createStructuredSelector } from "reselect";

const CollectionPreview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps, null)(CollectionPreview);
