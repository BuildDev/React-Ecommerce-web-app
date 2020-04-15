import React from "react";
import "./collection-items.scss";
import CustomButton from "../customButton/custtomButton";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart-actions";

const CollectionItems = ({ item, addItems }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted onClick={() => addItems(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItems })(CollectionItems);
