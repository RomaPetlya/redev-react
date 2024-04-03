export const Title = ({ titleMessage, getNumber }) => {
    return (
        <h1 className="title">
            {titleMessage} {getNumber().toFixed(2)}
        </h1>
    );
};