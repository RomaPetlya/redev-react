import { useState } from "react";

export const HiddenText = () => {
    const [isShown, changeState] = useState(true);

    const handleClick = () => {
        changeState(!isShown);
    };

    return (
        <div className="flex">
            <input type="checkbox" onClick={handleClick} />
            {isShown && <p>Simple text</p>}
        </div>
    );
};
