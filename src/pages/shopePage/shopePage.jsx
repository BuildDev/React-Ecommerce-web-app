import React from "react";
import CollectionPreview from "../../components/collection-preview/collectionPreview";
import { Route } from "react-router-dom";
import CategoryPage from "../category-page/categoryPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionPreview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
