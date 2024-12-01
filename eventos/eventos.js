const eventos = [
  {
    imagem: "../imagens/evento1.jpg",
    titulo: "Festival de Street Dance",
    descricao: "Venha dançar com os melhores grupos de street dance da cidade.",
    data: "10 de Dezembro de 2024",
    local: "Parque Ibirapuera",
    link: "#",
  },
  {
    imagem: "../imagens/evento2.jpg",
    titulo: "Mostra de Dança Contemporânea",
    descricao: "Uma exibição de danças criativas e inovadoras.",
    data: "15 de Janeiro de 2025",
    local: "Centro Cultural São Paulo",
    link: "#",
  },
  {
    imagem: "../imagens/evento3.jpg",
    titulo: "Zumba no Parque",
    descricao: "Uma aula ao ar livre para movimentar o corpo e a alma.",
    data: "5 de Fevereiro de 2025",
    local: "Parque Villa-Lobos",
    link: "#",
  },
  {
    imagem: "../imagens/evento4.jpg",
    titulo: "Dança Brasileira ao Ar Livre",
    descricao: "Celebre a cultura brasileira com ritmos vibrantes.",
    data: "20 de Março de 2025",
    local: "Praça da República",
    link: "#",
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
