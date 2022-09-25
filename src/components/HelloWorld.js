import React from "react";



const HelloWorld = props => {

    const {text = "Hello World"} = props;

    console.log("Running HelloWorld component with text: ", text);

    return (
        <span>{text}</span>
    )
}

export default HelloWorld;