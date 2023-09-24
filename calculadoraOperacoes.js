var repetir = true;

while (repetir) {
  // Solicitar ao usuário que insira dois valores e o operador
  var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  var operador = prompt("Digite o operador (+, -, *, /):");
  var valor2 = parseFloat(prompt("Digite o segundo valor:"));

  // Inicializar a variável de resultado
  var resultado;

  // Realizar a operação com base no operador inserido
  switch (operador) {
    case '+':
      resultado = valor1 + valor2;
      break;
    case '-':
      resultado = valor1 - valor2;
      break;
    case '*':
      resultado = valor1 * valor2;
      break;
    case '/':
      if (valor2 !== 0) {
        resultado = Math.floor(valor1 / valor2); // Divisão inteira
        var resto = valor1 % valor2; // Resto da divisão
      } else {
        resultado = "Erro: Divisão por zero!";
      }
      break;
    default:
      resultado = "Operador inválido!";
  }

  // Exibir o resultado
  if (typeof resultado === 'number') {
    if (operador === '/') {
      console.log(`Resultado: ${resultado.toFixed(2)}, Resto: ${resto.toFixed(2)}`);
    } else {
      console.log(`Resultado: ${resultado.toFixed(2)}`);
    }
  } else {
    console.log(resultado.toFixed(2));
  }

  // Perguntar ao usuário se deseja repetir
  var resposta = prompt("Deseja fazer outra operação? (Digite 's' para sim ou 'n' para não)");
  if (resposta.toLowerCase() !== 's') {
    repetir = false;
  }
}
