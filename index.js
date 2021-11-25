let header = document.createElement('header');
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
console.log('lista');

function tabela() {
    let main = document.createElement('main');
    const tabelatotal = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaUser = document.createElement('th');
    const colunaBotao = document.createElement('th');

    document.body.appendChild(main);
    main.appendChild(tabelatotal);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaUser);
    linha.appendChild(colunaBotao);
    tabelatotal.appendChild(linha);

    colunaNome.innerText = "Nome";
    colunaUser.innerText = "Usuário";
    colunaBotao.innerText = "Acessar";

    tabelatotal.className = "tabela";
    colunaNome.className = 'nome';
    colunaUser.className = 'usuario';

    lista.forEach(function(element) {
        console.log('element:', element);
        const linhastabela = tabelalista(
            element.Nome,
            element.Usuario);

        tabelatotal.appendChild(linhastabela);



    })
}
tabela();

function tabelalista(nome, usuario) {
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaUser = document.createElement('td');
    let botao = document.createElement('button');


    colunaNome.innerText = nome;
    colunaUser.innerText = usuario;
    botao.innerText = "Acessar";


    linha.appendChild(colunaNome);
    linha.appendChild(colunaUser);
    linha.appendChild(botao);


    botao.addEventListener('click', function(element) {
        location.href = `./userPage/index2.html?${element.Usuario}`;
    })

    return linha;
}