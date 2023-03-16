import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/Components.css';
import ToolBar from './components/ToolBar.js';
import SettingBar from './components/SettingBar.js';
import MyCanvas from './components/Canvas.js';


class App extends React.Component {
  render(){
    return (
      <div className="asds">
        <SettingBar/>
        <ToolBar/>
        <MyCanvas></MyCanvas>
      </div>
    )
  };
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
