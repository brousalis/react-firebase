import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          { item.text }
        </li>
      );
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
}

export default ItemList;
