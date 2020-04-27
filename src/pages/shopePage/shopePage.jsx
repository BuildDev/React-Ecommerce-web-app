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

class ShopPage extends Component {
  state = {};

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionPreview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
