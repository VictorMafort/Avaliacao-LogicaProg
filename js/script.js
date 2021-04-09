let tamanhoPizza = [
  { tamanho: 'Pequena 20cm', preco: 25.00 },
  { tamanho: 'Média 25cm', preco: 30.00 },
  { tamanho: 'Gigante 35cm', preco: 40.00 },
  { tamanho: 'Família 40cm', preco: 45.00 }
];

let borda = [
  { tipo: 'Gorgonzola', preco: 10.00 },
  { tipo: 'Provolone', preco: 8.00 },
  { tipo: 'Catupiry', preco: 5.00 },
  { tipo: 'Cheddar', preco: 5.00 },
  { tipo: 'Sem borda', preco: 0.00 }
];

let saborPizza = ['Calabresa', '4 Queijos', 'Frango e Catupiry', 'Portuguesa', 'Camarão', 'Carne Seca', 'Lombo Canadense', 'X-Fritas'];

let bebidas = [
  { sabor: 'Sem bebida', preco: 0.00 },
  { sabor: 'Coca-Cola', preco: 12.00 },
  { sabor: 'Fanta', preco: 10.00 },
  { sabor: 'Guaraná Antarctica', preco: 10.00 },
  { sabor: 'H2OH!', preco: 8.00 },
  { sabor: 'Del valle', preco: 7.00 }
];

let entrega = [
  { tipo: 'Balcão', preco: 0.00 },
  { tipo: 'Delivery', preco: 5.00 }
];

let formaDePagamento = ['Débito', 'Crédito', 'Pix', 'PicPay', 'Dinheiro'];

var pedido = {
  tipoDePizza: undefined,
  tipoDeBorda: undefined,
  tipoSabor1: undefined,
  tipoSabor2: undefined,
  tipoDeBebida: undefined,
  tipoDeEntrega: undefined,
  pagamento: undefined
}
function escolherTamanho() {
  let tipo = document.getElementsByName("tamanho");
  if (tipo[0].checked) {
    pedido.tipoDePizza = tamanhoPizza[0];
  } else if (tipo[1].checked) {
    pedido.tipoDePizza = tamanhoPizza[1];
  } else if (tipo[2].checked) {
    pedido.tipoDePizza = tamanhoPizza[2];
  } else if (tipo[3].checked) {
    pedido.tipoDePizza = tamanhoPizza[3];
  } else {
    pedido.tipoDePizza = 0;
  }

  return pedido.tipoDePizza.preco;
}

function escolherBorda() {
  let tipo = document.getElementsByName("borda");
  if (tipo[0].checked) {
    pedido.tipoDeBorda = borda[0];
  } else if (tipo[1].checked) {
    pedido.tipoDeBorda = borda[1];
  } else if (tipo[2].checked) {
    pedido.tipoDeBorda = borda[2];
  } else if (tipo[3].checked) {
    pedido.tipoDeBorda = borda[3];
  } else if (tipo[4].checked) {
    pedido.tipoDeBorda = borda[4];
  } else {
    pedido.tipoDeBorda = 0;
  }

  return pedido.tipoDeBorda.preco;
}
function escolherPizzaUm() {
  let tipo = document.getElementsByName("pizza1");
  if (tipo[0].checked) {
    pedido.tipoSabor1 = saborPizza[0];
  } else if (tipo[1].checked) {
    pedido.tipoSabor1 = saborPizza[1];
  } else if (tipo[2].checked) {
    pedido.tipoSabor1 = saborPizza[2];
  } else if (tipo[3].checked) {
    pedido.tipoSabor1 = saborPizza[3];
  } else if (tipo[4].checked) {
    pedido.tipoSabor1 = saborPizza[4];
  } else if (tipo[5].checked) {
    pedido.tipoSabor1 = saborPizza[5];
  } else if (tipo[6].checked) {
    pedido.tipoSabor1 = saborPizza[6];
  } else if (tipo[7].checked) {
    pedido.tipoSabor1 = saborPizza[7];
  } else {
    pedido.tipoSabor1 = "-";
  }
  return pedido.tipoSabor1;
}
function escolherPizzaDois() {
  let tipo = document.getElementsByName("pizza2");
  if (tipo[0].checked) {
    pedido.tipoSabor2 = saborPizza[0];
  } else if (tipo[1].checked) {
    pedido.tipoSabor2 = saborPizza[1];
  } else if (tipo[2].checked) {
    pedido.tipoSabor2 = saborPizza[2];
  } else if (tipo[3].checked) {
    pedido.tipoSabor2 = saborPizza[3];
  } else if (tipo[4].checked) {
    pedido.tipoSabor2 = saborPizza[4];
  } else if (tipo[5].checked) {
    pedido.tipoSabor2 = saborPizza[5];
  } else if (tipo[6].checked) {
    pedido.tipoSabor2 = saborPizza[6];
  } else if (tipo[7].checked) {
    pedido.tipoSabor2 = saborPizza[7];
  } else {
    pedido.tipoSabor2 = "-";
  }
  return pedido.tipoSabor2;
}

