let carrinho = [];

let produtos = [
    // ----------------- BRINCOS -----------------
{nome:"Brinco Triplo Zircônia",preco:50,img:"assets/brinco/brinco1.png",categoria:"brinco"},
{nome:"Brinco Gota Detalhada",preco:60,img:"assets/brinco/brinco2.png",categoria:"brinco"},
{nome:"Brinco Triângulo Liso",preco:60,img:"assets/brinco/brinco3.png",categoria:"brinco"},
{nome:"Brinco Orgânico Gota 42Mm",preco:60,img:"assets/brinco/brinco4.png",categoria:"brinco"},
{nome:"Brinco Argola Cordão Trabalhado 20Mm",preco:45,img:"assets/brinco/brinco5.png",categoria:"brinco"},
{nome:"Brinco Van Cleef Trevo 8Mm Cravejado",preco:65,img:"assets/brinco/brinco6.png",categoria:"brinco"},
{nome:"Brinco Coração Zircônia Cristais",preco:60,img:"assets/brinco/brinco7.png",categoria:"brinco"},
{nome:"Brinco Coração Cristais Cravejado",preco:65,img:"assets/brinco/brinco8.png",categoria:"brinco"},
{nome:"Brinco Zircônia Coração Cristal",preco:75,img:"assets/brinco/brinco9.png",categoria:"brinco"},
{nome:"Brinco Losango Frisado",preco:70,img:"assets/brinco/brinco10.png",categoria:"brinco"},
{nome:"Brinco Losango Frisado",preco:50,img:"assets/brinco/brinco11.png",categoria:"brinco"},
{nome:"Brinco Zigue Zague Detalhado 22Mm",preco:60,img:"assets/brinco/brinco12.png",categoria:"brinco"},
{nome:"Brinco Círculo Fio Torcido",preco:60,img:"assets/brinco/brinco13.png",categoria:"brinco"},
{nome:"Brinco Argola 13Mm Clássico",preco:40,img:"assets/brinco/brinco14.png",categoria:"brinco"},
{nome:"Brinco Argola Sextavada 17Mm",preco:40,img:"assets/brinco/brinco15.png",categoria:"brinco"},
{nome:"Brinco Argola Coração 15Mm",preco:45,img:"assets/brinco/brinco16.png",categoria:"brinco"},
{nome:"Brinco Argola 17Mm Clássico",preco:45,img:"assets/brinco/brinco17.png",categoria:"brinco"},
{nome:"Brinco Argola 14Mm Clássico",preco:35,img:"assets/brinco/brinco18.png",categoria:"brinco"},
{nome:"Brinco Coração Detalhado 7Mm",preco:35,img:"assets/brinco/brinco19.png",categoria:"brinco"},
{nome:"Brinco Gota Orgânica",preco:40,img:"assets/brinco/brinco20.png",categoria:"brinco"},
{nome:"Brinco Trabalho Liso Com Cristal",preco:65,img:"assets/brinco/brinco21.png",categoria:"brinco"},
{nome:"Brinco Zircônia Quadrada 6x6Mm Azul Claro",preco:45,img:"assets/brinco/brinco22.png",categoria:"brinco"},
{nome:"Brinco Argola Triângulo 13x13Mm",preco:40,img:"assets/brinco/brinco23.png",categoria:"brinco"},
{nome:"Brinco 5mm Cruz inteira Cravejada Micro Zirconias",preco:60,img:"assets/brinco/brinco24.png",categoria:"brinco"},
{nome:"Brinco Tartaruga 6Mm Renda Italiana",preco:35,img:"assets/brinco/brinco26.png",categoria:"brinco"},
{nome:"Brinco Elo Coração",preco:55,img:"assets/brinco/brinco27.png",categoria:"brinco"},
{nome:"Brinco Argola Click Em V 11Mm",preco:60,img:"assets/brinco/brinco28.png",categoria:"brinco"},
{nome:"Brinco Zircônia Coração 7mm",preco:55,img:"assets/brinco/brinco29.png",categoria:"brinco"},
{nome:"Brinco Zircônia Cravação Inglesa 3mm",preco:55,img:"assets/brinco/brinco30.png",categoria:"brinco"},
{nome:"Brinco Gato Liso Clássico",preco:35,img:"assets/brinco/brinco31.png",categoria:"brinco"},
{nome:"Brinco Carta Símbolo De Paus",preco:35,img:"assets/brinco/brinco32.png",categoria:"brinco"},
{nome:"Brinco Borboleta 7Mm ",preco:40,img:"assets/brinco/brinco33.png",categoria:"brinco"},
{nome:"Brinco Coroa Rainha Com Zircônia Tarraxa Baby",preco:60,img:"assets/brinco/brinco34.png",categoria:"brinco"},
{nome:"Brinco Triângulo 9Mm",preco:35,img:"assets/brinco/brinco35.png",categoria:"brinco"},
{nome:"Brinco Círculo 11Mm Zircônia 4Mm",preco:45,img:"assets/brinco/brinco36.png",categoria:"brinco"},
{nome:"Brinco Quadrado 10mm Detalhado",preco:45,img:"assets/brinco/brinco38.png",categoria:"brinco"},
{nome:"Brinco Mola Com Círculo",preco:45,img:"assets/brinco/brinco37.png",categoria:"brinco"},
{nome:"Brinco Argola Losango 12x16mm",preco:35,img:"assets/brinco/brinco39.png",categoria:"brinco"},
{nome:"Brinco Sapatinho Cravejado",preco:35,img:"assets/brinco/brinco40.png",categoria:"brinco"},
{nome:"Brinco Letra Redondo (1 Par) ",preco:45,img:"assets/brinco/brinco41.png",categoria:"brinco"},
{nome:"Brinco Argola Losango 15x19mm",preco:40,img:"assets/brinco/brinco42.png",categoria:"brinco"},
{nome:"Brinco Bolinhas",preco:35,img:"assets/brinco/brinco43.png",categoria:"brinco"},
{nome:"Brinco Estrela 7mm com zirconia",preco:40,img:"assets/brinco/brinco44.png",categoria:"brinco"},
{nome:"Brinco Coração 8mm Com Coraçõeszinhos Dentro ",preco:40,img:"assets/brinco/brinco45.png",categoria:"brinco"},
{nome:"Brinco Raio",preco:35,img:"assets/brinco/brinco46.png",categoria:"brinco"},
{nome:"Brinco Espírito Santo",preco:45,img:"assets/brinco/brinco47.png",categoria:"brinco"},
{nome:"Brinco laço",preco:45,img:"assets/brinco/brinco48.png",categoria:"brinco"},

    // ----------------- COLARES -----------------
{nome:"Colar Pedra Brilhante Cruz Nylon 40cm", preco:50, img:"assets/colares/colar1.png", categoria:"colar"},
{nome:"Colar Nylon 40cm Com Pingente Estrela 11mm", preco:50, img:"assets/colares/colar2.png", categoria:"colar"},
{nome:"Colar Coração Zircônia 5mm Nylon 40cm", preco:55, img:"assets/colares/colar3.png", categoria:"colar"},
{nome:"Colar Madrepérola Mão de Fátima Com Olho Grego", preco:55, img:"assets/colares/colar4.png", categoria:"colar"},
{nome:"Colar 45cm Cadeado Filho Bebê", preco:80, img:"assets/colares/colar5.png", categoria:"colar"},
{nome:"Colar 45cm Pingente Placa 30mm Peace (Paz)", preco:80, img:"assets/colares/colar6.png", categoria:"colar"},
{nome:"Colar 45cm Corrente Cadeado Com Carruagem", preco:80, img:"assets/colares/colar7.png", categoria:"colar"},
{nome:"Colar Veneziana 50cm", preco:85, img:"assets/colares/colar8.png", categoria:"colar"},
{nome:"Colar 45cm Elo Português Cruz 17mm Zircônia Azul Marinho", preco:85, img:"assets/colares/colar9.png", categoria:"colar"},
{nome:"Colar 45cm Sagrado Coração de Jesus", preco:90, img:"assets/colares/colar10.png", categoria:"colar"},
{nome:"Colar Veneziana 40cm", preco:80, img:"assets/colares/colar11.png", categoria:"colar"},
{nome:"Colar Veneziana 45cm", preco:85, img:"assets/colares/colar12.png", categoria:"colar"},
{nome:"Colar Veneziana 70cm", preco:95, img:"assets/colares/colar13.png", categoria:"colar"},
{nome:"Colar 45cm Medalha São Jorge Elo Cadeado 6 Pérolas", preco:95, img:"assets/colares/colar14.png", categoria:"colar"},
{nome:"Colar 40cm Com 5 Pérola de 7mm Corrente Elo Cartier", preco:110, img:"assets/colares/colar15.png", categoria:"colar"},
{nome:"Colar Veneziana 60cm", preco:95, img:"assets/colares/colar16.png", categoria:"colar"},
{nome:"Colar 45cm Elo Cadeado 7 Bolinhas 3mm 6 Palitos 5mm", preco:105, img:"assets/colares/colar17.png", categoria:"colar"},
{nome:"Colar Van Cleef Cravejado Micro Zircônias 45cm", preco:105, img:"assets/colares/colar18.png", categoria:"colar"},
{nome:"Colar Veneziana 45cm Pingente Redondo Zircônia 6mm", preco:105, img:"assets/colares/colar19.png", categoria:"colar"},
{nome:"Colar Van Cleef 45cm Elo Português Trevo Sextavado", preco:105, img:"assets/colares/colar20.png", categoria:"colar"},
{nome:"Colar 45cm Elo Português Olho Grego + Zircônias", preco:105, img:"assets/colares/colar21.png", categoria:"colar"},
{nome:"Colar 45cm Van Cleef Elo Português 5 Trevos", preco:105, img:"assets/colares/colar22.png", categoria:"colar"},
{nome:"Colar Veneziana 45cm Com Pingente Globo 10mm Renda Iraliana", preco:105, img:"assets/colares/colar23.png", categoria:"colar"},
{nome:"Colar Pérola 45cm Elo Cadeado", preco:105, img:"assets/colares/colar24.png", categoria:"colar"},
{nome:"Colar Veneziana 45cm Pingente Coração Galeria Com Zirconia", preco:105, img:"assets/colares/colar25.png", categoria:"colar"},
{nome:"Colar 45cm Elo Português Bola 10mm Maciça", preco:105, img:"assets/colares/colar26.png", categoria:"colar"},
{nome:"Colar Elo Português 45cm 3 Estrelas Vazadas", preco: 125, img:"assets/colares/colar27.png", categoria: "colar"},
{nome:"Colar Veneziana 45cm com pingente Coração Zircônia 10mm", preco: 125, img:"assets/colares/colar28.png", categoria: "colar"},
{nome:"Colar Borboletas 45cm Elo Cartier", preco: 125, img:"assets/colares/colar29.png", categoria: "colar"},
{nome:"Colar Elo Português 45cm 2 Corações", preco: 130, img:"assets/colares/colar30.png", categoria: "colar"},
{nome:"Colar 45cm Pingente Redondo Cravejado zirconia 6mm inteiro Cravejado", preco: 135, img:"assets/colares/colar31.png", categoria: "colar"},
{nome:"Colar 45cm Pandora Cravejado Cristais", preco: 140, img:"assets/colares/colar32.png", categoria: "colar"},
{nome:"Colar Regulavel Gravatinha Elo Cadeado Corações", preco: 140, img:"assets/colares/colar33.png", categoria: "colar"},
{nome:"Colar 45cm Gravatinha Cruz Cristais zirconia", preco: 140, img:"assets/colares/colar34.png", categoria: "colar"},
{nome:"Colar Terço 45cm Elo corrente Cadeado", preco: 145, img:"assets/colares/colar35.png", categoria: "colar"},
{nome:"Colar Elo Cartier Pingentes Estrelas e Lua 40cm", preco: 145, img:"assets/colares/colar36.png", categoria: "colar"},
{nome:"Colar Elo Cartier Pingentes Borboletas 40cm", preco: 150, img:"assets/colares/colar37.png", categoria: "colar"},
{nome:"Colar MOISSANITE (Diamante Lab) 45cm com 5mm", preco: 150, img:"assets/colares/colar38.png", categoria: "colar"},
{nome:"Colar MOISSANITE (Diamante Lab) 45cm com 7mm", preco: 180, img:"assets/colares/colar39.png", categoria: "colar"},
    // ----------------- PULSEIRAS -----------------
{nome:"Pulseira Exemplo",preco:90,img:"assets/pulseiras/pulseiras1.png",categoria:"pulseira"},

    // ----------------- ANÉIS -----------------
{nome:"Anel Exemplo",preco:80,img:"assets/aneis/aneis1.png",categoria:"anel"},

    // ----------------- PINGENTES -----------------
{nome:"Pingente Exemplo",preco:70,img:"assets/pingentes/pingentes1.png",categoria:"pingente"},

    // ----------------- PERSONALIZADOS -----------------
{nome:"Personalizado Exemplo",preco:150,img:"assets/personalizados/personalizados1.png",categoria:"personalizado"},

    // ----------------- MASCULINO -----------------
{nome:"Pulseira Masculina Exemplo",preco:140,img:"assets/masculino/masculino1.png",categoria:"masculino"}
];

