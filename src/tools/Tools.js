export default class Tools {
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.destroyEvent()
  }

  set fillColor(color){
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
  }


  destroyEvent(){
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }

}