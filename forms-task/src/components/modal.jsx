export const Modal = ({ formData, handleCloseModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                    &times;
                </span>
                <h2>Успешно зарегистрировано</h2>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    );
};
