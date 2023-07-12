
/*TIPOS DE DADOS*/
let nome: string = "João";
let idade: number = 25;
let isAdmin: boolean = true;

//console.log(`Nome: ${nome}, Idade: ${idade}, Admin: ${isAdmin}`);

// tipos de união
let anos: number | string;
anos = 25; // válido
anos = "vinte e cinco"; // válido
//anos = true; // inválido, pois boolean não está na união; foi comentado pois da com inválido;
//console.log(anos);


// tipos de array
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: Array<string> = ["João", "Maria", "Carlos"];

console.log(nomes[2])

// tipos de tupla
let pessoa: [string, number] = ["João", 25];
console.log(`Nome: ${pessoa[0]}, Idade: ${pessoa[1]}`);

//tipo any (qualquer tipo é aceitado)
let variavel: any = "texto";
variavel = 10;
variavel = true;


/*FUNÇÕES*/

function soma(a: number, b: number): number {
    return a + b;
  }
  
  let resultado: number = soma(12, 3);
  console.log(`Resultado: ${resultado}`);


  /*CLASSES E INTERFACES*/
  interface Pessoa {
    nome: string;
    idade: number;
  }
  
  class Aluno implements Pessoa {
    constructor(public nome: string, public idade: number) {}
  
    saudacao(): void {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  let aluno: Aluno = new Aluno("Maria", 20);
  aluno.saudacao();
  
  /*ENUMERAÇÃO*/
  enum DiaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
  }
  
  let dia: DiaSemana = DiaSemana.Sexta;
  console.log(`Dia da semana: ${DiaSemana[dia]}`);
  
  