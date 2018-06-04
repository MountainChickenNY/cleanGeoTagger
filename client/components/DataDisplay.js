import React, { Component } from 'react';
import TagDisplay from './TagDisplay';

class DataDisplay extends Component {
  render(){
    const { datas, displayDatas, onChange } = this.props;
    return (
      <div>
        Display
        <TagDisplay datas={datas} displayDatas={displayDatas} onChange={onChange} />
      </div>
    );
  }
}

export default DataDisplay;
