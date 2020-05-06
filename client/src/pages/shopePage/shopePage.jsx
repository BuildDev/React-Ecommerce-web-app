import React, { Component } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionStartAsync } from "../../redux/shop/shop-actions";
import { connect } from "react-redux";
import CollectionPverviewContainer from "../../components/collection-preview/collection-preview-container";
import CategoryPageContainer from "../category-page/categoryPageContainer";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionPverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
