import './css/Components.css';
import ToolBar from './components/ToolBar';

import MyCanvas from './components/Canvas';

/**
 * @description
 * функция для создания компонентов
 * главного окна.
 * 
 * @returns код HTML.
 * 
 * @ToolBar: панель инструментов.
 * @MyCanvas: окно для рисования.
 * 
 */

function App(){
  return (
    <div>
      <ToolBar/>
      <MyCanvas></MyCanvas>
    </div>
  );
};

//для дальнейшего использования экспортируем.
export default App;
