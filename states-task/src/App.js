import { Color } from "./components/color";
import Counter from "./components/counter";
import { HiddenText } from "./components/hiddenText";
import { Input } from "./components/input";
import { ParentComponent } from "./components/practice/parentComp";

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
