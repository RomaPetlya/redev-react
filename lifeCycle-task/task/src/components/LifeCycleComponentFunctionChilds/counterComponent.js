import React, { useEffect } from "react";

const CounterComponent = ({ count }) => {
    useEffect(() => {
        console.log(count, 'Function');
    }, [count]);

    useEffect(() => {
        console.log("ФУНКЦИОНАЛЬНЫЙ Компонент счетчика был монтирован");
        return () => {
            console.log(
                "ФУНКЦИОНАЛЬНЫЙ Компонент счетчика будет размонтирован"
            );
        };
    }, []);
    return <p>{count}</p>;
};

export default React.memo(CounterComponent, (prevProps, nextProps) => {
    return nextProps.count % 2 !== 0;
});
