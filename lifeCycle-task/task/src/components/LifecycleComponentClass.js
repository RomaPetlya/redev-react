import React from "react";
import { getTasks } from "../functions/getTasks";
import { filterParams } from "../filterConfig";
import { tasksDecribes } from "../filterConfig";
import { DestroyButton } from "./lifeCycleComponentClassChilds/destroyButton";

export class LifecycleComponentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filter: "all",
            isVisible: true,
            count: 0,
        };
    }

    setFilter(state) {
        this.setState({
            filter: state,
        });
    }
    hadleVisibility() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible,
        }));
    }
    increment() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    async fetchTasks() {
        try {
            const { filter } = this.state;
            const respond = await getTasks(filter);
            this.setState({ tasks: respond });
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        const { tasks } = this.state;

        if (!this.state.isVisible) {
            return null;
        }

        return (
            <div>
                <button onClick={() => this.setFilter(filterParams.completed)}>
                    Get completed tasks
                </button>
                <button onClick={() => this.setFilter(filterParams.incompleted)}>
                    Get uncompleted tasks
                </button>
                <button onClick={() => this.setFilter(filterParams.all)}>
                    Get all tasks
                </button>
                <p>{tasksDecribes[this.state.filter]}</p>
                <ol>
                    {tasks.map((item) => (
                        <li key={item.id}>
                            {item.title} and {item.isCompleted.toString()}
                        </li>
                    ))}
                </ol>
                <div onClick={() => this.hadleVisibility()}>
                    <DestroyButton /> 
                </div>
                <div>
                    <p>{this.state.count}</p>
                    <button onClick={() => this.increment()}>Увеличить</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.fetchTasks();
        console.log("КЛАССОВЫЙ компонент был монтирован");
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.filter !== prevState.filter) {
            this.fetchTasks();
        }
        if (this.state.count !== prevState.count) {
            console.log(this.state.count, 'Class');
        }
        if (!this.state.isVisible) {
            console.log(
                "КЛАССОВЫЙ компонент будет размонтирован С ЗАВИСИМОСТЬЮ"
            );
        } // ВЫЗЫВАЕТСЯ
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0;
    }
}
