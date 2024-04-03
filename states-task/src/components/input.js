import { useState } from "react";

export const Input = () => {
    const [name, setName] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <label>
                Enter you name here:
                <input type="text" onChange={handleName} value={name} />
            </label>
            <p>Hi, {name}</p>
        </div>
    );
};
