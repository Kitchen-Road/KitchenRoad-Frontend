import React from "react";

const Item = ({ref, text}) => {
    return (

        <li ref={ref}>{text}</li>
    )
}

export default Item;

