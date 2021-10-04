import API from './constants.js'

const Api =  {

    fetch :(methodo, token, endPoint ) => {
        console.log(methodo, token, endPoint)

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });
    
        xhr.open("GET", "https://api.github.com/repos/fga-eps-mds/PullBot/commits");
    
        xhr.send();
    },
    cadastrar:  () => {
        this.fetch(
            'POST', 
            API.TOKEN, 
            API.HTTP +
            API.PORT + 
            API.SINGUP
        )
    },

    logar: () => {
        return this.fetch(
            'POST', 
            API.TOKEN, 
            API.HTTP +
            API.PORT + 
            API.LOGIN
        )
    },

    VerReceitas: () => {
        return this.fetch(
            'POST', 
            API.TOKEN, 
            API.HTTP +
            API.PORT + 
            API.RECEITAS
        )
    },

    pesquisarReceitas: () => {
        return this.fetch(
            'POST', 
            API.TOKEN, 
            API.HTTP +
            API.PORT + 
            API.SEARCH
        )    
    }
}

export default Api;