
/**
* @description
* родительский класс для 
* создания инструмента.
*/
export default class Tools {
  
  /**
  * @description
  * конструктор класса.
  *
  * @param canvas - поле для рисования.
  *   
  */
  constructor(canvas){
    this.canvas = canvas;
    //устанавливаем контекс поля рисования.
    this.ctx = canvas.getContext('2d');
    this.destroyEvent();
  }

  /**
  * @description
  * сеттр для цвета инструмента.
  * 
  * @param color - цвет.
  * 
  */
  set fillColor(color){
    //внутренний цвет элемента.
    this.ctx.fillStyle = color;
    //цвет обводки элемента.
    this.ctx.strokeStyle = color;
  }

  /**
  * @description
  * сеттр для толщины инструмента.
  * 
  * @param width - толщина.
  * 
  */
  set lineWidth(width) {
    this.ctx.lineWidth = width;
  }


  //для обнуления слушателей, чтобы не ломалась логика на разных элементах
  destroyEvent(){
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }

}