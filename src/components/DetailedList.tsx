import React, { Component } from 'react';

// list is props.location.state

const DetailedList = (props: any) => {
  const items = props.location.state.items.map((item: any) => (
    <li key={item._id}>
      {item.content}
    </li>
  ));

  return (
  <div>
    <h3>{props.location.state.name}</h3>
    <ul>
      {items}
    </ul>
  </div>
  );
};

export default DetailedList;