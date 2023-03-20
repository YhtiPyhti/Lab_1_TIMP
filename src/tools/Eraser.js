import Pen from './Pen';


/**
 *
 * @description
 * класс для создания ластика.
 * Наследуем от кисти.
 * 
 */
export default class Eraser extends Pen {
  constructor(canvas){
    super(canvas);
  }


  draw(x,y){
    //меняем цвет на белый.
    this.ctx.strokeStyle = 'white';
    this.ctx.lineTo(x,y);
    this.ctx.stroke();
  }

}
