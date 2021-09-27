import React from "react";

import Button from "./components/utils/button";

const App = () => {
  return(
    <div>
      <Button 
        text="aloha" 
        action={() => console.log("DERIVADA")}
      />
    </div>
  )
}

export default App;

