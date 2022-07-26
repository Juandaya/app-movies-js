const movies = require("./movies")

const moviesDH = {
    movies,

    listMovies: function(){
        movies.forEach(function(movie, index){
            console.log((index+1) + " " + movie.title)
        })
    },

    searchMovies: function(idOrTitle){
        const peliculaEncontrada = movies.find(function(movie){
            return ((movie.id == idOrTitle) || (movie.title == idOrTitle)) 
        })
        if(peliculaEncontrada){
            return peliculaEncontrada
        }else{
            return null
        }
    },

    searchMoviesByGenre: function(genero){
        const filtradoPorGenero = movies.filter(function(movie){
            return movie.genre.indexOf(genero) >= 0
        })
        if(filtradoPorGenero.length == 0){
            return null 
        }
        else{
            return filtradoPorGenero
        }
          
    },

    listaDePrecios: function(precio){
        const total = []

        movies.forEach(function(movie){
            if (movie.price > 0){
                total.push(movie.price)
            }
        })
        return total
    },

    totalPrice: function(){
        let listaDePrecios = this.listaDePrecios()

        const costoTotal = listaDePrecios.reduce(function(acum, precio){
            return acum + precio
        }, 0)
        return costoTotal
    },

    changeMovieGenre: function(id, generoViejo, nuevoGenero){
        let peliculaEncontrada = this.searchMovies(id)
        let arrayGeneroViejo = peliculaEncontrada.genre // Localizacion del array del genero
        let indice = arrayGeneroViejo.indexOf(generoViejo)
        
        arrayGeneroViejo[indice] = nuevoGenero
        return peliculaEncontrada
        
    }
}

moviesDH.listMovies();
//console.log(moviesDH.searchMovies(04));
//console.log(moviesDH.searchMoviesByGenre("Accion"));
//console.log(moviesDH.totalPrice());
//console.log(moviesDH.changeMovieGenre(02, "Accion", "Terror"))


