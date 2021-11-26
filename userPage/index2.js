let header = document.createElement('header');
let titulo = document.createElement('h1');
document.body.appendChild(titulo);
titulo.innerText = 'Repositórios';

let Usuario = document.location.search;
Usuario = Usuario.substring(1);

fetch(`https://fake-github2.herokuapp.com/api/search/${Usuario}`)
    .then(function(resultado) {
        resultado.json().then(function(data) {

            console.log(data);

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });

fetch(`https://fake-github2.herokuapp.com/api/search/${Usuario}/repos`)
    .then(function(resultado) {
        resultado.json().then(function(repos) {
            console.log(repos);

        });
    }).catch(function(error) {
        console.log("Error: ", error);
    });