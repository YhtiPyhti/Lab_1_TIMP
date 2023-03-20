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



/**
* @description
* функциональный компонет для создания
* строки используемых инструментов.
* 
* @param нет.
* @returns код HTML.
*
*/
const ToolBar = () =>{  
  /**
  * @description
  * функциональный компонет для 
  * изменения цвета у выбранного
  * элемента.
  * 
  * @param e - значение тега input с классом ButtonColor.
  * @returns код HTML.
  *
  */
  const changeColor = e =>{
    toolState.setFillColor(e.target.value);
  }
  /**
  * @description
  * функциональный компонет для 
  * изменения толщины у выбранного
  * элемента.
  * 
  * @param e - значение тега input с кассом ButtonStoke.
  * @returns код HTML.
  *
  */
  const changeWidth = e =>{
    let stroke = e.target.value;
    if(stroke>18 || stroke<1) stroke = 1;
    toolState.setWidth(stroke);
  }

  return (
    <div className="ToolBar">
      <button className="ButtonPen" 
      /**
       * onClick - срабатывает при нажатии на 
       * данную кнопку.
       * 
      */
      onClick = {() => toolState.setTool(new Pen(canvasState.canvas))}/>
      <button className="ButtonRect" onClick = {() => toolState.setTool(new Rectangel(canvasState.canvas))}/>
      <button className="ButtonCircle"onClick = {() => toolState.setTool(new Circle(canvasState.canvas))}/>
      <button className="ButtonStick"onClick = {() => toolState.setTool(new Stick(canvasState.canvas))}/>
      <button className="ButtonInputTxt" onClick = {() => toolState.setTool(new InputTXT(canvasState.canvas))}/>
      <button className="ButtonClear" onClick = {() => toolState.setTool(new Trash(canvasState.canvas))}/>
      <button className="ButtonEraser" onClick = {() => toolState.setTool(new Eraser(canvasState.canvas))}/>
      <input 
        className="ButtonColor" 
        id="fill-color" 
        type="color"
       /**
       * onChange - срабатывает при любом
       * изменении данного тега.
       * 
      */
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

//для дальнейшего использования экспортируем.
export default ToolBar;

