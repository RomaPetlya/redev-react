export const SubTitle = ({subTitleInfo: { subTitleMessage, isAdmin, age }}) => {
    return (
        <div>
            <h3>{subTitleMessage}</h3>
            <p>{isAdmin.toString()}</p>
            <p>{age}</p>
        </div>
    );
};