function escolherBebida() {
  let tipo = document.getElementsByName("bebida");
  if (tipo[0].checked) {
    pedido.tipoDeBebida = bebidas[0];
  } else if (tipo[1].checked) {
    pedido.tipoDeBebida = bebidas[1];
  } else if (tipo[2].checked) {
    pedido.tipoDeBebida = bebidas[2];
  } else if (tipo[3].checked) {
    pedido.tipoDeBebida = bebidas[3];
  } else if (tipo[4].checked) {
    pedido.tipoDeBebida = bebidas[4];
  } else if (tipo[5].checked) {
    pedido.tipoDeBebida = bebidas[5];
  } else {
    pedido.tipoDeBebida = 0;
  }
  return pedido.tipoDeBebida.preco;
}
function escolherEntrega() {
  let tipo = document.getElementsByName("entrega");

  if (tipo[0].checked) {
    pedido.tipoDeEntrega = entrega[0];
  } else if (tipo[1].checked) {
    pedido.tipoDeEntrega = entrega[1];
  } else {
    pedido.tipoDeEntrega = 0;
  }

  return pedido.tipoDeEntrega.preco;
}
function escolherEntrega2() {
  let tipo = document.getElementsByName("entrega");

  if (tipo[0].checked) {
    pedido.tipoDeEntrega = entrega[0];
  } else if (tipo[1].checked) {
    pedido.tipoDeEntrega = entrega[1];
  } else {
    pedido.tipoDeEntrega = 0;
  }

  return pedido.tipoDeEntrega.tipo;
}

function escolherPagamento() {
  let tipo = document.getElementsByName("entrega");
  if (tipo[0].checked) {
    pedido.pagamento = formaDePagamento[0];
  } else if (tipo[1].checked) {
    pedido.pagamento = formaDePagamento[1];
  } else if (tipo[2].checked) {
    pedido.pagamento = formaDePagamento[2];
  } else if (tipo[3].checked) {
    pedido.pagamento = formaDePagamento[3];
  } else if (tipo[4].checked) {
    pedido.pagamento = formaDePagamento[4];
  } else {
    pedido.pagamento = 0;
  }

  return pedido.pagamento;
}

var precoFinal;

function previaDoPedido() {
  precoFinal = escolherTamanho() + escolherBorda() + escolherBebida() + escolherEntrega();
  nomeUsuario = document.getElementById("nomeCliente").value;
  numeroCelular = document.getElementById("clienteCelular").value;
  nomeRua = document.getElementById("rua").value;
  numeroCasa = document.getElementById("numero").value;
  bairroCasa = document.getElementById("bairro").value;
  pontoReferencia = document.getElementById("pontoRef").value;
  observacoes = document.getElementById("cxTexto").value;
  complemento = document.getElementById("comp").value;
  troco = document.getElementsByName("caixaTroco").value;
  imprimeResumoPedido(precoFinal);
}


var nomeUsuario = "Não informado";
var numeroCelular = "Não informado";
var nomeRua = "Não informado";
var numeroCasa = "Não informado";
var bairroCasa = "Não informado";
var pontoReferencia = "Não informado";
var observacoes = "Não informado";
var complemento = "Não informado";
var tipoDePagamento = "Não informado";
var troco = "Sem troco."

function imprimeResumoPedido(precoFinal) {
  alert(`Olá, Sr.(a) ${nomeUsuario}, este é o seu pedido até o momento:\n
Uma pizza metade ${escolherPizzaUm()}, metade ${escolherPizzaDois()}.\n
A bebida escolhida foi: ${pedido.tipoDeBebida.sabor}\n
O tipo de entrega escolhido foi: ${pedido.tipoDeEntrega.tipo}\n
E o Valor Total do seu pedido fica em: R$ ${precoFinal.toFixed(2).replace(".", ",")}`)
}
var numeroAleatorio = Math.floor(Math.random() * 1000);

function tempoDeEsperaEAgradecimento() {
  alert(`O número do seu pedido é ${numeroAleatorio}, e o tempo estimado para a entrega é de 90 minutos. \n Agradecemos sua preferência senhor(a) ${nomeUsuario}.`);
  display();
}
function display() {
  DispWin = window.open('', 'NewWin', 'toolbar=no,status=no,width=450,height=350')
  message = `<ul><b><center>PEDIDO FINALIZADO!</center>`;
  message += `<li><b>Pedido de Número: </b> ${numeroAleatorio}`;
  message += `<li><b>Nome do Cliente: </b> ${nomeUsuario}`;
  message += `<li><b>Celular: </b> ${numeroCelular}`;
  message += `<li><b>Endereço: </b> ${nomeRua}, ${numeroCasa}, ${bairroCasa}, ${complemento}.`;
  message += `<li><b>Ponto de Referência: </b> ${pontoReferencia}`;
  message += `<li><b>Uma pizza metade</b> ${escolherPizzaUm()}, <b>metade</b> ${escolherPizzaDois()}.`;
  message += `<li><b>Bebida: </b>${pedido.tipoDeBebida.sabor}`;
  message += `<li><b>Tipo de Entrega: </b>${escolherEntrega2()}`;
  // message += `<li><b>Forma de Pagamento: </b>${escolherPagamento()}</ul>`;
  message += `<li><b>Valor Total do Pedido: </b>R$ ${precoFinal.toFixed(2).replace(".", ",")}`;
  message += `<li><b>Observações do Pedido: </b> ${observacoes}`;
  // </ul>`;
  DispWin.document.write(message);
}