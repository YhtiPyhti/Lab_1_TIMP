import Tools from './Tools';

/**
 *
 * @description
 * класс для создания прямоугольников.
 * 
 */
export default class Rectangel extends Tools {
  constructor(canvas){
    super(canvas);
    this.listen();
  }

  listen(){
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }
  
  mouseUpHandler(e){
    this.mouseDown = false;
  }

  mouseDownHandler(e){
    this.mouseDown = true;
    this.ctx.beginPath();
    //вычисляем начальные координаты прямугольника.
    this.X_begin = e.pageX - e.target.offsetLeft;
    this.Y_begin = e.pageY - e.target.offsetTop;
    //сохраняем изображение с canvas, для его дальнейшей отчистки.
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e){
    if(this.mouseDown){
      //вычисляем конечные координаты прямугольника.
      let X_end = e.pageX - e.target.offsetLeft;
      let Y_end = e.pageY - e.target.offsetTop;
      //заданм ширину и длинну прямугольника.
      let wigth = X_end - this.X_begin;
      let height = Y_end - this.Y_begin;;
      this.draw(this.X_begin,this.Y_begin, wigth,height);
    }
  }

  //отрисовка прямоугольника.
  draw(x, y, w, h){
    const img = new Image();
    img.src = this.saved;
    //слушатель установки изображения.
    img.onload = () =>{
      //очищаем canvas для видимости текущего изображения.
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //отрисовываем сохраненную фигуру.
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      //отрисовка прямоугольника.
      this.ctx.rect(x,y,w,h);
      //для заполнения цветом.
      this.ctx.fill();
      //для рамки у прямоугольника.
      this.ctx.stroke();
    }
  }

}
