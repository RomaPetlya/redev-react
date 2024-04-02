import { useState } from "react"

export const SiblingComponent = () => {
    const [text, changeText] = useState('React')

    const handleText = () => {
        changeText(text === 'React' ? 'REDEV' : 'React')
    }
    return (
        <div>
            <p>Current text is {text}</p>
            <button onClick={handleText}>Change the text</button>
        </div>
    )
}