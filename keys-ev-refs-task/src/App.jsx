import { List } from "./components/listComponent";
import "./App.css";
import { useState, useRef } from "react";

const list = [
    { name: "first", id: 1 },
    { name: "second", id: 2 },
    { name: "third", id: 3 },
];

function App() {
    const [itemList, setItemList] = useState(list);
    const [clickedItems, setClickedItems] = useState([]);
    const [text, setText] = useState("");
    const textInput = useRef(null);

    const addItemList = () => {
        const item = { name: text, id: itemList.length + 1 };
        setItemList([...itemList, item]);
    };

    const addClickedItem = (id) => {
        const clickedItem = itemList.find((item) => item.id === id);
        setClickedItems([...clickedItems, clickedItem]);
    };
    const removeClickedItem = (id) => {
        const listWithoutClickedItem = clickedItems.filter(
            (item) => item.id !== id
        );
        setClickedItems(listWithoutClickedItem);
    };

    const handleClick = (id) => {
        const item = clickedItems.find((item) => item.id === id);
        if (item) {
            removeClickedItem(id);
        } else {
            addClickedItem(id);
        }
    };

    const valid = () => {
        textInput.current.focus();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if (text.trim()) {
                addItemList();
                setText("");
            }
        }
    };

    return (
        <div>
            <input
                placeholder="Type new task"
                ref={textInput}
                value={text}
                type="text"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={() => valid()}>Click to focus</button>
            <List
                list={itemList}
                handleClick={handleClick}
                clickedItems={clickedItems}
            />
        </div>
    );
}

export default App;
