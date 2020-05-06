import React, { Component } from "react";
import { getData } from "./data";
import { getCats } from "./CategorieMenu";
import "./menu-item.css";
class MenuFilter extends Component {
  state = {
    data: [],
    cat: [],
  };

  componentDidMount() {
    this.setState({
      data: getData(),
      cat: getCats(),
    });
  }

  handleSelectCat = (cat) => {
    this.setState({
      selectedCat: cat,
    });
  };
  render() {
    const { data, selectedCat } = this.state;

    const filtred = selectedCat
      ? data.filter((m) => m.genre._id === selectedCat._id)
      : data;
    return (
      <div>
        <div className="part col-sm-12">
          <div className="portfolio-nav col-sm-12" id="filter-button">
            <ul>
              {this.state.cat.map((cate) => (
                <li
                  key={cate._id}
                  className={cate === selectedCat ? "active" : ""}
                >
                  {" "}
                  <span onClick={() => this.handleSelectCat(cate)}>
                    {cate.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="imgs-items">
          {filtred.map((imge) => (
            <img className="imgs-style" src={imge.img} />
          ))}
        </div>
      </div>
    );
  }
}

export default MenuFilter;
