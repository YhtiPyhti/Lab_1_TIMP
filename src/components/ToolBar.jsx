import React from 'react';
import Pen from "../tools/Pen";
import Eraser from "../tools/Eraser";
import Rectangel from "../tools/Rectangel";
import toolState from "../store/ToolState";
import canvasState from "../store/CanvaseState";

const ToolBar = () =>{  

  const changeColor = e =>{
    toolState.setFillColor(e.target.value);
  }

  return (
    <div className="ToolBar">
      <button className="ButtonPen" onClick = {() => toolState.setTool(new Pen(canvasState.canvas))}/>
      <button className="ButtonRect" onClick = {() => toolState.setTool(new Rectangel(canvasState.canvas))}/>
      <button className="ButtonInputTxt"/>
      <button className="ButtonClear"/>
      <button className="ButtonEraser" onClick = {() => toolState.setTool(new Eraser(canvasState.canvas))}/>
      <input 
        className="ButtonColor" 
        id="fill-color" 
        type="color" 
        onChange = {e => changeColor(e)}
      />
      <label style={{margin:'10px'}} htmlFor = "fill-color">Цвет заливки</label>
    </div>
  );
};

export default ToolBar;
