export const List = ({ employees }) => {
    return (
        <ul style={{ width: 10 + "%", listStyleType: "none" }}>
            <li>{employees[0]}</li>
            <li>{employees[1]}</li>
            <li>{employees[2]}</li>
        </ul>
    );
};