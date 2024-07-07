import "./index.css";
import { GlobalStyles } from "./context/globalStyles";
import { lightTheme, darkTheme } from "./context/Themes";
import { ThemeProvider } from 'styled-components';
import { InputField } from "./components/inputField";
import { Toggler } from "./components/toggler";
import { useState } from "react";

export function App() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <Toggler themeToggler={themeToggler} />
                <InputField />
            </ThemeProvider>
        </>
    );
}

export default App;
