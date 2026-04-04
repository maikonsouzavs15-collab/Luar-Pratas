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
{nome:"Piercing Umbigo Cristal Pino Antialérgico", preco:60.00, img:"assets/brinco/brinco49.png", categoria:"brinco"},
{nome:"Piercing Umbigo Coração Pino Antialérgico", preco:60.00, img:"assets/brinco/brinco50.png", categoria:"brinco"},
{nome:"Piercing Umbigo Coração aberto Pino Antialérgico", preco:60.00, img:"assets/brinco/brinco51.png", categoria:"brinco"},
{nome:"Piercing para Orelha Clássico Bolinhas", preco:40.00, img:"assets/brinco/brinco52.png", categoria:"brinco"},
{nome:"Brinco Zircônia Estrela 4mm Com Corrente Veneziana", preco:90.00, img:"assets/brinco/brinco53.png", categoria:"brinco"},
{nome:"Brinco Olho Grego Com Veneziana", preco:90.00, img:"assets/brinco/brinco54.png", categoria:"brinco"},
{nome:"Brinco Zircônia 4mm Com Corrente Veneziana", preco:90.00, img:"assets/brinco/brinco55.png", categoria:"brinco"},
{nome:"Brinco Boreal Escama Sereia Corrente Veneziana", preco:90.00, img:"assets/brinco/brinco56.png", categoria:"brinco"},
{nome:"Piercing Coração 9Mm Com Infinito Cravejado Para Orelha", preco:40.00, img:"assets/brinco/brinco57.png", categoria:"brinco"},
{nome:"Piercing Nariz 3 Cristais Zircônias", preco:35.00, img:"assets/brinco/brinco58.png", categoria:"brinco"},
{nome:"Piercing Nariz Lua Lisa 1Mm", preco:35.00, img:"assets/brinco/brinco59.png", categoria:"brinco"},
{nome:"Piercing Nariz Estrela", preco:35.00, img:"assets/brinco/brinco60.png", categoria:"brinco"},
{nome:"Piercing Coração 9Mm Com Cruz Cravejada Para Orelha", preco:45.00, img:"assets/brinco/brinco61.png", categoria:"brinco"},
{nome:"Piercing Cristal Orelha, Cartilagem, Trágus", preco:45.00, img:"assets/brinco/brinco62.png", categoria:"brinco"},
{nome:"Piercing Coração Bolinha Orelha, Cartilagem, Trágus", preco:40.00, img:"assets/brinco/brinco63.png", categoria:"brinco"},
{nome:"Piercing Orelha Cartilagem Em V Zircônias Cravejadas", preco:40.00, img:"assets/brinco/brinco64.png", categoria:"brinco"},
{nome:"Piercing Orelha Cartilagem Trabalhado Cravejado Zircônia", preco:40.00, img:"assets/brinco/brinco65.png", categoria:"brinco"},
{nome:"Piercing Orelha Cadeado Cravejado", preco:40.00, img:"assets/brinco/brinco66.png", categoria:"brinco"},
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
{nome:"Escapulário 60cm São Bento Elo Cadeado", preco:170.00, img:"assets/colares/colar40.png", categoria:"colar"},
{nome:"Escapulário 60Cm Estrela De Davi", preco:160.00, img:"assets/colares/colar41.png", categoria:"colar"},
{nome:"Escapulário 60Cm Amar Mar", preco:130.00, img:"assets/colares/colar42.png", categoria:"colar"},
{nome:"Colar 60cm Zircônias Coloridas", preco:120.00, img:"assets/colares/colar43.png", categoria:"colar"},
{nome:"Colar 45Cm Sagrado Coração De Jesus", preco:120.00, img:"assets/colares/colar44.png", categoria:"colar"},
    // ----------------- PULSEIRAS -----------------
{nome:"Pulseira Elo Cadeado 19cm",preco:70.00,img:"assets/pulseiras/pulseira1.png",categoria:"pulseira"},
{nome:"Pulseira Diamantada Laminada 18cm",preco:70.00,img:"assets/pulseiras/pulseira2.png",categoria:"pulseira"},
{nome:"Pulseira 18Cm Elo Cadeado Fio 0,7",preco:70.00,img:"assets/pulseiras/pulseira3.png",categoria:"pulseira"},
{nome:"Pulseira Elo Cartier Clássica Bolinhas 18cm",preco:70.00,img:"assets/pulseiras/pulseira4.png",categoria:"pulseira"},
{nome:"Pulseira Pérolas 18cm Elo Cartier",preco:75.00,img:"assets/pulseiras/pulseira5.png",categoria:"pulseira"},
{nome:"Pulseira 18Cm Elo Cadeado Clássica",preco:75.00,img:"assets/pulseiras/pulseira6.png",categoria:"pulseira"},
{nome:"Pulseira 20Cm Elo Cadeado Fio 1,20",preco:75.00,img:"assets/pulseiras/pulseira7.png",categoria:"pulseira"},
{nome:"Pulseira Pérola 18cm Elo Cadeado",preco:75.00,img:"assets/pulseiras/pulseira8.png",categoria:"pulseira"},
{nome:"Bracelete 18cm Fio Quadrado 2mm Trava De Segurança",preco:75.00,img:"assets/pulseiras/pulseira9.png",categoria:"pulseira"},
{nome:"Pulseira Pérola 18Cm Elo Cadeado 3 Trevos Pérolas 10Mm",preco:80.00,img:"assets/pulseiras/pulseira10.png",categoria:"pulseira"},
{nome:"Pulseira Piastrine 18Cm",preco:80.00,img:"assets/pulseiras/pulseira11.png",categoria:"pulseira"},
{nome:"Pulseira Cruz Elo Oval 18cm com Pingente",preco:80.00,img:"assets/pulseiras/pulseira12.png",categoria:"pulseira"},
{nome:"Pulseira 18Cm Van Cleef Trevo 10Mm",preco:80.00,img:"assets/pulseiras/pulseira13.png",categoria:"pulseira"},
{nome:"Pulseira Van Cleef 18Cm Elo Português Trevo 15Mm Sextavado",preco:85.00,img:"assets/pulseiras/pulseira14.png",categoria:"pulseira"},
{nome:"Bracelete Oval 18cm Fio Torcido 2mm",preco:85.00,img:"assets/pulseiras/pulseira15.png",categoria:"pulseira"},
{nome:"Bracelete 18cm Oval Lateral Frisado com Trava De Segura",preco:85.00,img:"assets/pulseiras/pulseira16.png",categoria:"pulseira"},
{nome:"Pulseira 18cm Onda do mar Linha Praia",preco:90.00,img:"assets/pulseiras/pulseira17.png",categoria:"pulseira"},
{nome:"Pulseira Terço 18cm Elo Cartier Pérolas",preco:90.00,img:"assets/pulseiras/pulseira18.png",categoria:"pulseira"},
{nome:"Pulseira Olho Grego Elo Portugês 18cm",preco:90.00,img:"assets/pulseiras/pulseira19.png",categoria:"pulseira"},
{nome:"Pulseira Corações Elo Português 18cm",preco:90.00,img:"assets/pulseiras/pulseira20.png",categoria:"pulseira"},
{nome:"Pulseira Nossa Senhora Aparecida 18cm Elo Cadeado",preco:90.00,img:"assets/pulseiras/pulseira21.png",categoria:"pulseira"},
{nome:"Pulseira Zircônias Elo Português Trevos 18cm",preco:90.00,img:"assets/pulseiras/pulseira22.png",categoria:"pulseira"},
{nome:"Pulseira Medalha Oração Pai Nosso 18cm",preco:90.00,img:"assets/pulseiras/pulseira23.png",categoria:"pulseira"},
{nome:"Pulseira Medalha São Bento 18cm Elo Cadeado",preco:90.00,img:"assets/pulseiras/pulseira24.png",categoria:"pulseira"},
    // ----------------- ANÉIS -----------------
{nome:"Anel Texturizado Zircônias",preco:45.00,img:"assets/anel/anel1.png",categoria:"anel"},
{nome:"Anel Pingente Gota",preco:45.00,img:"assets/anel/anel2.png",categoria:"anel"},
{nome:"Anel Regulável Estrela + Coração",preco:55.00,img:"assets/anel/anel3.png",categoria:"anel"},
{nome:"Anel Solitário Zircônia 5mm Clássico",preco:55.00,img:"assets/anel/anel4.png",categoria:"anel"},
{nome:"Anel Solitário Zircônia Cristal Clássico",preco:50.00,img:"assets/anel/anel5.png",categoria:"anel"},
{nome:"Anel Solitário Cristal 3Mm Zircônia",preco:50.00,img:"assets/anel/anel6.png",categoria:"anel"},
{nome:"Anel Coração Detalhado Clássico",preco:55.00,img:"assets/anel/anel7.png",categoria:"anel"},
{nome:"Anel Navetes Zircônias Cravejadas",preco:55.00,img:"assets/anel/anel8.png",categoria:"anel"},
{nome:"Anel Solitário Quadrado Cravejado",preco:55.00,img:"assets/anel/anel9.png",categoria:"anel"},
{nome:"Anel Solitário Gota Zircônia",preco:55.00,img:"assets/anel/anel10.png",categoria:"anel"},
{nome:"Anel Ondulado Aro Torcido",preco:55.00,img:"assets/anel/anel11.png",categoria:"anel"},
{nome:"Anel Zircônias Cravejadas",preco:55.00,img:"assets/anel/anel12.png",categoria:"anel"},
{nome:"Anel V Cravejado Zircônias",preco:55.00,img:"assets/anel/anel13.png",categoria:"anel"},
{nome:"Anel Aparador Cravejado Cristais",preco:60.00,img:"assets/anel/anel14.png",categoria:"anel"},
{nome:"Anel Aparador Zircônias Cristais",preco:60.00,img:"assets/anel/anel15.png",categoria:"anel"},
{nome:"Anel Aparador Coração Aro Cravejado",preco:60.00,img:"assets/anel/anel16.png",categoria:"anel"},
{nome:"Anel Aparador Elos Cravejados",preco:60.00,img:"assets/anel/anel17.png",categoria:"anel"},
{nome:"Anel Solitário Zircônia Coração 4mm Aro Cravejado",preco:60.00,img:"assets/anel/anel18.png",categoria:"anel"},
{nome:"Anel Regulável Coração",preco:60.00,img:"assets/anel/anel19.png",categoria:"anel"},
{nome:"Anel Coração Cravejado Zircônias Cristais",preco:60.00,img:"assets/anel/anel20.png",categoria:"anel"},
{nome:"Anel Aparador Zig Zag Com Zircônias",preco:65.00,img:"assets/anel/anel21.png",categoria:"anel"},
{nome:"Anel Infinito Aro Cravejado Cristais",preco:65.00,img:"assets/anel/anel22.png",categoria:"anel"},
{nome:"Anel Robusto Com Zircônia",preco:65.00,img:"assets/anel/anel23.png",categoria:"anel"},
{nome:"Anel Torcido Com Zircônias Coloridas",preco:65.00,img:"assets/anel/anel24.png",categoria:"anel"},
{nome:"Anel Base Reta Clássico",preco:70.00,img:"assets/anel/anel25.png",categoria:"anel"},
{nome:"Anel Onda Cravejado Zirconias Coloridas",preco:70.00,img:"assets/anel/anel26.png",categoria:"anel"},
{nome:"Anel Aparador Corações Aro Cravejado",preco:70.00,img:"assets/anel/anel27.png",categoria:"anel"},
{nome:"Anel Arabesco Trabalhado Com Zircônias",preco:75.00,img:"assets/anel/anel28.png",categoria:"anel"},
{nome:"Anel Aparador Cravejado Cristais",preco:75.00,img:"assets/anel/anel29.png",categoria:"anel"},
{nome:"Anel Solitário Com Aro Cravejado Clássico",preco:75.00,img:"assets/anel/anel30.png",categoria:"anel"},
{nome:"Anel Solitário Duplo Aro Cravejado",preco:75.00,img:"assets/anel/anel31.png",categoria:"anel"},
{nome:"Anel Solitário Aro Zircônias Cravejadas",preco:75.00,img:"assets/anel/anel32.png",categoria:"anel"},
{nome:"Anel Solitário Zircônia 4Mm Aro Renda Italiana",preco:80.00,img:"assets/anel/anel33.png",categoria:"anel"},
{nome:"Anel V Cravejado Cristais Zirconias",preco:80.00,img:"assets/anel/anel34.png",categoria:"anel"},
{nome:"Anel Estrela Renda Italiana Trabalhado Com Zircônia",preco:85.00,img:"assets/anel/anel35.png",categoria:"anel"},
{nome:"Anel Cravejado Zircônias Cristais V",preco:85.00,img:"assets/anel/anel36.png",categoria:"anel"},
{nome:"Anel Cobra Cravejado Com Zircônias",preco:85.00,img:"assets/anel/anel37.png",categoria:"anel"},
{nome:"Anel Coração Cravejado",preco:85.00,img:"assets/anel/anel38.png",categoria:"anel"},
{nome:"Anel Rendado Maxi Trabalhado",preco:95.00,img:"assets/anel/anel39.png",categoria:"anel"},
{nome:"Anel Renda Corações",preco:95.00,img:"assets/anel/anel40.png",categoria:"anel"},

    // ----------------- PINGENTES -----------------
{nome:"Pingente Coração Detalhado",preco:35.00,img:"assets/pingente/pingente1.png",categoria:"pingente"},
{nome:"Pingente Gota Cravejada",preco:35.00,img:"assets/pingente/pingente2.png",categoria:"pingente"},
{nome:"Pingente Cruz Lisa Clássica",preco:35.00,img:"assets/pingente/pingente3.png",categoria:"pingente"},
{nome:"Pingente Coração Detalhado",preco:35.00,img:"assets/pingente/pingente4.png",categoria:"pingente"},
{nome:"Pingente Medalha Signos",preco:40.00,img:"assets/pingente/pingente5.png",categoria:"pingente"},
{nome:"Pingente Gota Detalhada",preco:40.00,img:"assets/pingente/pingente6.png",categoria:"pingente"},
{nome:"Pingente Espírito Santo",preco:40.00,img:"assets/pingente/pingente7.png",categoria:"pingente"},
{nome:"Pingente Olho Grego Com Zircônias Cravejadas",preco:40.00,img:"assets/pingente/pingente8.png",categoria:"pingente"},
{nome:"Pingente Zircônia Clássica",preco:40.00,img:"assets/pingente/pingente9.png",categoria:"pingente"},
{nome:"Pingente Coração Filha Infinito 8Mm",preco:40.00,img:"assets/pingente/pingente10.png",categoria:"pingente"},
{nome:"Pingente Gota Zircônia Clássica!",preco:40.00,img:"assets/pingente/pingente11.png",categoria:"pingente"},
{nome:"Pingente Coração Zircônia 6mm",preco:40.00,img:"assets/pingente/pingente12.png",categoria:"pingente"},
{nome:"Pingente Espírito Santo Zircônia Cristal",preco:40.00,img:"assets/pingente/pingente13.png",categoria:"pingente"},
{nome:"Pingente Mãe De Menina Com Zircônia",preco:40.00,img:"assets/pingente/pingente14.png",categoria:"pingente"},
{nome:"Pingente Mãe De Menino Com Zircônia Cristal",preco:40.00,img:"assets/pingente/pingente15.png",categoria:"pingente"},
{nome:"Pingente Coração Cruz Cravejado",preco:40.00,img:"assets/pingente/pingente16.png",categoria:"pingente"},
{nome:"Pingente Gota Fio Trançado",preco:45.00,img:"assets/pingente/pingente17.png",categoria:"pingente"},
{nome:"Pingente X 21Mm Com Zircônia",preco:45.00,img:"assets/pingente/pingente18.png",categoria:"pingente"},
{nome:"Pingente Círculo Fio Torcido",preco:45.00,img:"assets/pingente/pingente19.png",categoria:"pingente"},
{nome:"Pingente Mandala 20Mm Vazada Com Resina",preco:45.00,img:"assets/pingente/pingente20.png",categoria:"pingente"},
{nome:"Pingente Menino Com Zircônia",preco:45.00,img:"assets/pingente/pingente21.png",categoria:"pingente"},
{nome:"Pingente Menina Com Zircônia Mãe De Menina",preco:45.00,img:"assets/pingente/pingente22.png",categoria:"pingente"},
{nome:"Pingente Gota Trabalhada Cristais Zircônias",preco:50.00,img:"assets/pingente/pingente23.png",categoria:"pingente"},
{nome:"Pingente Círculo Volta Cristais Zircônias",preco:50.00,img:"assets/pingente/pingente24.png",categoria:"pingente"},
{nome:"Pingente Coração Torcido Com Zircônia",preco:50.00,img:"assets/pingente/pingente25.png",categoria:"pingente"},
{nome:"Pingente Pézinho Baby 15Mm",preco:50.00,img:"assets/pingente/pingente26.png",categoria:"pingente"},
{nome:"Pingente Árvore Da Vida Com Petálas Em Zircônia",preco:50.00,img:"assets/pingente/pingente27.png",categoria:"pingente"},
{nome:"Pingente Jesus Cruz 25Mm",preco:50.00,img:"assets/pingente/pingente28.png",categoria:"pingente"},
{nome:"Pingente Coração Renda Italiana",preco:50.00,img:"assets/pingente/pingente29.png",categoria:"pingente"},
{nome:"Pingente Cruz 22 X 31Mm",preco:50.00,img:"assets/pingente/pingente30.png",categoria:"pingente"},
{nome:"Pingente Renda Italiana Bola",preco:50.00,img:"assets/pingente/pingente31.png",categoria:"pingente"},
{nome:"Pingente Cruz Emoldurada 19Mm",preco:50.00,img:"assets/pingente/pingente32.png",categoria:"pingente"},
{nome:"Pingente Cristais Clássico Zircônias",preco:50.00,img:"assets/pingente/pingente33.png",categoria:"pingente"},
{nome:"Pingente Chanel Zircônias Cravejado",preco:55.00,img:"assets/pingente/pingente34.png",categoria:"pingente"},
{nome:"Berloque Coração Cruz Zircônias Cristais",preco:50.00,img:"assets/pingente/pingente35.png",categoria:"pingente"},
{nome:"Pingente Estrela Cristais",preco:55.00,img:"assets/pingente/pingente36.png",categoria:"pingente"},
{nome:"Pingente Coração 19mm Aro Torcido",preco:55.00,img:"assets/pingente/pingente37.png",categoria:"pingente"},
{nome:"Pingente Gota Renda Italiana",preco:60.00,img:"assets/pingente/pingente38.png",categoria:"pingente"},
{nome:"Pingente Cruz Cravejada 22Mm",preco:60.00,img:"assets/pingente/pingente39.png",categoria:"pingente"},
{nome:"Pingente Coração 15Mm Mãe Com Zircônia",preco:60.00,img:"assets/pingente/pingente40.png",categoria:"pingente"},
{nome:"Pingente Medalha São Jorge 15Mm Com Zircônia",preco:60.00,img:"assets/pingente/pingente41.png",categoria:"pingente"},
{nome:"Pingente Medalha Coração Volta Cravejada 11mm",preco:60.00,img:"assets/pingente/pingente42.png",categoria:"pingente"},
{nome:"Pingente Redondo Inteiro Cravejado Zircônias Cristais",preco:65.00,img:"assets/pingente/pingente43.png",categoria:"pingente"},
{nome:"Pingente Medalha Deus É Amor",preco:65.00,img:"assets/pingente/pingente44.png",categoria:"pingente"},
{nome:"Pingente Cruz Zircônia Renda Italiana",preco:65.00,img:"assets/pingente/pingente45.png",categoria:"pingente"},
{nome:"Pingente Círculo Inteiro Cravejado Zircônias",preco:65.00,img:"assets/pingente/pingente46.png",categoria:"pingente"},
{nome:"Pingente Oval Trançado Cravejado Zircônias",preco:70.00,img:"assets/pingente/pingente47.png",categoria:"pingente"},
{nome:"Pingente Estrela Do Mar Prata Boho",preco:70.00,img:"assets/pingente/pingente48.png",categoria:"pingente"},
{nome:"Pingente Anjo Cravejado Com Zircônias",preco:70.00,img:"assets/pingente/pingente49.png",categoria:"pingente"},
{nome:"Pingente Nossa Senhora Aparecida Volta Cravejada 15Mm",preco:75.00,img:"assets/pingente/pingente50.png",categoria:"pingente"},
{nome:"Pingente Coração Cravejado 15Mm Nossa Senhora Aparecida",preco:75.00,img:"assets/pingente/pingente51.png",categoria:"pingente"},
{nome:"Pingente Pandora Círculo Cravejado joalheria",preco:75.00,img:"assets/pingente/pingente52.png",categoria:"pingente"},

    // ----------------- PERSONALIZADOS -----------------
{nome:"Personalizado Pingente Coração Com Ate 13 Caracteres",preco:75.00,img:"assets/personalizado/personalizado1.png",categoria:"personalizado"},
{nome:"Personalizado Pingente 2 Corações 13 carácteres",preco:85.00,img:"assets/personalizado/personalizado2.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira Infantil Placa Coroa 14Cm 16 carácteres",preco:150.00,img:"assets/personalizado/personalizado3.png",categoria:"personalizado"},
{nome:"Personalizado Colar Gravatinha Coração 13 carácteres",preco:210.00,img:"assets/personalizado/personalizado4.png",categoria:"personalizado"},
{nome:"Personalizado Pingente Medalha Dupla Coração 13 carácteres",preco:90.00,img:"assets/personalizado/personalizado5.png",categoria:"personalizado"},
{nome:"Personalizado Pingente Aro Até 4 Nomes 10 carácteres",preco:90.00,img:"assets/personalizado/personalizado6.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira 2 Corações Gravados 18Cm 13 carácteres",preco:160.00,img:"assets/personalizado/personalizado7.png",categoria:"personalizado"},
{nome:"Personalizado Colar Nome Fonte Disney 13 carácteres",preco:170.00,img:"assets/personalizado/personalizado8.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira Infantil 14Cm Placa Ursinho 16 carácteres",preco:160.00,img:"assets/personalizado/personalizado9.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira Infantil 14Cm Placa Nossa Senhora 16 carácteres",preco:160.00,img:"assets/personalizado/personalizado10.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira 18Cm Letra Inicial",preco:150.00,img:"assets/personalizado/personalizado11.png",categoria:"personalizado"},
{nome:"Personalizado Colar Coração Até 13 Caracteres",preco:160.00,img:"assets/personalizado/personalizado12.png",categoria:"personalizado"},
{nome:"Personalizado Colar Nome Fonte Baby 13 carácteres",preco:170.00,img:"assets/personalizado/personalizado13.png",categoria:"personalizado"},
{nome:"Personalizado Colar 45Cm Com Data Ano Especial",preco:170.00,img:"assets/personalizado/personalizado14.png",categoria:"personalizado"},
{nome:"Personalizado Colar Nome Fonte Poesia 13 carácteres",preco:170.00,img:"assets/personalizado/personalizado15.png",categoria:"personalizado"},
{nome:"Personalizado Colar Nome Simples Fonte Fina 13 carácteres",preco:170.00,img:"assets/personalizado/personalizado16.png",categoria:"personalizado"},
{nome:"Personalizado Colar Minnie 10 carácteres",preco:190.00,img:"assets/personalizado/personalizado17.png",categoria:"personalizado"},
{nome:"Personalizado Anel Coração Até 11 Caracteres Numeração",preco:210.00,img:"assets/personalizado/personalizado18.png",categoria:"personalizado"},
{nome:"Personalizado Aliança Gravação Nome Ou Lisa 25 carácteres (1 un)",preco:215.00,img:"assets/personalizado/personalizado19.png",categoria:"personalizado"},
{nome:"Personalizado Colar Nome Com Até 10 Letras",preco:215.00,img:"assets/personalizado/personalizado20.png",categoria:"personalizado"},
{nome:"Personalizado Colar Minnie E Mickey 10 carácteres",preco:210.00,img:"assets/personalizado/personalizado21.png",categoria:"personalizado"},
{nome:"Personalizado Pulseira 18Cm Nascimento Com 5 Medalhas",preco:210.00,img:"assets/personalizado/personalizado22.png",categoria:"personalizado"},
{nome:"Personalizado Colar Letrão Duplo Sobreposto Duas Iniciais",preco:210.00,img:"assets/personalizado/personalizado23.png",categoria:"personalizado"},
{nome:"Personalizado Colar 45Cm Casal Filhos 13 carácteres",preco:210.00,img:"assets/personalizado/personalizado24.png",categoria:"personalizado"},
{nome:"Personalizado Escapulario 60Cm Coração Nomes E Datas 20 carácteres",preco:220.00,img:"assets/personalizado/personalizado25.png",categoria:"personalizado"},
{nome:"Personalizado Colar Inicial Com 4Cm",preco:245.00,img:"assets/personalizado/personalizado26.png",categoria:"personalizado"},

    // ----------------- MASCULINO -----------------
