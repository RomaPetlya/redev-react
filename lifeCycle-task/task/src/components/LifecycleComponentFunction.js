import React, { useEffect, useState } from "react";
import CounterComponent from "./LifeCycleComponentFunctionChilds/counterComponent";
import { TaskComponent } from "./LifeCycleComponentFunctionChilds/taskComponent";

export const LifecycleComponentFunction = () => {
    const [isVisible, setVisibility] = useState(true);
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function hadleVisibility() {
        setVisibility(!isVisible);
    }

    useEffect(() => {
        console.log("ФУНКЦИОНАЛЬНЫЙ компонент был монтирован");
        return () => {
            console.log("ФУНКЦИОНАЛЬНЫЙ компонент будет размонтирован");
        };
    }, []); // НЕ ВЫЗЫВАЕТСЯ

    useEffect(() => {
        if (!isVisible)
            console.log(
                "ФУНКЦИОНАЛЬНЫЙ компонент будет размонтирован С ЗАВИСИМОСТЬЮ"
            );
    }, [isVisible]); // ВЫЗЫВАЕТСЯ

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <TaskComponent />
            <button onClick={() => hadleVisibility()}>УНИЧТОЖИТЬ</button>
            <CounterComponent count={count} />
            <button onClick={increment}>Увеличить</button>
        </div>
    );
};
