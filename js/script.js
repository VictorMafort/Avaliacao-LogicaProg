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
  let tamanho = prompt(`Escolha o tamanho da pizza`);
  let borda = prompt(`Escolha o tipo da borda`);
  let sabor = prompt(`Escolha o sabor da pizza`);
  let bebida = prompt(`Escolha a sua bebida`);
  let entrega = prompt(`Escolha forma de entrega`);
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

  let saborPizza = ['calabresa', '4 queijos', 'frango e catupiry', 'portuguesa', 'camarao', 'carne seca', 'lombo canadense', 'x fritas'];

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

  let formaDePagamento = ['debito', 'credito', 'pix', 'picPay', 'dinheiro'];

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
  }

  switch (let tipo = document.getElementsByName("tamanho")) {
    case tipo[0].checked:
      tamanho = tipo[0].checked;
      break;
    case tipo[1].checked:
      tamanho = tipo[1].checked;
      break;
    case tipo[1].checked:
      tamanho = tipo[1].checked;
      break;
    case tipo[1].checked:
        tamanho = tipo[1].checked;
        break;
    
      default:
    break;
  }
}

function escolherBorda() {
  let tipo = document.getElementsByName("borda");
  let tamanho;
  if (tipo[0].checked) {
    tamanho = tipo[0].checked;
  } else if (tipo[1].checked) {
    tamanho = tipo[1].checked;
  } else if (tipo[2].checked) {
    tamanho = tipo[2].checked;
  }
}

function significadoValores() {
  let tipo = document.getElementsByName("valores");
  if (tipo[0].checked) {
    alert(`Forma de declarar um valor na forma escopada. Utiliza-se esta técnica em vários momentos em
                 um código, como por exemplo para declarar um valor global ou até mesmo dentro de um bloco.`);
  } else if (tipo[1].checked) {
    alert(`Técnica para declarar um valor imutável, ou seja, que não vai mudar (constante). Exemplo: pi (3,14159...)`);
  } else if (tipo[2].checked) {
    alert(`Forma de declarar um valor que é variável e que pode mudar. 
                Este tipo de técnica se torna um escopo local apenas quando usado em funções.`);
  } else if (tipo[3].checked) {
    alert(`Posições na memória e não valores. Isto acontece geralmente em objetos, 
                quando se atribui um array a uma variável e de alguma forma esse valor é "referenciado" por uma outra variável.
                Para realizar uma cópia de uma variável desse tipo é necessário cloná-la, utilizando "Object.assign"`);
  }
}