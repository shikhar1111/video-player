import React from 'react';
import StyledNightMode from './styles/StyledNightmode'

const NightMode = ({ nightModeCallback, nightMode}) => (
  <StyledNightMode>
    <span>Nightmode: </span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeCallback}></input>
      <span className="slider round"></span>
    </label>
  </StyledNightMode>
)

export default NightMode;