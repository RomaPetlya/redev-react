export const Toggler = ({ themeToggler }) => {
    return (
        <div className="toggler">
            <h5>Dark/Light mode</h5>
            <p>Click here</p>
            <button className="button" onClick={themeToggler}>Switch Theme</button>
        </div>
    );
};
