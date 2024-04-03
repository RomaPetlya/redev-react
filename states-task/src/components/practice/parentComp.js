import { useState } from "react";
import { getRandom } from "../../helpers/random";
import { ChildComponent } from "./childComp";
import { SiblingComponent } from "./siblingComponent";


export const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    const random = () => {
        setCount(getRandom(0, 11));
    };

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={random}>Случайное</button>
            <button onClick={decrement}>Уменьшить</button>
            <ChildComponent name="React Enjoyer" count={count}/>
            <SiblingComponent />
        </div>
    );
};