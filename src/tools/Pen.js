import Tools from './Tools';


/**
 *
 * @description
 * класс для создания кисти.
 * 
 */
export default class Pen extends Tools {
  constructor(canvas){
    super(canvas);
    this.listen();
  }

  //слушатель измениния мышки.
  listen(){
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }
  
  //слушатель отпускания кнопки мышки.
  mouseUpHandler(e){
    this.mouseDown = false;
  }

  //слушатель нажитя кнопки мышки.
  mouseDownHandler(e){
    this.mouseDown = true;
    this.ctx.beginPath();
    //передвигаем мышь на начальное положения нажатия мышки.
    this.ctx.moveTo(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop);
  }

  //слушатель передвижения мышки.
  mouseMoveHandler(e){
    //если кнопка нажата -> отрисовываем.
    if(this.mouseDown){
      this.draw(e.pageX - e.target.offsetLeft,e.pageY - e.target.offsetTop);
    }
  }

  //отрисовка нарисованной линии.
  draw(x,y){
    this.ctx.lineTo(x,y);
    this.ctx.stroke();
  }

}
