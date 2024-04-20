import React, { useEffect, useState } from "react";
import { getTasks } from "../functions/getTasks";

export const LifecycleComponentFunction = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const [isVisible, setVisibility] = useState(true);
    const [count, setCount] = useState(0);

    function handleFilter(state) {
        setFilter(state);
    }
    function hadleVisibility() {
        setVisibility(!isVisible);
    }
    function increment() {
            setCount(count + 1);
    }

    useEffect(() => {
        async function fetchTasks() {
            try {
                const respond = await getTasks(filter);
                setTasks(respond);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTasks();
    }, [filter]);

   
   
    useEffect(() => {
        if (count % 2 === 0) {
            console.log(count);
        }
    }, [count]);


    
    useEffect(() => {
        console.log('Компонент был монтирован');
        return () => {
          console.log('Компонент будет размонтирован');
        };
      }, []);

    const filterParams = {
        true: "Все выполненные задачи",
        false: "Все не выполненные задачи",
        all: "Все задачи",
    };

    if (!isVisible) {
        return null;
    }
 
    return ( (
        <div>
            <button onClick={() => handleFilter(true)}>
                Get completed tasks
            </button>
            <button onClick={() => handleFilter(false)}>
                Get uncompleted tasks
            </button>
            <button onClick={() => handleFilter("all")}>Get all tasks</button>
            <p>{filterParams[filter]}</p>
            <ol>
                {tasks.map((item) => (
                    <li key={item.id}>
                        {item.title} and {item.isCompleted.toString()}
                    </li>
                ))}
            </ol>
            <button onClick={() => hadleVisibility()}>УНИЧТОЖИТЬ</button>
            <div>
                <p>{count}</p>
                <button onClick={() => increment()}>Увеличить</button>
            </div>
        </div>)
    );
};
