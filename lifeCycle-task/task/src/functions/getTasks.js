import axios from "axios";
import { token } from "./login.js";

let baseURL = "https://todo-redev.herokuapp.com/api/todos";
const headers = {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
};
const config = { headers };

export const getTasks = async (filter) => {
    try {
        let url = baseURL;
        if (filter === "completed") {
            console.log(`Выполненные`);
            url = `${url}?isCompleted=true`;
        }
        if (filter === "incompleted") {
            console.log(`Не выполненные`);
            url = `${url}?isCompleted=false`
        }
        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
