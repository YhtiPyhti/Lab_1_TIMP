import Tools from './Tools';

export default class Rectangel extends Tools {
  constructor(canvas){
    super(canvas);
    this.listen()
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
      let wigth = X_end - this.X_begin;
      let height = Y_end - this.Y_begin;;
      this.draw(this.X_begin,this.Y_begin, wigth,height);
    }
  }


  draw(x, y, w, h){
    const img = new Image();
    img.src = this.saved;
    img.onload = () =>{
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x,y,w,h);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }

}
