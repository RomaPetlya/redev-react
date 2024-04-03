export const List = ({ employees }) => {
    return (
        <ul style={{ width: 10 + "%", listStyleType: "none" }}>
            {employees.map((item, index )=> <li key={index}>{item}</li>)}
        </ul>
    );
};