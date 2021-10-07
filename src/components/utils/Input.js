import React from "react";

const Input = ({input, placeholder = '', type, activeLabel }) => {
    return (
        <>
        { (activeLabel) ?
        (
            <label for={input}>
                {input}
            </label>
        )
        : (null)
        }    
            <input type={type} name={type}/>
        </>
    )
}

export default Input;

