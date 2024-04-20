import axios from "axios";

const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
};
const config = { headers };
const url = "https://todo-redev.herokuapp.com/api/auth/login";
const userForLogin = {
    email: `Petlya@mail.ru`,
    password: "Qw12345!",
};

const login = async (url, userForLogin, config) => {
    try {
        const response = await axios.post(url, userForLogin, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const { token } = await login(url, userForLogin, config);
