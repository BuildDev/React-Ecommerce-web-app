import React, { Component } from "react";
import MenuItems from "../menu-item/menu-items";
import "./directory.scss";
class Directory extends Component {
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5
      }
    ]
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, id, size, imageUrl }) => (
          <MenuItems title={title} id={id} size={size} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
