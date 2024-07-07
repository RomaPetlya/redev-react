import React from "react";

export const List = ({list, handleClick, clickedItems}) => {

    return (
        <>
            <ul className="tasks-list">
                {list.map(item => (
                    <li className="list-item" key={item.id}>
                        {clickedItems.includes(item) ? `!!! ${item.name}` : item.name}
                        <button className="button" onClick={()=>handleClick(item.id)}>Change Name</button>    
                    </li>
                ))}
            </ul>
            
        </>
    );
};
