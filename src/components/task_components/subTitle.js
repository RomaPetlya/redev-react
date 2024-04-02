export const SubTitle = ({ subTitleInfo }) => {
    return (
        <div>
            <h3>{subTitleInfo.subTitleMessage}</h3>
            <p>{subTitleInfo.isAdmin.toString()}</p>
            <p>{subTitleInfo.age.toString()}</p>
        </div>
    );
};