// --------------------------------------------------
// FUNÇÃO PARA MOSTRAR PRODUTOS
function mostrarProdutos(lista) {
    let area = document.getElementById("produtos");
    if (!area) return;
    area.innerHTML = "";

    lista.forEach(p => {
        area.innerHTML += `
            <div class="produto">
                <img src="${p.img}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
                <button onclick="addCarrinho('${p.nome}', ${p.preco})">ADICIONAR AO CARRINHO</button>
            </div>
        `;
    });
}

// --------------------------------------------------
// FUNÇÃO FILTRAR POR CATEGORIA
function filtrar(categoria) {
    if (categoria === "todos") {
        mostrarProdutos(produtos);
    } else {
        let filtrados = produtos.filter(p => p.categoria === categoria);
        mostrarProdutos(filtrados);
    }
}

// --------------------------------------------------
// FUNÇÕES CARRINHO
function addCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.qtd++;
    } else {
        carrinho.push({ nome, preco, qtd: 1 });
    }
    atualizarCarrinho();
    abrirCarrinho();
}

function alterarQtd(nome, valor) {
    const item = carrinho.find(p => p.nome === nome);
    if (item) {
        item.qtd += valor;
        if (item.qtd <= 0) removerItem(nome);
    }
    atualizarCarrinho();
}

