// Definindo a classe/objeto notas
class Notas {
    constructor(nota1, nota2, nota3){
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
}
// Solicitando os dados ao usuário através do prompt
var nota1 = parseFloat(prompt("Digite o valor da nota 1 do aluno: "));
var nota2 = parseFloat(prompt("Digite o valor da nota 2 do aluno: "));
var nota3 = parseFloat(prompt("Digite o valor da nota 3 do aluno: "));

// Fazendo o cálculo da média do aluno com a soma das notas divididas pela quantidade de atributos do objeto Notas
var media = (nota1+nota2+nota3)/Notas.length;

// inserindo o operador ternário
var resultado = media >= 7 ? 'Aprovado' : 'Reprovado'

// Criando um objeto notas com os dados inseridos pelo usuário
var notas = new Notas (nota1, nota2, nota3);

// Exibindo a média do aluno
console.log(`A média do Aluno foi: ${media.toFixed(2)} e ele está ${resultado}`);