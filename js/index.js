var produtos = [
  
    {
        id: 0,
        nome: "Camiseta Mescla",
        preco: 28.00,
        parcelamento: 5,
        cor: "Amarelo",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_2.png",
    },
    {
        id: 1,
        nome: "Saia em Couro",
        preco: 398.00,
        parcelamento: 5,
        cor: "Amarelo",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_3.png",
    },
    {
        id: 2,
        nome: "Cardigan Tigre",
        preco: 398.00,
        parcelamento: 5,
        cor: "Laranja",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_4.png",
    },
    {
        id: 3,
        nome: "Cardigan White",
        preco: 99.90,
        parcelamento: 5,
        cor: "Azul",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_5.png",
    },
    {
        id: 4,
        nome: "Body Leopardo",
        preco: 129.90,
        parcelamento: 5,
        cor: "Branco",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_6.png",
    },
    {
        id: 5,
        nome: "Casaco Pelos",
        preco: 398.00,
        parcelamento: 5,
        cor: "Cinza",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_7.png",
    },
    {
        id: 6,
        nome: "Croppped Stripes",
        preco: 120.00,
        parcelamento: 5,
        cor: "Branco",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_8.png",
    },
    {
        id: 7,
        nome: "Camiseta Transparente",
        preco: 398.00,
        parcelamento: 3,
        cor: "Azul",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_9.png",
    },
    {
        id: 8,
        nome: "Pochete Clucth",
        preco: 99.00,
        parcelamento: 5,
        cor: "Cinza",
        Tamanho : ["p","g"],
        img: "/layout/imagens/img_10.png",
    }
    
];

var cores = ["Amarelo", "Azul", "Branco", "Cinza", "Laranja"];
var tamanhos = ["P","M","G","GG","U","36","38","40","42","44","46"];
var precoFiltro = ["De R$0 até R$50","De R$51 até R$150","De R$151 até R$300","De R$301 até R$500","A partir de R$01"];



var qtd = [];
var carrinho = [];
var quantidadeNoCarrinhoInvidual = [];
var quantidadeNoCarrinho = 0;
var totalCarrinho = 0;
var containerCarrinho = document.querySelector('.carrinhoDeCompras');
var containerCores = document.querySelector('.cores');
var containerTamanhos = document.querySelector('.tamanhos');
var containerPrecoFiltro = document.querySelector('.precoFiltro');
var containerQtd = document.querySelector('.totalCarrinho');
var containerQtdTotal =  document.querySelector('.qtdProd');
var containerProdutos = document.querySelector('.produtos');

carregarProdutos = (prod) => {

    containerProdutos.innerHTML += ` 
        <div class = "item">
            <img src="${prod.img}"/>
            <h2>${prod.nome}</h2>
            <h3>${formataMoeda(prod.preco)}</h3>
            <h4>até ${prod.parcelamento}x de ${formataMoeda(prod.preco/prod.parcelamento)}</h4>
            <input type="button" value="Comprar" onclick="comprar(${prod.id})">
        </div>
    `
}

formataMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

contarProdutosRepetidosCarrinho = () => {
    qtd.reduce(function(object, item){

        if(!object[item]){

            object[item] = 1;

        } else {
            object[item]++;
        }
        return quantidadeNoCarrinhoInvidual = object;
    },{})
}

carregarCarrinho = () => {

    carrinho.map((item) => {  
        
        containerCarrinho.innerHTML += `
            <div class = "carrinho">
                <img class="fotoCarrinho" src="${item.img}"/>
                <a>${item.nome} | ${formataMoeda(item.preco)} | ${quantidadeNoCarrinhoInvidual[item.id]} </a>
                <button class="excluir" onclick="excluir(${item.id})">
                    <i class="fas fa-times"></i>
                </button>
            <div>
        `
    });

    containerQtd.innerHTML = `
    <p>Total da compra: ${formataMoeda(totalCarrinho)}</p>
    `
    containerQtdTotal.innerHTML = `
    <a class="qtdProdutos">${quantidadeNoCarrinho}</a>
    `
}


inicializarLoja = () => {
  produtos.map((prod) => {
      
    carregarProdutos(prod);
  })

  criarFiltroCor();
  criarFiltroTamanho();
  criarFiltroPreco();
}

criarFiltroCor = () => {

    cores.map((cor) => {
        containerCores.innerHTML += `
            <input type="radio" name="cor" value="${cor}" id="${cor}" onclick="filtrarPorCor()">
            <label for="${cor}">${cor}</label><br>
        `
    })
}

criarFiltroTamanho = () => {
    tamanhos.map((tamanho) => {
        containerTamanhos.innerHTML += `
            <input type="radio" name="tamanho" value="${tamanho}" id="${tamanho}">
            <label for="${tamanho}">${tamanho}</label><br>   
        `
    })
}

criarFiltroPreco = () => {
    precoFiltro.map((preco) =>{
        containerPrecoFiltro.innerHTML += `
            <input type="radio" name="preco" value="${preco}" id="${preco}">
            <label for="${preco}">${preco}</label><br>
        `
    })
}

filtrarPorCor = () => {
    
    var valorCor = document.querySelector('input[name="cor"]:checked').value;
    var valorTamanho = document.querySelector('input[name="tamanho"]:checked').value;
    var valorPreco = document.querySelector('input[name="preco"]:checked').value;
    containerProdutos.innerHTML = ``;

    produtos.map((item) => {
        if(item.cor === valorCor){
            containerProdutos.innerHTML += ` 
                <div class = "item">
                    <img src="${item.img}"/>
                    <h2>${item.nome}</h2>
                    <h3>${formataMoeda(item.preco)}</h3>
                    <h4>até ${item.parcelamento}x de ${formataMoeda(item.preco/item.parcelamento)}</h4>
                    <input type="button" value="Comprar" onclick="comprar(${item.id})">
                </div>
            `
        }
    })    
}

comprar = (id) => {

    carrinho.push(produtos[id]);
    qtd.push(produtos[id].id);
    totalCarrinho += produtos[id].preco;
    carrinho = carrinho.filter((este, i) => carrinho.indexOf(este) === i);
    quantidadeNoCarrinho++;
    containerCarrinho.innerHTML = ``;

    contarProdutosRepetidosCarrinho();
    carregarCarrinho();
}

excluir = (id) => {

    totalCarrinho -= produtos[id].preco * quantidadeNoCarrinhoInvidual[id];
    
    console.log(qtd)
    qtd = qtd.filter(( elemento , index) => qtd.indexOf(elemento) === index);
    console.log(qtd)
    posQtd = carrinho.findIndex(i => i.id === id);
    qtd.splice(posQtd,1);
    console.log(qtd)


    pos = carrinho.findIndex(i => i.id === id);
    carrinho.splice(pos,1);

    quantidadeNoCarrinho -= quantidadeNoCarrinhoInvidual[id];

    containerCarrinho.innerHTML = ``;
    
    contarProdutosRepetidosCarrinho();
    carregarCarrinho();
}

inicializarLoja();
