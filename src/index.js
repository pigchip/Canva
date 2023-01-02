import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { MaterialPicker } from 'react-color';

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {


    const firstCanvas = useRef(null)


    const clear = () => {
        firstCanvas.current.clear()
    }

    const [color, setColor] = useState("#000000")

    return (
        <div>
            <h1>Selecciona color:</h1>
            <MaterialPicker
                color={color}
                onChangeComplete={(color) => { setColor(color.hex) }}
            />
            <button onClick={clear}> Borrar </button>
            <CanvasDraw
                canvasWidth={800}
                canvasHeight={500}
                brushColor={color}
                ref={firstCanvas}
            />

            <script type="text/javascript" src="sketch.js"></script>
        </div>);
}

root.render(<div>
    <App />
</div>
)