import React from "react";

const Button = ({action, text}) => {
    return (
        <div>
            <button 
                onClick={action} 
                className=""
            >
                { text }
            </button>
        </div>
    )
}

export default Button;