# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Задачи**:

1. **Создание компонентов**: Создай компонент **`RegistrationForm`**, который будет содержать форму регистрации.
2. **Поля Формы**: Внутри **`RegistrationForm`** добавь следующие поля:
    - Имя пользователя (обязательное поле)
    - Электронная почта (обязательное поле, валидация на формат email)
    - Пароль (обязательное поле, минимальная длина 6 символов, хотя бы одна заглавная буква)
    - Подтверждение пароля (обязательное поле, должно совпадать с паролем)
    - Дата рождения (обязательное поле)
    - Пол (обязательное поле)
    - Номер телефона (обязательное поле)
3. **Валидация**: Добавь валидацию к каждому полю. Выводи сообщения об ошибках под каждым полем в случае невалидных данных.
4. **Обработка Отправки**: Добавь кнопку **"Зарегистрироваться"**. При нажатии на нее, данные формы должны быть выведены в модальное окно в JSON. Выводи информацию о регистрации (например, **"Успешно зарегистрировано"**) после успешной отправки формы.
