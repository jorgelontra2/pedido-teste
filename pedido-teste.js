const VALOR_CAMISA  = 50.00;
var total_registros = 1;
var pedidos         = [];

function add(){
    let aluno       = document.querySelector('#aluno').value;
    let tamanho     = document.querySelector('#tamanho').value;
    let turma       = document.querySelector('#turma').value;

    incTable(aluno,tamanho,turma);
}

function incTable(aluno, tamanho, turma) {
    let table = document.querySelector('#table-lista-pedidos tbody');

    let tr          = document.createElement('tr');
    let th_id       = document.createElement('th');
    let td_aluno    = document.createElement('td');
    let td_tamanho  = document.createElement('td');
    let td_turma    = document.createElement('td');
    let td_valor    = document.createElement('td');
    let td_excluir  = document.createElement('td');

    th_id.scope             = 'row';
    th_id.innerText         = total_registros;
    td_aluno.innerText      = aluno;
    td_tamanho.innerText    = tamanho;
    td_turma.innerText      = turma;
    td_valor.innerText      = getValorBRL(VALOR_CAMISA);

    let button_excluir = document.createElement('button');
    button_excluir.className = 'btn btn-danger btn-sm';
    button_excluir.innerHTML = '<i class="fas fa-trash-can"></i>';
    button_excluir.onclick = function() {
        tr.remove();
        removeDB(total_registros);
    };
    td_excluir.appendChild(button_excluir);

    addDB({
        id: total_registros,
        aluno: aluno,
        tamanho: tamanho,
        turma: turma
    });

    tr.appendChild(th_id);
    tr.appendChild(td_aluno);
    tr.appendChild(td_tamanho);
    tr.appendChild(td_turma);
    tr.appendChild(td_valor);
    tr.appendChild(td_excluir);

    table.appendChild(tr);
    total_registros++;
}

function addDB(item){
    pedidos.push(item);
    calcTotal();
}
function calcTotal(){
    let total_pedido = pedidos.length * VALOR_CAMISA;
    document.querySelector('#total-pedido').innerText = getValorBRL(total_pedido);
}

function getValorBRL(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}