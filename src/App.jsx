import './css/Components.css';
import ToolBar from './components/ToolBar';
import SettingBar from './components/SettingBar';
import MyCanvas from './components/Canvas';

function App(){
  return (
    <div className="asds">
      <SettingBar/>
      <ToolBar/>
      <MyCanvas></MyCanvas>
    </div>
  );
};

export default App;
