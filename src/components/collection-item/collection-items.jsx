import React from "react";
import "./collection-items.scss";
import CustomButton from "../customButton/custtomButton";

const CollectionItems = ({ imageUrl, name, price }) => {
  console.log(imageUrl);
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItems;
