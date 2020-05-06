import React from "react";
import MenuItems from "../menu-item/menu-items";
import "./directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

const directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItems key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps, null)(directory);
