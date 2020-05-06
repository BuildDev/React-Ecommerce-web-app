import { createStructuredSelector } from "reselect";
import { selectCollectionLoaded } from "../../redux/shop/shop-selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/withSpinner";
import CategoryPage from "./categoryPage";

const mapStateToProps = createStructuredSelector({
  isLoding: (state) => !selectCollectionLoaded(state),
});

const CategoryPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CategoryPage);

export default CategoryPageContainer;
