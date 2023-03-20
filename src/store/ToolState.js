import {makeAutoObservable} from "mobx";

/**
*@description
* класс для отслеживания
* состояния инструмента.
*/
class ToolState {
    tool = null;
    constructor() {
        //для отслеживания состояний у всех собственных свойст.
        makeAutoObservable(this);
    }
    /**
    *@description
    * сеттр(экщен) для инструмента.
    * 
    * @param tool - инструмент.
    * 
    */
    setTool(tool) {
        this.tool = tool;
    }

    /**
    *@description
    * сеттр состояния цвета
    * инструмента.
    * 
    * @param color - цвет.
    * 
    */
    setFillColor(color) {
        this.tool.fillColor = color;
    }

    /**
    *@description
    * сеттр для состояния 
    * толщины инструмента.
    * 
    * @param width - толщина.
    * 
    */
    setWidth(width){
        this.tool.lineWidth = width;
    }

}
//для дальнейшего использования экспортируем.
export default new ToolState()