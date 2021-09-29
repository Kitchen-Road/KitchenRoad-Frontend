import React from "react";

const Input = ({input, placeholder = '', type  }) => {
    return (
        <>
            <label for={input}>
                {input}
            </label>
            <input type={type} name={type}/>
        </>
    )
}

export default Input;

