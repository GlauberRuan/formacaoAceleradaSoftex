// Definindo a classe Pessoa
class Pessoa {
    constructor(nome, salario, idade, possuiDiploma) {
      this.nome = nome;
      this.salario = salario;
      this.idade = idade;
      this.possuiDiploma = possuiDiploma;
    }
  }
  
  // Solicitando os dados do usuário através do prompt
  var nome = prompt("Digite o nome do Usuário:");
  var salario = parseFloat(prompt("Digite o salário do Usuário:"));
  var idade = parseInt(prompt("Digite a idade da pessoa:"));
  var possuiDiploma = prompt("O usuário possui diploma? Digite 'sim' ou 'não':");
  
  // Convertendo a resposta do usuário em um valor booleano
 possuiDiploma = (possuiDiploma.toLowerCase() === "sim");
  
  // Criando o objeto de pessoa com os dados inseridos pelo usuário usando a classe Pessoa
  var usuario = new Pessoa(nome, salario, idade, possuiDiploma);
  
  // Exibindo os dados do usuário
  console.log("--- x --- x --- x --- x ---");
  console.log(`O nome do usuário é: ${usuario.nome}`);
  console.log(`O salário de ${usuario.nome} é: ${usuario.salario}`);
  console.log(`A idade de ${usuario.nome} é: ${usuario.idade}`);
  console.log(`${usuario.nome} possui diploma? ${usuario.possuiDiploma}`);
  