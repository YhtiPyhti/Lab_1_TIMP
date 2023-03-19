import {useRef} from 'react';
import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import toolState from '../store/ToolState';
import canvasState from '../store/CanvaseState';
import Pen from "../tools/Pen";


//поля для рисования
const MyCanvas = observer( () => {
  const canvasRef = useRef();

  useEffect( () => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new toolState.setTool(new Pen(canvasState.canvas)));
  }, [])


  return (
    <div className="MyCanvas">
      <canvas ref={canvasRef} id="myCanvas" height="600" width="1300" className="MyCanvas_canvas" wei/>
    </div>
  );
});

export default MyCanvas;
