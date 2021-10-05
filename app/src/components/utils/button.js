import React from "react";

const Button = ({action, text, style}) => {
    return (    
            <button 
                onClick={action} 
                className={"btn-" + style}
            >
                { text }
            </button>
    )
}

export default Button;