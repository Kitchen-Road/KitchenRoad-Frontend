import React from "react";

import Item from "./Item";

const List = ({listObject}) => {
    return (

        <ul className="nav-list">
            { listObject.map(({...props}) => <Item {...props} />)}
        </ul>
    )
}

export default List;

