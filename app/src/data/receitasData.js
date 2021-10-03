const getReceitasJson = async() =>{
    const url = 'http://localhost:8000/receitas/'
    const header = new Headers({    
        "Content-Type": "application/json",
        "Authorization": "Token " + "694f923bdc9d66a3f8134a4ffbaa00eae13c1c0806435c2473fcbd5386d5facc",
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
            receitas: await getReceitasJson() 
        }]
    }
}