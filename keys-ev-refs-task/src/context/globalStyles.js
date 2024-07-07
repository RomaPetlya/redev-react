import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
}

.todo {
    background-color: ${({ theme }) => theme.background};
}
    
.button {
    background-color: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.text};
}

.button:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    color: ${({ theme }) => theme.text};
}

.tasks-list {
    background: ${({ theme }) => theme.tasks};
}

.toggler {
   background: ${({ theme }) => theme.background};
}
`;
