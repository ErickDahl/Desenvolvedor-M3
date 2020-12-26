
var produtos = [
  
        {
            id: 0,
            nome: "Camiseta Mescla",
            preco: 28.00,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "Pequena,Medio,Grande" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_2.png",
        },
        {
          id: 1,
            nome: "Saia em Couro",
            preco: 398.00,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "unico" },
                { Cor: "Preta" },
            ],
            img: "/layout/imagens/img_3.png",
        },
        {
          id: 2,
            nome: "Cardigan Tigre",
            preco: 398.00,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "Pequeno,Medio,Grande" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_4.png",
        },
        {
          id: 3,
            nome: "Cardigan White",
            preco: 99.90,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "unico" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_5.png",
        },
        {
            id: 4,
            nome: "Body Leopardo",
            preco: 129.90,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "unico" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_6.png",
        },
        {
            id: 5,
            nome: "Casaco Pelos",
            preco: 398.00,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "Pequeno,Medio,Grande,Extra Grande" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_7.png",
        },
        {
            id: 6,
            nome: "Croppped Stripes",
            preco: 120.00,
            parcelamento: 5,
            opcoes: [
                { Tamanho: "Pequeno,Medio,Grande,Extra Grande" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_8.png",
        },
        {
            id: 7,
            nome: "Camiseta Transparente",
            preco: 398.00,
            parcelamento: 3,
            opcoes: [
                { Tamanho: "Pequeno,Medio,Grande" },
                { Cor: "Preta,Branca" },
            ],
            img: "/layout/imagens/img_9.png",
        },
        {
            id: 8,
            nome: "Pochete Clucth",
            preco: 99.00,
            parcelamento: 5,
            cor: "preto",
            Tamanho : ["p","g"],
            img: "/layout/imagens/img_10.png",
        }

    ]

    var carrinho = [];
    var qtdProdutos = 0;
    var totalCarrinho = 0;
    var containerCarrinho = document.querySelector('.carrinhoDeCompras');
    var containerQtd = document.querySelector('.totalCarrinho');
    var containerQtdTotal =  document.querySelector('.qtdProd');

inicializaLoja = () => {
  var containerProdutos = document.querySelector('.produtos');
  produtos.map((prod) => {

    containerProdutos.innerHTML += `
    
    <div class = "item">
        <img src="${prod.img}"/>
        <h2>${prod.nome}</h2>
        <p>${prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>até ${prod.parcelamento}x de ${(prod.preco/prod.parcelamento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <input type="button" value="Comprar" onclick="comprar(${prod.id})">
    </div>
    `
  })
}

comprar = (id) => {

    var qtd = 0;
    carrinho.push(produtos[id]); 
    totalCarrinho += produtos[id].preco;
    
    carrinho.map(item => {
        if(item.id === id) {
            qtd++;
        }
    });

    containerCarrinho.innerHTML += `
    <div class = "carrinho">
        <img class="fotoCarrinho" src="${produtos[id].img}"/>
        <a>${produtos[id].nome} | R$${produtos[id].preco * qtd} | ${qtd} </a>
        <button class="excluir" onclick="excluir(${id})">
            <i class="fas fa-times"></i>
        </button>
    <div>

    ` 

    containerQtd.innerHTML = `
    <p>Total da compra: R$${totalCarrinho}</p>
    `
    containerQtdTotal.innerHTML = `
    <a class="qtdProdutos">${carrinho.length}</a>
    `
}

excluir = (id) => {
    carrinho.pop(id);
    totalCarrinho -= produtos[id].preco;
    
    containerQtd.innerHTML = `
    <p>Total da compra: R$${totalCarrinho}</p>
    `
    containerQtdTotal.innerHTML = `
    <a class="qtdProdutos">${carrinho.length}</a>
    `
}

inicializaLoja();

