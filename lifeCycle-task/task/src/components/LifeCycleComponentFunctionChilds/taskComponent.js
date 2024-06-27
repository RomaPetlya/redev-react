import React, { useEffect, useState } from "react";
import { getTasks } from "../../functions/getTasks";
import { filterParams } from "../../filterConfig";
import { tasksDecribes } from "../../filterConfig";

export const TaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState(filterParams.all);

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

    return (
        <div>
            <button onClick={() => handleFilter(filterParams.completed)}>
                Get completed tasks
            </button>
            <button onClick={() => handleFilter(filterParams.incompleted)}>
                Get uncompleted tasks
            </button>
            <button onClick={() => handleFilter(filterParams.all)}>
                Get all tasks
            </button>
            <p>{tasksDecribes[filter]}</p>
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
