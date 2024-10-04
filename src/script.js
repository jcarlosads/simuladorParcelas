function parcelasSimples() {
  let total = parseFloat(prompt("Digite o valor total do empréstimo: "));
  let quantidadeParcelas = parseInt(
    prompt("Digite a quantidade de parcelas: ")
  );

  let valorParcela = total / quantidadeParcelas;

  console.log("Parcelas simples: ");
  for (let i = 1; i <= quantidadeParcelas; i++) {
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
  }
}

function parcelasDecrescentes() {
  let total = parseFloat(prompt("Digite o valor total do empréstimo: "));
  let quantidadeParcelas = parseInt(
    prompt("Digite a quantidade de parcelas: ")
  );

  let saldoDevedor = total;

  console.log("Parcelas decrescentes: ");
  for (let i = 1; i <= quantidadeParcelas; i++) {
    let valorParcela = saldoDevedor / (quantidadeParcelas - i + 1);
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
    saldoDevedor -= valorParcela;
  }
}

function somaEMedia() {
  let soma = 0;
  let quantidade = 0;
  let valor;

  while (true) {
    valor = prompt("Insira um valor (ou digite 'sair' para terminar):");

    if (valor.toLowerCase() === "sair") {
      break;
    }

    valor = parseFloat(valor);
    soma += valor;
    quantidade++;

    console.log(`Soma até agora: R$ ${soma.toFixed(2)}`);
    console.log(`Média até agora: R$ ${(soma / quantidade).toFixed(2)}`);
  }
}

parcelasSimples();
parcelasDecrescentes();
somaEMedia();
