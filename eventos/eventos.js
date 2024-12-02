const eventos = [
  {
    imagem: "../imagens/quando.jpg",
    titulo: "Quando o Discurso Autoriza a Barbárie",
    descricao: "O espetáculo é resultado de pesquisa da Companhia sobre como o Estado brasileiro, há mais de cinco séculos, desde o início da colonização portuguesa até o atual cenário político-social",
    data: "até 1 de Dezembro",
    local: "Rua Silva Bueno, 1533, Ipiranga",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=137895",
  },
  {
    imagem: "../imagens/ultimo.jpg",
    titulo: "Último Setor",
    descricao: "Combinando elementos da arte povera e uma cenografia composta de vários elementos que remetem a um ferro velho",
    data: "até 1 de Dezembro",
    local: "Avenida Paes de Barros, 955, Mooca",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=138527",
  },
  {
    imagem: "../imagens/onde.webp",
    titulo: "Onde houver Céu",
    descricao: "Aborda temas como a metamorfose, a relação entre a origem da vida e a discussão do tempo presente a partir da relação com passado e futuro",
    data: "até 6 de Dezembro",
    local: "Arquivo Histórico de São Paulo",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=138525",
  },
  
  {
    imagem: "../imagens/obra.jpg",
    titulo: "A Obra",
    descricao: "“A Obra” é um espetáculo de variedades circenses que tem como pano de fundo um canteiro de obras. Nele, três artistas circenses transformam situações cotidianas de uma construção civil em números de acrobacia de solo, acrobacias aéreas, equilíbrios, mímica, música, mágica e palhaçaria",
    data: "até 6 de Dezembro",
    local: " Centro Cultural São Paulo",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=138692",
  },
  {
    imagem: "../imagens/base.jpg",
    titulo: "BASE: uma Corpografia Marginal",
    descricao: "Com uma linguagem coreográfica rica e envolvente, o espetáculo explora a profunda conexão entre corpo, memória e espaço, revelando como nossas experiências corporais são moldadas pelas histórias e contextos que vivemos",
    data: "3 de Dezembro",
    local: "Centro de Referência da Dança de São Paulo – CRDSP",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=138510",
  },
  
  {
    imagem: "../imagens/casa.jpg",
    titulo: "Casasa",
    descricao: " “Casasa”, da Cia. Kawa, é um espetáculo contemporâneo de circo para toda a família, que traz à cena a comicidade e o teatro físico e agrega as habilidades circenses",
    data: "3 de Dezembro",
    local: "Centro Cultural São Paulo - Espaço Mário Chamie (Praça das Bibliotecas)",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=138691",
  },
  {
    imagem: "../imagens/bici.jpg",
    titulo: "O Diário de Duas Bicicletas",
    descricao: "Espetáculo que discutea tradição no corpo, do popular ao erudito.",
    data: "até 2 de Dezembro",
    local: "Centro de Referência da Dança de São Paulo – CRDSP",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=136758",
  },
  {
    imagem: "../imagens/kk.webp",
    titulo: "K-pop Experience",
    descricao: "Programação dedicada a este gênero musical, que mistura elementos do pop, rock, jazz, hip-hop, R&B, dance music e moda.",
    data: "9 de Dezembro",
    local: "Fábricas de Cultura",
    link: "https://www.fabricasdecultura.org.br/kpop/",
  },
  {
    imagem: "../imagens/roda.jpg",
    titulo: "RODA DE JONGO",
    descricao: "O Jongo de Favela convida você para uma roda de dança e música, onde histórias e memórias do Brasil negro ganham vida",
    data: "1 de Dezembro",
    local: "Fábricas de Cultura Brasilândia",
    link: "https://www.fabricasdecultura.org.br/programacao-cultural/?",
  },
  {
    imagem: "../imagens/corpo.jpeg",
    titulo: "O corpo que povoô",
    descricao: "A dançarina Patrícia Ashanti apresenta um espetáculo emocionante de dança contemporânea em que celebra seu corpo",
    data: "30 de Novembro",
    local: "Fábricas de Cultura",
    link: "https://www.fabricasdecultura.org.br/programacao-cultural/?",
  },
  {
    imagem: "../imagens/se.png",
    titulo: "A Pequena Sereia em Dança",
    descricao: "A Academia Fama traz neste espetáculo uma adaptação da conhecida obra A Pequena Sereia em uma versão totalmente dançada",
    data: " 15 de Dezembro",
    local: "Teatro Liberdade",
    link: "https://www.sampaonline.com.br/cultura/danca_em_sp.php",
  },
  {
    imagem: "../imagens/anunci.jpg",
    titulo: "Anunciação",
    descricao: "Conceito de corpo-memória para fazer perguntas do tipo: como é que a gente se movia antes do rapto e de chegarmos nesse país no período escravocrata",
    data: "5 de Dezembro",
    local: "Centro de Culturas Negras Mãe",
    link: "https://www.sampaonline.com.br/cultura/espetaculo.php?id=137889",
  },
];

const gridContainer = document.getElementById("grid-container");

eventos.forEach((evento) => {
  const card = document.createElement("div");
  card.classList.add("evento-card");

  card.innerHTML = `
    <img src="${evento.imagem}" alt="${evento.titulo}">
    <h2>${evento.titulo}</h2>
    <p>${evento.descricao}</p>
    <p><strong>Data:</strong> ${evento.data}</p>
    <p><strong>Local:</strong> ${evento.local}</p>
    <a href="${evento.link}" class="btn-evento">Saiba Mais</a>
  `;

  gridContainer.appendChild(card);
});
