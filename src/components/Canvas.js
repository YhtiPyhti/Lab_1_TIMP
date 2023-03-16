import {useRef} from 'react';
import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import toolState from '../store/ToolState';
import canvasState from '../store/CanvaseState';
import Pen from "../tools/Pen.js";

const MyCanvas = observer( () => {
  const canvasRef = useRef();

  useEffect( () => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Pen(canvasRef.current))
  }, [])


  return (
    <div className="MyCanvas">
      <canvas ref={canvasRef} height="600" width="1400" className="MyCanvas_canvas" wei/>
    </div>
  );
});

export default MyCanvas;
