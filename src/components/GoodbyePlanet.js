import React from "react";



const GoodbyePlanet = props => {

    const {text = "GoodbyePlanet"} = props;

    console.log("Running GoodbyePlanet component with text:", text);

    return (
        <span>{text}</span>
    )
}

export default GoodbyePlanet;
