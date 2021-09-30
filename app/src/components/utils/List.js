import React from "react";

import Item from "./Item";

const List = ({listObject}) => {
    return (

        <ul className="nav-list">
            { listObject.map(({text, ref}) => <Item text={text} ref={ref} />)}
        </ul>
    )
}

export default List;

