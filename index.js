import { Endereco } from './model/endereco.js';
import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';

let endAg = new Endereco('PE', "Recife", "Cais do Apolo", "Rua dos Amores", 1000, "450", "54325-120");
let agSoftex = new Agencia("Softex", 1234, "81996341796","agsoftex@banco.com", endAg);
let endEgito = new Endereco('PE', "Jaboatão dos Guararapes", "Prazeres", "Rua Isaias Barbosa", 1234, "374", "50097-090");
let cliEgito = new Cliente("José Egito", "000.012.123-12", new Date("1985-10-10").toLocaleDateString(), 5858585, "egito@softex.com", "8199999999", endEgito);
let contaEgito = new Conta(cliEgito, 4321, agSoftex, 1250.00);

contaEgito.depositar(200);
contaEgito.sacar(500);

console.log(contaEgito);