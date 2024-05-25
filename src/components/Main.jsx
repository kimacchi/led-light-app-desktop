import React from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { ColorContext } from '../index.jsx';

export default function Main() {
    const [color, setColor] = useColor("#0ad4ed");
    const { setColor: setGlobalColor } = React.useContext(ColorContext);

    React.useEffect(() => {
        setGlobalColor(color.hex);
    }, [color, setGlobalColor]);
  return (
    <div className='color-picker'>
        <ColorPicker color={color} onChange={setColor} />
    </div>
  )
}
