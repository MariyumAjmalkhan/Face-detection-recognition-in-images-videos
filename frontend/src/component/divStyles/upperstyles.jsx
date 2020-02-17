/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function UpperStyle() {
    const style = {
        width: "30px",
        height: "15px",
        backgroundColor: "red",
        margin: '0px 15px'
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '-23px' }}>
          <div style={style}></div>
          <div style={style}></div>
          <div style={style}></div>
          <div style={style}></div>
          <div style={style}></div>
      </div>
    );
  }
  
export default UpperStyle;
  