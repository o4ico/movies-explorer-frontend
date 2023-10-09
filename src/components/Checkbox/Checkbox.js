import React from 'react';
import './Checkbox.css';
function Checkbox() {

  return (
    <div className="checkbox">
      <label className="checkbox__container" for="checkbox">
        <input className="checkbox__element" type='checkbox' id='checkbox' defaultChecked></input>
        <span className="checkbox__visible "></span>
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}

export default Checkbox;