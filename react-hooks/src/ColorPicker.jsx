import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const handleColorChange = (e)=>{
    setColor(e.target.value);
  }

  return (
    <div id="color-picker-container" style={{backgroundColor: color}}>
      <p className="stylep">
                Choose a color using the color input below:
            </p>
            <br/>
    <input id="color-input" type="color" value={color} onChange={handleColorChange} />

    </div>
  )
  
};