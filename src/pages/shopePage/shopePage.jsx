import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collectionPreview";
import { Route } from "react-router-dom";
import CategoryPage from "../category-page/categoryPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shop-actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/withSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionCategoryWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends Component {
  state = {
    isLoding: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoding: false });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoding } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoding={isLoding} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionCategoryWithSpinner isLoding={isLoding} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
