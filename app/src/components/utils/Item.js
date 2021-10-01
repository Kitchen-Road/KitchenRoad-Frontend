import React from "react";
import Button from "./button";

const Item = ({ref, text, type}) => {
    return (
        type === "btn" ? 
        (
            <Button text={text} />
        )
        : ( <li ref={ref}>{text}</li>)
    )
}

export default Item;

