import React from "react";

export class DestroyButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = 'УНИЧТОЖИТЬ'
    }

    componentWillUnmount() {
        console.log("СЕЙЧАС ПРОПАДЕТ");
    }
    
    render() {
        return (
        <button>
            {this.state}
        </button>
        )
    }
}