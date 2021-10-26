import React from "react";

function Conquista(props) {
    
    return props.trigger ? (
      <div className="conquista">
        <div className="conquista-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X
          </button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
  }
  
  export default Conquista;