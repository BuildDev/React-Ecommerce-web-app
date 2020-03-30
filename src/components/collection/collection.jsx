import React from "react";

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, indx) => indx < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default Collection;
