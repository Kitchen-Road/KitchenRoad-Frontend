import API from './constants.js'

class Api {

    fetch(methodo, token, endPoint ) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });
    
        xhr.open("GET", "http://127.0.0.1:8000/categorias/");
        xhr.setRequestHeader("Authorization", "Basic IDo=");
    
        xhr.send();
    }


    cadastrar () {
        this.fetch(
            'POST', 
            TOKEN, 
            API.HTTP +
            API.PORT + 
            API.SINGUP
        )
    }

    logar () {
        return this.fetch(
            'POST', 
            TOKEN, 
            API.HTTP +
            API.PORT + 
            API.LOGIN
        )
    }

    VerReceitas () {
        return this.fetch(
            'POST', 
            TOKEN, 
            API.HTTP +
            API.PORT + 
            API.RECEITAS
        )
    }

    pesquisarReceitas () {
        return this.fetch(
            'POST', 
            TOKEN, 
            API.HTTP +
            API.PORT + 
            API.SEARCH
        )    
    }
}