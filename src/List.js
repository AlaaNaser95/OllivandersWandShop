import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    let iterate = this.props.wands.map(wand => (
      <Item wand={wand} key={wand.core} />
    ));

    return (
      <div className="this.props.wands">
        <h3>Wands</h3>
        <div className="row">{iterate}</div>
      </div>
    );
  }
}

export default List;
