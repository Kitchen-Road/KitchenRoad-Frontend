import React, { useState, useEffect } from 'react';
import GetReceitas from "../../data/receitasData";

const Receitas = () => {
    const [receitaList, setReceitasList] = useState([]);
    useEffect(() => {
        const loadReceitas = async ()=>{
            let list = await GetReceitas.getReceitas();
            setReceitasList(list);
            console.log(list);
        }
        loadReceitas();
    }, []);

    return (
        <div >
            <div className="title-1">Receitas</div>

        </div>
    )
}

export default Receitas;