function removerItem(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    let total = 0;
    if (!lista) return;
    lista.innerHTML = "";

    carrinho.forEach(p => {
        let subtotal = p.preco * p.qtd;
        total += subtotal;

        lista.innerHTML += `
            <div class="flex justify-between items-center mb-4 text-white border-b border-zinc-800 pb-2">
                <div class="flex-1">
                    <p class="font-bold text-sm uppercase">${p.nome}</p>
                    <p class="text-xs text-gray-400">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex items-center bg-zinc-800 rounded px-2 py-1 gap-3">
                        <button onclick="alterarQtd('${p.nome}', -1)" class="text-white font-bold">-</button>
                        <span class="text-xs font-bold w-4 text-center">${p.qtd}</span>
                        <button onclick="alterarQtd('${p.nome}', 1)" class="text-white font-bold">+</button>
                    </div>
                    <span class="text-sm font-bold min-w-[70px] text-right">R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
                    <button onclick="removerItem('${p.nome}')" class="text-red-600 text-xl font-bold ml-2">&times;</button>
                </div>
            </div>
        `;
    });

    let campoTotal = document.getElementById("total");
    if (campoTotal) campoTotal.innerText = "Total: R$ " + total.toFixed(2).replace('.', ',');

    let campoContador = document.getElementById("contador");
    if (campoContador) campoContador.innerText = carrinho.length;
}

