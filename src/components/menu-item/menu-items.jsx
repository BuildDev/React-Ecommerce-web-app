import React from "react";
import "./menu-items.scss";
import { withRouter } from "react-router-dom";

const MenuItems = ({ id, title, imageUrl, size, linkUrl, match, history }) => {
  console.log(history);
  console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOPE NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItems);