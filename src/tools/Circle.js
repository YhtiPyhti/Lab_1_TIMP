import Tools from './Tools';

/**
 *
 * @description
 * класс для создания круга.
 * 
 */
export default class Circle extends Tools {
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
    this.X_begin = e.pageX - e.target.offsetLeft;
    this.Y_begin = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(e){
    if(this.mouseDown){
      let X_end = e.pageX - e.target.offsetLeft;
      let Y_end = e.pageY - e.target.offsetTop;
      let width = X_end - this.X_begin;
      let height = Y_end - this.Y_begin;
      //вычисляем радиус круга.
      let radius = Math.sqrt(width**2 + height**2);
      this.draw(this.X_begin,this.Y_begin, radius);
    }
  }


  draw(x, y, radius){
    const img = new Image();
    img.src = this.saved;
    img.onload = () =>{
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}