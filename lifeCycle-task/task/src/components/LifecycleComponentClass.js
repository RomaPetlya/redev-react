import React from "react";
import { getTasks } from "../functions/getTasks";

export class LifecycleComponentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filter: "all",
            isVisible: true,
            count: 0
        };
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(state) {
        this.setState({
            filter: state,
        });
    }
    hadleVisibility() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }
    increment () {
        this.setState(prevState => ({count: prevState.count + 1}))
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
        const filter = {
            true: 'Все выполненные задачи',
            false: 'Все не выполненные задачи',
            all: 'Все задачи'
        }

        if (!this.state.isVisible) {
            return null;
        }

        return (
            <div>
                <button onClick={() => this.setFilter(true)}>
                    Get completed tasks
                </button>
                <button onClick={() => this.setFilter(false)}>
                    Get uncompleted tasks
                </button>
                <button onClick={() => this.setFilter("all")}>
                    Get all tasks
                </button>
                <p>{filter[this.state.filter]}</p>
                <ol>
                    {tasks.map((item) => (
                        <li key={item.id}>
                            {item.title} and {item.isCompleted.toString()}
                        </li>
                    ))}
                </ol>
                <button onClick={() => this.hadleVisibility()}>УНИЧТОЖИТЬ</button>
                <div>
                    <p>{this.state.count}</p>
                    <button onClick={() => this.increment()}>Увеличить</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.fetchTasks();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.filter !== prevState.filter) {
            this.fetchTasks();
        }
        if (this.state.count !== prevState.count) {
             console.log(this.state.count);
        }
    }
    componentWillUnmount() {
        console.log("СЕЙЧАС ПРОПАДЕТ");
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count % 2 === 0;
      }
}

