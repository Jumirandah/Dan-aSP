document.addEventListener("DOMContentLoaded", () => {
    const categorias = [
        {
            id: "bale", // Adicionado um ID único para a categoria
            nome: "Balé",
            aulas: [
                { nome: "Balé Clássico", local: "Centro Cultural", data: "01/12/2024", imagem: "/imagens/sambarock.jpg" },
                { nome: "Balé Moderno", local: "Teatro Municipal", data: "03/12/2024", imagem: "../imagens/bale2.jpg" },
            ]
        },
        {
            id: "street-dance", // Outro ID único
            nome: "Street Dance",
            aulas: [
                { nome: "Hip Hop", local: "Praça das Artes", data: "05/12/2024", imagem: "../imagens/street1.jpg" },
                { nome: "Breaking", local: "Centro de Esportes", data: "07/12/2024", imagem: "../imagens/street2.jpg" },
            ]
        },
        {
            id: "contemporaneo",
            nome: "Dança Contemporânea",
            aulas: [
                { nome: "Performance Livre", local: "Espaço Alternativo", data: "10/12/2024", imagem: "../imagens/contemp1.jpg" },
                { nome: "Improvisação", local: "Galeria de Arte", data: "12/12/2024", imagem: "../imagens/contemp2.jpg" },
            ]
        },
        {
            id: "dancas-de-salao",
            nome: "Danças de Salão",
            aulas: [
                { nome: "Forró do Bom", local: "Vale do Anhagabaú", data: "Todas as quintas, às 19h", imagem: "../imagens/forro.jpg" },
                { nome: "Gafieira na Adoniran", local: "CCSP", data: "Todas as quintas, às 19h", imagem: "../imagens/contemp2.jpg" },
            ]
        },
    ];

    const categoriasContainer = document.getElementById("categorias-container");

    categorias.forEach(categoria => {
        const categoriaDiv = document.createElement("div");
        categoriaDiv.classList.add("categoria");
        categoriaDiv.id = categoria.id; // Atribui o ID único para cada seção

        const tituloCategoria = document.createElement("h2");
        tituloCategoria.textContent = categoria.nome;
        categoriaDiv.appendChild(tituloCategoria);

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        categoria.aulas.forEach(aula => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${aula.imagem}" alt="${aula.nome}">
                <div class="card-content">
                    <h3>${aula.nome}</h3>
                    <p>Local: ${aula.local}</p>
                    <p>Data: ${aula.data}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });

        categoriaDiv.appendChild(cardContainer);
        categoriasContainer.appendChild(categoriaDiv);
    });
});
