import { useState } from "react";
import { getRandom } from "../helpers/random";

export const Color = () => {
    const colors = ["red", "blue", "green", "purple", "black", "yellow"];
    const getColor = () => {
        return colors[getRandom(0, colors.length)];
    };

    const [color, setColor] = useState(getColor());
    
    const handleColor = () => {
        const newColor = getColor();
        newColor === color ? handleColor() : setColor(newColor);
    };

    const style = {
        color: color,
    };

    return (
        <div>
            <button onClick={handleColor}>Change color</button>
            <p style={style}>This text will change a color</p>
        </div>
    );
};
