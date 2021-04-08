// //Ele precisa que neste sistema o usuário consiga escolher:
// O tamanho da pizza ()
// Tipo de borda ()
// Sabores (Apenas 2 sabores por pizza) (Apenas uma pizza) ()
// Bebidas (Apenas uma) ()
// Tipo de entrega ()
// Dados para entrega: Nome, Celular, Rua, Número, Complemento, Bairro, Ponto de referência ()
// Confirmar pedido ()
// Forma de Pagamento (somente uma) ()
// Mostar o valor do pedido na tela no final do pedido ()
// Informar numero do pedido randomico ()
// mandar uma mensagem ao usuário desta forma: “Agradecemos sua preferência senhor(a) Fulano de tal.” ()
// document.write(`"Agradecemos sua preferência senhor(a) "${nome}"`)


function pizzaria() {
  let tamanho = escolherTamanho();
  let borda = escolherBorda();
  let sabor1 = escolherPizzaUm();
  let sabor2 = escolherPizzaDois();
  let bebida = escolherBebida();
  let entrega = escolherEntrega();
  let pagamento = prompt(`Escolha forma de pagamento`);

  let precoFinal = 0;

  let tamanhoPizza = [
    { tamanho: 'pequena', preco: 25.00 },
    { tamanho: 'media', preco: 30.00 },
    { tamanho: 'gigante', preco: 40.00 },
    { tamanho: 'familia', preco: 45.00 }
  ];

  let tipoDeBorda = [
    { tipo: 'gorgonzola', preco: 10.00 },
    { tipo: 'provolone', preco: 8.00 },
    { tipo: 'catupiry', preco: 5.00 },
    { tipo: 'cheddar', preco: 5.00 },
    { tipo: 'sem borda', preco: 0.00 }
  ];

  // let saborPizza = ['calabresa', '4 queijos', 'frango e catupiry', 'portuguesa', 'camarao', 'carne seca', 'lombo canadense', 'x fritas'];

  let bebidas = [
    { sabor: 'coca cola', preco: 12.00 },
    { sabor: 'fanta', preco: 10.00 },
    { sabor: 'guarana', preco: 10.00 },
    { sabor: 'h2o', preco: 8.00 },
    { sabor: 'del valle', preco: 7.00 }
  ];

  let tipoDeEntrega = [
    { tipo: 'balcao', preco: 0.00 },
    { tipo: 'delivery', preco: 5.00 }
  ];

  // let formaDePagamento = ['debito', 'credito', 'pix', 'picPay', 'dinheiro'];

  for (const contTamanhoPizza of tamanhoPizza) {
    if (tamanho == contTamanhoPizza.tamanho) {
      precoFinal += contTamanhoPizza.preco;
    }
  }

  for (const contTipoDeBorda of tipoDeBorda) {
    if (borda == contTipoDeBorda.tipo) {
      precoFinal += contTipoDeBorda.preco;
    }
  }

  for (const contTipoBebida of bebidas) {
    if (bebida == contTipoBebida.sabor) {
      precoFinal += contTipoBebida.preco;
    }
  }

  for (const contTipoDeEntrega of tipoDeEntrega) {
    if (entrega == contTipoDeEntrega.tipo) {
      precoFinal += contTipoDeEntrega.preco;
    }
  }

  document.write(`<p>Preço final: R$ ${precoFinal.toFixed(2).replace(".", ",")}</p>`);
}
function escolherTamanho() {
  let tipo = document.getElementsByName("tamanho");
  let tamanho;
  
  if (tipo[0].checked) {
    tamanho = tipo[0].checked;
  } else if (tipo[1].checked) {
    tamanho = tipo[1].checked;
  } else if (tipo[2].checked) {
    tamanho = tipo[2].checked;
  } else {
    tamanho = tipo[3].checked;
  }

 /*  switch (tipo) {
    case tipo[0].checked:
      tamanho = tipo[0].checked;
      break;
    case tipo[1].checked:
      tamanho = tipo[1].checked;
      break;
    case tipo[2].checked:
      tamanho = tipo[2].checked;
      break;
    case tipo[3].checked:
      tamanho = tipo[3].checked;
      break;
    default:
      tamanho = undefined;
      break;
  } */

  return tamanho;
}

