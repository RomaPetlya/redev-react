import React from "react";

const Title = ({ titleMessage, getNumber }) => {
    return (
        <h1 className="title">
            {titleMessage} {getNumber().toFixed(2)}
        </h1>
    );
};

const SubTitle = ({ subTitleInfo }) => {
    return (
        <div>
            <h3>{subTitleInfo.subTitleMessage}</h3>
            <p>{subTitleInfo.isAdmin.toString()}</p>
            <p>{subTitleInfo.age.toString()}</p>
        </div>
    );
};
const Header = () => {
    const obj = {
        titleMessage: "I'm a title",
        subTitleMessage: "react component h3",
        isAdmin: true,
        age: 2,
    };
    return (
        <div>
            <Title titleMessage={obj.titleMessage} getNumber={Math.random} />
            <SubTitle subTitleInfo={obj} />
        </div>
    );
};

const Main = () => {
    const list = ["Anna", "Roman", "George"];
    return <List employees={list} />;
};

const List = ({ employees }) => {
    return (
        <ul style={{ width: 10 + "%", listStyleType: "none" }}>
            <li>{employees[0]}</li>
            <li>{employees[1]}</li>
            <li>{employees[2]}</li>
        </ul>
    );
};

export { Header, Main };
