import Rectangel from './Rectangel';

export default class Trash extends Rectangel {
  constructor(canvas){
    super(canvas);
  }

   draw(x, y, w, h){
   	this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.rect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.fill();
    this.ctx.stroke();
  }

}
