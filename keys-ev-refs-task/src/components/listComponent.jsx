import React from "react";

export const List = ({list, handleClick, clickedItems}) => {

    return (
        <div>
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        {clickedItems.includes(item) ? `!!! ${item.name}` : item.name}
                        <button onClick={()=>handleClick(item.id)}>Change Name</button>    
                    </li>
                ))}
            </ul>
            
        </div>
    );
};
