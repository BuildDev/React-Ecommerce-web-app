import React from "react";
import { selectUrlCollection } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import "./category-page.scss";
import CollectionItems from "../../components/collection-item/collection-items";

const CategoryPage = ({ collection }) => {
  console.log(collection)
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectUrlCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
