


const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="image/img/aprovado.png" alt="emoji feliz"/>'
const imgReprovado = '<img src="image/img/reprovado.png" alt="emoji triste"/>'
const atividades = [];
const notas = [];
const spanAprovado ='<span class="resultado aprovado ">Aprovado</span>';
const spanReprovado ='<span class="resultado reprovado ">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));
/*A variável novaLinha deve ser posicionada antes do 'addEventListener' , para não ser resetada!!!*/
let novaLinha = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});
/*organizando as funções para otimizar o código*/
function adicionarLinha() {
    /* verificando dados duplicados*/
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} Já foi inserida`);
    } else{
/*criando Arrays/ coletando dados com o comando 'push' */
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    /*usando a crase para criar elementos html n js com o uso dp '${}'*/
    /*usando o tenário '? :' como abreviação do if e else!!!*/
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    novaLinha += linha;
    /*resetando os inputs pos preenchimento dos campos*/
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = novaLinha;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
