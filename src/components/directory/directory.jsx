import React from "react";
import MenuItems from "../menu-item/menu-items";
import "./directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

const directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, size, imageUrl, linkUrl }) => (
        <MenuItems
          key={id}
          title={title}
          id={id}
          size={size}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps, null)(directory);
