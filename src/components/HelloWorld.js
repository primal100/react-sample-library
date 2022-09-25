import React from "react";



const HelloWorld = props => {

    const {text = "Hello World"} = props;

    console.log("TEXT", text);

    return (
        <span>{text}</span>
    )
}

export default HelloWorld;