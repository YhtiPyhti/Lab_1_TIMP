import {makeAutoObservable} from "mobx";


/**
*@description
* класс для отслеживания
* состояния тега canvas.
*/
class CanvasState{
	canvas = null;
	constructor(){
		//для отслеживания состояний у всех собственных свойст.
		makeAutoObservable(this);
	}
	
	/**
	 * @description
	 * сеттр для состояние canvas.
	 * 
	 * @param canvas - поле для рисования.
	*/
	setCanvas(canvas){
		this.canvas = canvas;
	}
}

//для дальнейшего использования экспортируем.
export default new CanvasState()