function abrirCarrinho() {
    const car = document.getElementById("carrinho");
    if (car) car.classList.add("ativo");
}

function fecharCarrinho() {
    const car = document.getElementById("carrinho");
    if (car) car.classList.remove("ativo");
}

// --------------------------------------------------
// FUNÇÃO PESQUISAR
function pesquisar() {
    let input = document.getElementById("pesquisa");
    if (!input) return;
    let texto = input.value.toLowerCase();
    let filtrado = produtos.filter(p => p.nome.toLowerCase().includes(texto));
    mostrarProdutos(filtrado);
}
function mostrarProdutos(lista) {
    let area = document.getElementById("produtos");
    if (!area) return;
    area.innerHTML = "";

    // Se a lista não existir ou estiver vazia, avisa no console
    if (!lista || lista.length === 0) {
        console.warn("Nenhum produto para mostrar.");
        return;
    }

    lista.forEach(p => {
        area.innerHTML += `
            <div class="produto">
                <img src="${p.img}">
                <h3>${p.nome}</h3>
                <p>R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
                <button onclick="addCarrinho('${p.nome}', ${p.preco})">Comprar</button>
            </div>
        `;
    });
}
// --------------------------------------------------
// ENVIAR WHATSAPP
function enviarWhats() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let telefone = "5585991599704";
    let total = 0;

    // \u2728 é o brilho ✨ | \ud83d\udcb3 é a sacola 🛍️
    let mensagem = "Oii! Tudo bem? \u2728\n";
    mensagem += "Acabei de escolher algumas peças no catálogo da Luar Pratas e gostaria de finalizar meu pedido.\n\n";
    mensagem += "\ud83d\udcb3 *Pedidos - Luar Pratas*\n\n";

    carrinho.forEach(p => {
        mensagem += `• ${p.nome} - R$ ${p.preco.toFixed(2)}\n`;
        total += p.preco;
    });

    // \ud83d\udcb0 é o dinheiro 💰
    mensagem += `\n\ud83d\udcb0 *Total: R$ ${total.toFixed(2)}*`;

    let url = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada! Chamando produtos...");
    mostrarProdutos("Todos"); 
});
