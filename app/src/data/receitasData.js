const getReceitasJson = async() =>{
    const url = 'http://x:8000/receitas/'
    const header = new Headers({    
        "Content-Type": "application/json",
        "Authorization": "Token " + "x",
    });
    const response = await fetch(url, {
        method: "GET", 
        headers: header
    });
    const json = await response.json();
    return json;
}

export default{
    getReceitas: async () => {
        return[{
            receitasList: await getReceitasJson() 
        }]
    }
}