import Tools from './Tools';

export default class Stick extends Tools {
  constructor(canvas) {
    super(canvas);
    this.listen()
    this.ctx.lineWidth = 1;
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
  }

  mouseDownHandler(e) {
    this.mouseDown = true
    this.X_begin = e.pageX-e.target.offsetLeft
    this.Y_begin = e.pageY-e.target.offsetTop
    this.ctx.beginPath()
    this.ctx.moveTo(this.X_begin, this.Y_begin )
    this.saved = this.canvas.toDataURL()
  }

  mouseUpHandler(e) {
    this.mouseDown = false
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      this.draw(e.pageX-e.target.offsetLeft, e.pageY-e.target.offsetTop);
    }
  }


  draw(x,y) {
    const img = new Image();
    const width = 22;
    var angle = Math.atan2(y-this.Y_begin,x-this.X_begin);
    var headlen = 10;
    // Это делает так, что конец головки стрелки расположен в токсе, игрушка, не спрашивайте, откуда взялась 1,15
    x -= Math.cos(angle) * ((width*1.15));
    y -= Math.sin(angle) * ((width*1.15));

    img.src = this.saved
    img.onload = async function () {
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
      this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx.beginPath()
                
      //начальный путь стрелки от начального квадрата до конечного квадрата и рисование штриха
      this.ctx.beginPath();
      this.ctx.moveTo(this.X_begin, this.Y_begin);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
        
      //начало нового пути от головы стрелки к одной из сторон точки
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x-headlen*Math.cos(angle-Math.PI/7),y-headlen*Math.sin(angle-Math.PI/7));
                
      //путь от боковой точки стрелки до другой боковой точки
      this.ctx.lineTo(x-headlen*Math.cos(angle+Math.PI/7),y-headlen*Math.sin(angle+Math.PI/7));
        
      //путь от боковой точки обратно к наконечнику стрелки, а затем снова к противоположной боковой точке
      this.ctx.lineTo(x, y);
      this.ctx.lineTo(x-headlen*Math.cos(angle-Math.PI/7),y-headlen*Math.sin(angle-Math.PI/7));

      //рисует пути, созданные выше
      this.ctx.stroke();
      this.ctx.fill();
    }.bind(this)
  }
}
/*
        this.ctx.moveTo(this.X_begin, this.Y_begin )
      this.ctx.lineTo(x, y);
      this.ctx.lineTo(x - headlen * Math.cos(angle - Math.PI / 7), y - headlen * Math.sin(angle - Math.PI / 7));
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x - headlen * Math.cos(angle + Math.PI / 7), y - headlen * Math.sin(angle + Math.PI / 7));
      this.ctx.stroke()
*/