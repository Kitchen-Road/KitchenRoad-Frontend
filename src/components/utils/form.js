import React from 'react';

import Input from './Input';

const Form = ({onSubmit, inputs}) => {
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                {inputs.map((input) => <><Input input={input.input} key={input.input} /> <br/> </> )}
            </form>
        </div>
    )


}

export default Form;

