import { Color } from "./components/task_state(inProgress)/color";
import Counter from "./components/task_state(inProgress)/counter";
import { HiddenText } from "./components/task_state(inProgress)/hiddenText";
import { Input } from "./components/task_state(inProgress)/input";
import { ParentComponent } from "./components/task_state(inProgress)/practice/parentComp";

function App() {
    return (
        <div className="container flex space-between">
            <div>
                <Counter />
                <p>=============</p>
                <HiddenText />
                <p>=============</p>
                <Input />
                <p>=============</p>
                <Color />
            </div>
            <ParentComponent />
        </div>
    );
}

export default App;
