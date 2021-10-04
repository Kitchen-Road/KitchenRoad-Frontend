const getReceitasJson = async(filtro) =>{
  var url;
  if(filtro === undefined)
    url = 'http://localhost:8000/receitas/';
  else
    url = 'http://localhost:8000/receitas/?search='+filtro;
    const header = new Headers({    
        "Content-Type": "application/json",
        "Authorization": "Token " + "8e90c0aeb39ec5e929a972c6c743a5fac0c64513c663e9afb8acc6f4dfa502c7",
    });
    const response = await fetch(url, {
        method: "GET", 
        headers: header
    });
    const json = await response.json();
    return json;
}

export default{
    getReceitas: async (filtro) => {
        return[{
            receitas: await getReceitasJson(filtro) 
        }]
    }
}