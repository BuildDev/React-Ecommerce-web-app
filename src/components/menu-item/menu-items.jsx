import React from "react";
import "./menu-items.scss";

const MenuItems = ({ id, title, imageUrl, size }) => {
  return (
    <div
      className={`${size} menu-item`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOPE NOW</span>
      </div>
    </div>
  );
};

export default MenuItems;
