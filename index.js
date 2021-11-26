let header = document.createElement('header');
let main = document.querySelector('body');
let titulo = document.createElement('h1');
document.body.appendChild(header);
header.appendChild(titulo);
titulo.innerText = 'Tabela';


let lista = [
    { Nome: 'Bruno Henrique Verbinnen de Carvalho', Usuario: 'brunohvc' },
    { Nome: 'Vytor Augusto Rosa', Usuario: 'K43RU' },
    { Nome: 'João Henrique Meireles da Silva', Usuario: 'nihilth' },
    { Nome: 'Otavio Augusto dos Santos', Usuario: 'SantOtavio' },
    { Nome: 'Camilly de Souza Pessotti', Usuario: 'camillyPessotti' },
    { Nome: 'Thiago Marins Braga', Usuario: 'ThiagoBrag' },
    { Nome: 'Ester Girelli', Usuario: 'Esterzinha12' },
    { Nome: 'Gustavo Rebelatto Zapella', Usuario: 'rebelattogustavo' },
    { Nome: 'Henrique Cole Fernandes', Usuario: 'HenriqueCole' },
    { Nome: 'Kenzo Hideaky Ferreira Sato', Usuario: 'Kenzohfs' },
    { Nome: 'Vinícius Bonatti Benner', Usuario: 'viniciusz1' },
    { Nome: 'Leonardo Heitor Poglia', Usuario: 'leopoglia' },
    { Nome: 'Felipe Mielke Vieira', Usuario: 'FelipeMielkeVieira' },
    { Nome: 'Eduarda Bolgenhagen De Campos', Usuario: 'eduardabolgenhagen' },
    { Nome: 'Matheus Franzener Hohmann', Usuario: 'MatheusFranzener' },
    { Nome: 'Leonardo Giuseppe de Souza Rafaelli', Usuario: 'LeonardoRafaelli' },
    { Nome: 'Diego Planinscheck', Usuario: 'frst157' },
    { Nome: 'Camilly Vitoria da Rocha Goltz', Usuario: 'VitoriaCamilly' },
    { Nome: 'Bruna Alves Mafra', Usuario: 'BMafra' },
    { Nome: 'Otavio Matheus Neves', Usuario: 'otavionvs' },
];

let tabela = document.createElement('div');
tabela.className = "tabela";
main.appendChild(tabela);

lista.forEach(function(element) {
    let linha = document.createElement('div');
    tabela.appendChild(linha);
    linha.className = "linha";

    let colunaNome = document.createElement('div');
    linha.appendChild(colunaNome);
    colunaNome.className = "colunaNome";

    let colunaUsuario = document.createElement('div');
    linha.appendChild(colunaUsuario);
    colunaUsuario.className = "colunaUsuario";

    let botao = document.createElement('button');
    linha.appendChild(botao);
    botao.className = "botao";
    botao.innerText = "Ver dados";

    colunaNome.innerText = element.Nome;
    colunaUsuario.innerText = element.Usuario;

    botao.onclick = function() {
        location.href = `./userPage/index2.html?${element.Usuario}`;
    }

})