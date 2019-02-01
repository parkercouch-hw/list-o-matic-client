import React, { Component } from 'react';

import { any } from 'prop-types';

class List extends Component<any, any> {
  deleteList = () => {}

  public render() {
    return(
        <div className="list">
        {/* <h3>{this.props.list.name}</h3> */}
        <h3>we should be getting props list name</h3>
        <button onClick={this.deleteList}>Remove List</button>
    </div>
      );
  }
}

export default List;
