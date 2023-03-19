import React from 'react';
import Pen from "../tools/Pen";
import Eraser from "../tools/Eraser";
import Rectangel from "../tools/Rectangel";
import Circle from "../tools/Circle";
import Stick from "../tools/Stick";
import Trash from "../tools/Trash";
import InputTXT from "../tools/InputTXT";


import toolState from "../store/ToolState";
import canvasState from "../store/CanvaseState";

const ToolBar = () =>{  

  const changeColor = e =>{
    toolState.setFillColor(e.target.value);
  }
  const changeWidth = e =>{
    let stroke = e.target.value;
    if(stroke>18 || stroke<1) stroke = 1;
    toolState.setWidth(stroke);
  }

  return (
    <div className="ToolBar">
      <button className="ButtonPen" onClick = {() => toolState.setTool(new Pen(canvasState.canvas))}/>
      <button className="ButtonRect" onClick = {() => toolState.setTool(new Rectangel(canvasState.canvas))}/>
      <button className="ButtonCircle"onClick = {() => toolState.setTool(new Circle(canvasState.canvas))}/>
      <button className="ButtonStick"onClick = {() => toolState.setTool(new Stick(canvasState.canvas))}/>
      <button className="ButtonInputTxt" onClick = {(e) => toolState.setTool(new InputTXT(canvasState.canvas))}/>
      <button className="ButtonClear" onClick = {() => toolState.setTool(new Trash(canvasState.canvas))}/>
      <button className="ButtonEraser" onClick = {() => toolState.setTool(new Eraser(canvasState.canvas))}/>
      <input 
        className="ButtonColor" 
        id="fill-color" 
        type="color" 
        onChange = {e => changeColor(e)}
      />
      <label style={{margin:'10px'}}>Цвет</label>

      <input 
        className="ButtonStoke" 
        id="stroke"
        type="number" 
        defaultValue={1}
        min={1} 
        max={18}
        onChange = {e => changeWidth(e)}
      />
      <label style={{margin:'10px'}}>Толщина линии</label>
    </div>
  );
};

export default ToolBar;

