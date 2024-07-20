import { useForm } from "react-hook-form";
import { Modal } from "./modal";
import { useState } from "react";

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(null);

    const onSubmit = (data) => {
        setFormData(data);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const password = watch("password", "");

    const validateAge = (dateOfBirth) => {
        const today = new Date();
        const dob = new Date(dateOfBirth);
        const age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        const dayDifference = today.getDate() - dob.getDate();

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && dayDifference < 0)
        ) {
            return age - 1;
        }

        return age;
    };

    return (
        <>
            {showModal && (
                <Modal
                    formData={formData}
                    handleCloseModal={handleCloseModal}
                />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
                <div className="input-pole">
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", {
                            required: "Обязательное поле name",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов",
                            },
                            maxLength: {
                                value: 24,
                                message: "Максимум 24 символов",
                            },
                        })}
                    />
                </div>
                {<p className="error">{errors.name?.message}</p>}
                <div className="input-pole">
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Обязательное поле email",
                            pattern: {
                                value: /^\w+(\.\w+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/,
                                message: "Должен быть email адресс",
                            },
                            minLength: {
                                value: 10,
                                message: "Минимум 10 символов",
                            },
                            maxLength: {
                                value: 40,
                                message: "Максимум 40 символов",
                            },
                        })}
                    />
                </div>
                <p className="error">{errors.email?.message}</p>
                <div className="input-pole">
                    <label htmlFor="password">Password: </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^(?=.*[A-Z])[A-Za-z\d@$!*?&]+$/,
                                message:
                                    "Пароль должен содержать минимум одну заглавную букву",
                            },
                            minLength: {
                                value: 6,
                                message: "Длина должна быть больше 6",
                            },
                            maxLength: {
                                value: 24,
                                message: "Длина должна быть не больше 24",
                            },
                        })}
                    />
                </div>
                <p className="error">{errors.password?.message}</p>
                <div className="input-pole">
                    <label htmlFor="confirm">Confirm password: </label>
                    <input
                        id="confirm"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Обязательное поле",
                            validate: (value) =>
                                value === password || "Пароли должны совпадать",
                        })}
                    />
                </div>
                <p className="error">{errors.confirmPassword?.message}</p>
                <div className="input-pole">
                    <label>Gender: </label>

                    <label htmlFor="male">
                        Male
                        <input
                            id="male"
                            type="radio"
                            value="male"
                            {...register("gender", {
                                required: "Обязательное поле",
                            })}
                        />
                    </label>

                    <label htmlFor="female">
                        Female
                        <input
                            id="female"
                            type="radio"
                            value="female"
                            {...register("gender", {
                                required: "Обязательное поле",
                            })}
                        />
                    </label>
                </div>
                <p className="error">{errors.gender?.message}</p>

                <div className="input-pole">
                    <label htmlFor="dob">Date of Birth: </label>
                    <input
                        id="dob"
                        type="date"
                        {...register("dob", {
                            required: "Дата рождения обязательна",
                            validate: (value) => {
                                return (
                                    validateAge(value) >= 1 ||
                                    "Вам должно быть больше 1"
                                );
                            },
                        })}
                    />
                </div>
                <p className="error">{errors.dob?.message}</p>

                <div className="input-pole">
                    <label htmlFor="phone">Phone: </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register("tel", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^\+?\d+$/,
                                message: "Неверный формат номера телефона",
                            },
                            minLength: {
                                value: 8,
                                message: "Длина должна быть больше 8",
                            },
                            maxLength: {
                                value: 15,
                                message: "Длина должна быть не больше 15",
                            },
                        })}
                    />
                </div>
                <p className="error">{errors.tel?.message}</p>

                <button type="submit">Зарегистрировать</button>
            </form>
        </>
    );
};
