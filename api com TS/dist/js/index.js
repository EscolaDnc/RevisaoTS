"use strict";
/*TIPOS DE DADOS*/
let nome = "João";
let idade = 25;
let isAdmin = true;
//console.log(`Nome: ${nome}, Idade: ${idade}, Admin: ${isAdmin}`);
// tipos de união
let anos;
anos = 25; // válido
anos = "vinte e cinco"; // válido
//anos = true; // inválido, pois boolean não está na união; foi comentado pois da com inválido;
//console.log(anos);
// tipos de array
let numeros = [1, 2, 3, 4, 5];
let nomes = ["João", "Maria", "Carlos"];
console.log(nomes[2]);
// tipos de tupla
let pessoa = ["João", 25];
console.log(`Nome: ${pessoa[0]}, Idade: ${pessoa[1]}`);
//tipo any (qualquer tipo é aceitado)
let variavel = "texto";
variavel = 10;
variavel = true;
/*FUNÇÕES*/
function soma(a, b) {
    return a + b;
}
let resultado = soma(12, 3);
console.log(`Resultado: ${resultado}`);
class Aluno {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
let aluno = new Aluno("Maria", 20);
aluno.saudacao();
/*ENUMERAÇÃO*/
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
    DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
    DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
    DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
    DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
})(DiaSemana || (DiaSemana = {}));
let dia = DiaSemana.Sexta;
console.log(`Dia da semana: ${DiaSemana[dia]}`);
