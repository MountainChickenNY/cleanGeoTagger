import React, { Component } from 'react';


class DataCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
      tagCount: 0
    };
  }


  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClickSave = () => {
    const { name, tag, tagCount } = this.state;
    let data = {};
    let tags = [tag];
    if(tagCount) {
      let tagsElems = document.getElementsByClassName('tags');
      for(let i = 0; i < tagsElems.length; i++) {
        tags.push(tagsElems[i].value);
      }
    }
    data.name = name;
    data.tags = tags;

    this.setState({
      name: '',
      tag: '',
      tagCount: 0
    });
    
    this.props.onClick(data);
    
  }

  handleClickPlus = () => {
    if(this.state.tagCount < 4){
      let updateTagCount = this.state.tagCount+1;
      this.setState({
        tagCount: updateTagCount
      }); 
    }
  }
  
  handleClickMin = () => {
    if(this.state.tagCount >= 1){
      let updateTagCount = this.state.tagCount-1; 
      this.setState({
        tagCount: updateTagCount
      });
    }
  }
  
  render(){
    const { tagCount } = this.state;
    let moreTags = [];
    if(tagCount) {
      for(let i = 0; i < tagCount; i++) {
        moreTags.push(<input className="tags form-control" type="text" name = {"tag"+i+1} placeholder="tag" key={"tag"+i+1}/>);
      }
    }
    return (
      <div className="input-group mb-3">
        <form className="form-group">
          <input className="form-control" type="text" name="name" placeholder="example: Codesmith NY" value={this.state.name} onChange={this.handleChange} />
          <br />
          <a>Save to a tag!</a>
          <input className="tag form-control" type="text" name="tag" placeholder="tag" value={this.state.tag} onChange={this.handleChange} />
          {moreTags}
          <br />
          <a className="btn btn-secondary ml-1" onClick={this.handleClickPlus}>Add Tag</a>
          <a className="btn btn-secondary ml-1" onClick={this.handleClickMin}>Remove Tag</a>
          <button type="submit" className="btn btn-secondary ml-1" onClick={this.handleClickSave}>SAVE</button>
        </form>
      </div>
    );
  }
}

export default DataCreate;
