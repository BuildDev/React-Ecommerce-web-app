import { compose } from "redux";
import { selectStartCollectionFetching } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/withSpinner";
import CollectionPreview from "./collectionPreview";

const mapStateToProps = createStructuredSelector({
  isLoding: selectStartCollectionFetching,
});

const CollectionPverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPreview);

export default CollectionPverviewContainer;
