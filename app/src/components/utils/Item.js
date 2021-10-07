import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";

const Item = ({ref, text, type, link}) => {
    return (
        type === "btn" ? 
        (
            <Button text={text} />
        )
        : ( <Link to={link}><li ref={ref}>{text}</li></Link>)
    )
}

export default Item;

