import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collectionPreview";
import { Route } from "react-router-dom";
import CategoryPage from "../category-page/categoryPage";
import { fetchCollectionStartAsync } from "../../redux/shop/shop-actions";
import { selectStartCollectionFetching } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/withSpinner";
import { createStructuredSelector } from "reselect";
const CollectionOverviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionCategoryWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoding={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionCategoryWithSpinner
              isLoding={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectStartCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