// Linha Masculina (correntes + pulseiras + escapulários masculinos)
{nome:"Escapulário 60Cm Sagrado Coração De Jesus E Nossa Senhora", preco:150.00, img:"assets/linha masculina/linha masculina1.png", categoria:"masculino"},
{nome:"Pulseira Masculina Elo 5X1 20cm", preco:150.00, img:"assets/linha masculina/linha masculina2.png", categoria:"masculino"},
{nome:"Escapulário Deus É Fiel 60cm", preco:150.00, img:"assets/linha masculina/linha masculina3.png", categoria:"masculino"},
{nome:"Escapulário 60cm Sagrado Coração E Nossa Sra Do Carmo", preco:170.00, img:"assets/linha masculina/linha masculina4.png", categoria:"masculino"},
{nome:"Corrente Masculina 70cm Elo Cartier", preco:190.00, img:"assets/linha masculina/linha masculina5.png", categoria:"masculino"},
{nome:"Pulseira Masculina 20Cm Elo 3X1 4Mm Espessura-Fio 0.80", preco:190.00, img:"assets/linha masculina/linha masculina6.png", categoria:"masculino"},
{nome:"Corrente Masculina 60Cm Elo Gucci 2Mm Espessura Fio 0,6", preco:195.00, img:"assets/linha masculina/linha masculina7.png", categoria:"masculino"},
{nome:"Corrente Masculina 60Cm Elo 1X1 2Mm Espessura", preco:210.00, img:"assets/linha masculina/linha masculina8.png", categoria:"masculino"},
{nome:"Corrente Masculina 70cm Elo 1X1 2mm Espessura", preco:220.00, img:"assets/linha masculina/linha masculina9.png", categoria:"masculino"},
{nome:"Corrente Elo Grumet 60Cm 3Mm Espessura Masculina", preco:255.00, img:"assets/linha masculina/linha masculina10.png", categoria:"masculino"},
{nome:"Corrente Masculina 70Cm 3X1 2mm Espessura", preco:255.00, img:"assets/linha masculina/linha masculina11.png", categoria:"masculino"},
]
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
