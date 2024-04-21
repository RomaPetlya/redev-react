import React, { useEffect, useState } from "react";
import { getTasks } from "../../functions/getTasks";

export const TaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    function handleFilter(state) {
        setFilter(state);
    }

    useEffect(() => {
        (async function fetchTasks() {
            try {
                const respond = await getTasks(filter);
                setTasks(respond);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [filter]);
    useEffect(() => {
        console.log("ФУНКЦИОНАЛЬНЫЙ Компонент задач был монтирован");
        return () => {
            console.log("ФУНКЦИОНАЛЬНЫЙ Компонент задач будет размонтирован");
        };
    }, []);
    const filterParams = {
        true: "Все выполненные задачи",
        false: "Все не выполненные задачи",
        all: "Все задачи",
    };
    return (
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
        </div>
    );
};
