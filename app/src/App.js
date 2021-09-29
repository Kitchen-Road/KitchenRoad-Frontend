import React from "react";

import Button from "./components/utils/button";

import './assets/css/global.scss';

import Form from "./components/utils/Form.js";

const App = () => {

  const inputForm =[ 
    
      {
        input: 'Derivada'
      },
      {
        input : "ALOHA"
      }
  ]
  
  return(
    <div>
      <Form inputs={inputForm}/>
      <Button 
        text="aloha" 
        action={() => console.log("DERIVADA")}
      />
    </div>
  )
}

export default App;

