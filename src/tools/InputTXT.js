import Tools from './Tools';

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
    let input = document.createElement('input');

    this.X_begin = e.pageX - e.target.offsetLeft;
    this.Y_begin = e.pageY - e.target.offsetTop;

    input.type = 'text';
    input.style.position = 'fixed';
    input.setAttribute('class', 'textInput');
    input.style.left = (this.X_begin) + 'px';
    input.style.top = (this.Y_begin) + 'px';

    input.onkeydown = this.handleEnter;

    document.body.appendChild(input);
    input.focus();
  }

  //Key handler for input box:
  handleEnter(e) {
    let keyCode = e.keyCode;
    if (keyCode === 13) {
      draw(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
      document.body.removeChild(this);
    }
  }
}


  //Draw the text onto canvas:
function draw(txt, x, y) {
  let canvas = document.getElementById('myCanvas'), ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.font = '17px sans-serif';
  ctx.fillText(txt, x - 4, y);
}