import React from "react";
import CollectionItems from "../collection-item/collection-items";
import './collection.scss'

const Collection = ({ title, items }) => {
  return (
      <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indx) => indx < 4)
          .map(item => (
            <CollectionItems
              key={item.id}
              item={item}
            />
          ))}
      </div>
    </div>
  );
};

export default Collection;
