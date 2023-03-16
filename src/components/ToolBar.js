import React from 'react';
import DrawRectangle from "../tools/Rectangel.js";


export default class ToolBar extends React.Component {
  render(){
    return (
      <div className="ToolBar">
        <button className="ButtonPen"/>
        <button className="ButtonRect"/>
        <button className="ButtonInputTxt"/>
        <input className="ButtonColor" type="color"/>
      </div>
    )
  };
}
