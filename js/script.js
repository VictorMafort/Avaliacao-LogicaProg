// //Ele precisa que neste sistema o usuário consiga escolher:
// O tamanho da pizza ()
// Tipo de borda ()
// Sabores (Apenas 2 sabores por pizza) (Apenas uma pizza) ()
// Bebidas (Apenas uma) ()
// Tipo de entrega ()
// Dados para entrega ()
// Confirmar pedido ()
// Forma de Pagamento (somente uma) ()
// Mostar o valor do pedido na tela no final do pedido ()
// Informar numero do pedido randomico ()
// mandar uma mensagem ao usuário desta forma: “Agradecemos sua preferência senhor(a) Fulano de tal.” ()


function preco() {
  let precoFinal = 0;
  let tamanhoPizza = [
    { tamanho: 'pequena', preco: 25.00 },
    { tamanho: 'media', preco: 30.00 },
    { tamanho: 'gigante', preco: 40.00 },
    { tamanho: 'familia', preco: 45.00 },
  ];

  let tipoDeBorda = [
    { tipo: 'gorgonzola', preco: 10.00 },
    { tipo: 'provolone', preco: 8.00 },
    { tipo: 'catupiry', preco: 5.00 },
    { tipo: 'cheddar', preco: 5.00 },
    { tipo: 'sem borda', preco: 0.00 }
  ];

  let tipoDeSabor = ['calabresa', '4 queijos', 'frango e catupiry', 'portuguesa', 'camarao', 'carne seca', 'lombo canadense', 'x fritas'];

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

  let dadosEntrega = {
    nome: prompt("Informe seu nome"),
    celular: prompt("Informe seu celular"),
    rua: prompt("Informe seu rua"),
    numero: prompt("Informe seu numero"),
    complemento: prompt("Informe seu complemento"),
    bairro: prompt("Informe seu bairro"),
    pontoDeReferencia: prompt("Informe seu ponto de referência")
   };

    let formaDePagamento = ['Débito', 'Crédito', 'Pix', 'PicPay', 'Dinheiro'];

  let tamanho = prompt(`Escolha o tamanho da pizza`);
  let borda = prompt(`Escolha o tipo da borda`);
  let sabor = prompt(`Escolha o sabor da pizza`);
  let bebida = prompt(`Escolha a sua bebida`);
  let entrega = prompt(`Escolha forma de entrega`);
  let pagamento = prompt(`Escolha forma de pagamento`);

  let confirmaPedido = prompt(`Deseja confirmar o seu pedido: \nS para sim \n N para Não`);
  
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




function significadoEscopo(){
    let tipo = document.getElementsByName("escopo");
    if(tipo[0].checked){
        alert(`Valores que são acessados globalmente. Geralmente este tipo de valor é 
                declarado individualmente logo no início do código. Pode acontecer de um valor ser declarado dentro de um "if" 
                e ele sobrescrever um valor declarado no início do código.`);
    }else if (tipo[1].checked){
        alert(`Valores que são declarados especificamente em um lugar. Geralmente acontece dentro de uma função,
                 onde somente na função será utilizado esse valor.`);
    }else if(tipo[2].checked){
        alert(`Valores que são declarados dentro de blocos if/for... respeitando uma hierarquia.`);
    }
}

function significadoValores(){
    let tipo = document.getElementsByName("valores");
    if(tipo[0].checked){
        alert(`Forma de declarar um valor na forma escopada. Utiliza-se esta técnica em vários momentos em
                 um código, como por exemplo para declarar um valor global ou até mesmo dentro de um bloco.`);
    }else if (tipo[1].checked){
        alert(`Técnica para declarar um valor imutável, ou seja, que não vai mudar (constante). Exemplo: pi (3,14159...)`);
    }else if(tipo[2].checked){
        alert(`Forma de declarar um valor que é variável e que pode mudar. 
                Este tipo de técnica se torna um escopo local apenas quando usado em funções.`);
    }else if(tipo[3].checked){
        alert(`Posições na memória e não valores. Isto acontece geralmente em objetos, 
                quando se atribui um array a uma variável e de alguma forma esse valor é "referenciado" por uma outra variável.
                Para realizar uma cópia de uma variável desse tipo é necessário cloná-la, utilizando "Object.assign"`);
    }
}