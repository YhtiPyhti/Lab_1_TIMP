import React from 'react';


export default class SettingBar extends React.Component {
  render(){
    return (
      <div className="SettingBar">
        <button className="ButtonBack"/>
        <button className="ButtonNext"/>
        <button className="ButtonSave"/>
        <button className="ButtonExit"/>
      </div>
    )
  };
}