function escolherBorda() {
  let tipo = document.getElementsByName("borda");
  let borda;
  if (tipo[0].checked) {
    borda = tipo[0].checked;
  } else if (tipo[1].checked) {
    borda = tipo[1].checked;
  } else if (tipo[2].checked) {
    borda = tipo[2].checked;
  } else if (tipo[3].checked) {
    borda = tipo[3].checked;
  } else {
    borda = tipo[4].checked;
  } 

  /*  switch (tipo) {
    case tipo[0].checked:
      borda = tipo[0].checked;
      break;
    case tipo[1].checked:
      borda = tipo[1].checked;
      break;
    case tipo[2].checked:
      borda = tipo[2].checked;
      break;
    case tipo[3].checked:
      borda = tipo[3].checked;
      break;
    case tipo[4].checked:
      borda = tipo[4].checked;
      break;
    default:
      borda = undefined;
      break;
  } */

  return borda;
}

function escolherPizzaUm() {
  let tipo = document.getElementsByName("pizza");
  let pizza;
  if (tipo[0].checked) {
    pizza = tipo[0].checked;
  } else if (tipo[1].checked) {
    pizza = tipo[1].checked;
  } else if (tipo[2].checked) {
    pizza = tipo[2].checked;
  } else if (tipo[3].checked) {
    pizza = tipo[3].checked;
  } else if (tipo[4].checked) {
    pizza = tipo[4].checked;
  } else if (tipo[5].checked) {
    pizza = tipo[5].checked;
  } else if (tipo[6].checked) {
    pizza = tipo[6].checked;
  } else {
    pizza = tipo[7].checked;
  } 

  /*  switch (tipo) {
    case tipo[0].checked:
      pizza = tipo[0].checked;
      break;
    case tipo[1].checked:
      pizza = tipo[1].checked;
      break;
    case tipo[2].checked:
      pizza = tipo[2].checked;
      break;
    case tipo[3].checked:
      pizza = tipo[3].checked;
      break;
    case tipo[4].checked:
      pizza = tipo[4].checked;
      break;
    case tipo[5].checked:
      pizza = tipo[5].checked;
      break;
    case tipo[6].checked:
      pizza = tipo[6].checked;
      break;
    case tipo[7].checked:
      pizza = tipo[7].checked;
      break;
    default:
      pizza = undefined;
      break;
  } */

  return pizza;
}

function escolherPizzaDois() {
  let tipo = document.getElementsByName("pizza");
  let pizza;
  if (tipo[0].checked) {
    pizza = tipo[0].checked;
  } else if (tipo[1].checked) {
    pizza = tipo[1].checked;
  } else if (tipo[2].checked) {
    pizza = tipo[2].checked;
  } else if (tipo[3].checked) {
    pizza = tipo[3].checked;
  } else if (tipo[4].checked) {
    pizza = tipo[4].checked;
  } else if (tipo[5].checked) {
    pizza = tipo[5].checked;
  } else if (tipo[6].checked) {
    pizza = tipo[6].checked;
  } else {
    pizza = tipo[7].checked;
  } 

  /*  switch (tipo) {
    case tipo[0].checked:
      pizza = tipo[0].checked;
      break;
    case tipo[1].checked:
      pizza = tipo[1].checked;
      break;
    case tipo[2].checked:
      pizza = tipo[2].checked;
      break;
    case tipo[3].checked:
      pizza = tipo[3].checked;
      break;
    case tipo[4].checked:
      pizza = tipo[4].checked;
      break;
    case tipo[5].checked:
      pizza = tipo[5].checked;
      break;
    case tipo[6].checked:
      pizza = tipo[6].checked;
      break;
    case tipo[7].checked:
      pizza = tipo[7].checked;
      break;
    default:
      pizza = undefined;
      break;
  } */

  return pizza;
}

function escolherBebida() {
  let tipo = document.getElementsByName("bebida");
  let bebida;
  if (tipo[0].checked) {
    bebida = tipo[0].checked;
  } else if (tipo[1].checked) {
    bebida = tipo[1].checked;
  } else if (tipo[2].checked) {
    bebida = tipo[2].checked;
  } else {
    bebida = tipo[3].checked;
  } 

  /*  switch (tipo) {
    case tipo[0].checked:
      bebida = tipo[0].checked;
      break;
    case tipo[1].checked:
      bebida = tipo[1].checked;
      break;
    case tipo[2].checked:
      bebida = tipo[2].checked;
      break;
    case tipo[3].checked:
      bebida = tipo[3].checked;
      break;
    default:
      bebida = undefined;
      break;
  } */

  return bebida;
}

function escolherEntrega() {
  let tipo = document.getElementsByName("entrega");
  let entrega;
  if (tipo[0].checked) {
    entrega = tipo[0].checked;
  } else {
    entrega = tipo[1].checked;
  } 

  /*  switch (tipo) {
    case tipo[0].checked:
      entrega = tipo[0].checked;
      break;
    case tipo[1].checked:
      entrega = tipo[1].checked;
      break;
    default:
      entrega = undefined;
      break;
  } */

  return entrega;
}