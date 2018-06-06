import React, { Component } from 'react';
import TagItem from './TagItem';

class TagItemList extends Component {
  render(){
    const { displayDatas } = this.props;
    let items = [];
    for(let i = 0; i < displayDatas.length; i++) {
      items.push(<li className="list-group-item" key={'item'+i}> Name: {displayDatas[i].name},   Tags: {displayDatas[i].tags.join(', ')},  Address: {displayDatas[i].googleInfo}</li>);
    }
    return (
      <div>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }
}

export default TagItemList;
