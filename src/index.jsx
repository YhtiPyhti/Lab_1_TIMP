import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/Components.css';
import ToolBar from './components/ToolBar';
import SettingBar from './components/SettingBar';
import MyCanvas from './components/Canvas';


const App = () => {
  return (
    <div className="asds">
      <SettingBar/>
      <ToolBar/>
      <MyCanvas></MyCanvas>
    </div>
  );
};


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
