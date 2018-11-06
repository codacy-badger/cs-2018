var scanf = require("scanf");
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna o valor do fatorial
 */
function fatorial(numero) {
  console.log("Digite o numero desejado: ");
  var numero = scanf("%d");
  if (numero >= 1) {
    i = 2;
    f = 1;
    while (i <= numero) {
      f = f * i;
      i = i + 1;
    }
    return f;
  }
}

exports.fatorial = fatorial;
