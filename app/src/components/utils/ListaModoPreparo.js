import React from "react";

const ListaModoPreparo = (props) => {
    const value = props.value.split(/\r?\n/);

    const listItems = value.map((value) =>
       <li>▪ {value}</li>
    )

    return(
        <div className="topic">
        <h3 className="title-2-red">{props.title}</h3>
        <ul>{listItems} </ul>
        </div>
    )
}

export default ListaModoPreparo;