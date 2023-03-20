import Rectangel from './Rectangel';

/**
 * 
 * @description
 * класс для интсрумента заливки
 * всего холста.
 * 
 */ 
export default class Trash extends Rectangel {
  constructor(canvas){
    //передача парпаметров в родительский класс.
    super(canvas);
  }
  //метод отрисовки
  draw(x, y, w, h){
    this.ctx.beginPath();
    this.ctx.rect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.fill();
    this.ctx.stroke();
  }
}
