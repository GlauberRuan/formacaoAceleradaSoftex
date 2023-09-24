import { TIPOTRANSACAO } from "./tipoTransacao.js";
import { Transacao } from "./transacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString(); // para que toda vez que a pessoa criar uma nova conta, ele insere no no sistema. Não precisa colocar como parâmetro.
        this.saldo = saldo;
        this.status = true; // pra saber se a conta ta ativa
        this.transacoes = []; 
    }

    // depositar na conta
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans); // inserir no final da fila
    }

    // sacar da conta
    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
        this.transacoes.push(trans); // inserir no final da fila
        } else {
            // lança o erro
            console.log(`Error: saldo insuficiente ${valor} maior que o saldo ${this.sado}.`);
        }
    }
}
    // transferir da conta

    // realizar pagamento da conta

    // mostrar saldo da conta

    // mostrar extrato da conta

    // toString da conta;