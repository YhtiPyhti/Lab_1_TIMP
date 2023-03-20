import Tools from './Tools';

/**
 *
 * @description
 * класс для создания поля
 * для ввода текста на холсте.
 * 
 */
export default class InputTXT extends Tools {
  constructor(canvas){
    super(canvas);
    this.listen();
  }

  listen(){
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }
  
  mouseUpHandler(e){
    this.mouseDown = false;
  }

  mouseDownHandler(e){
    this.mouseDown = true;
    //при нажатии создаем элемент с тегом input.
    let input = document.createElement('input');

    this.X_begin = e.pageX - e.target.offsetLeft;
    this.Y_begin = e.pageY - e.target.offsetTop;

    //задаем стандартные свойста тегу.
    input.type = 'text';
    input.style.position = 'fixed';
    input.setAttribute('class', 'textInput');
    input.style.left = (this.X_begin) + 'px';
    input.style.top = (this.Y_begin) + 'px';

    input.onkeydown = this.handleEnter;

    //добавляем к 
    document.body.appendChild(input);
    input.focus();
  }

  //обработчик ввода и нажатия клавиши Enter.
  handleEnter(e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) {
      draw(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
      document.body.removeChild(this);
    }
  }
}


/**
 * 
 * @description
 * функция для вставки текста,
 * как изображения на cnavas.
 * 
 * @remark
 * вынесли за класс, т.к.
 * иначе не работало).
 * 
 * @param txt - введеный текст
 * @param x, y - координаты для встаки текста.
 * 
 * @returns нету.
 * 
 */
function draw(txt, x, y) {
  let canvas = document.getElementById('myCanvas'), ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.font = '17px sans-serif';
  ctx.fillText(txt, x - 4, y);
}