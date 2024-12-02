document.addEventListener("DOMContentLoaded", () => {
    const categorias = [
        {
            id: "danças-brasileiras",
            nome: "Danças brasileiras",
            aulas: [
                { 
                    nome: "Samba Rock", 
                    local: "Vale do Anhangabaú", 
                    data: "Sextas às 19h", 
                    imagem: "../imagens/rock.jpg",
                    link: "https://www.instagram.com/reel/DB0yX74PJwy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
                },
                { 
                    nome: "Forró", 
                    local: "Vale do Anhangabaú", 
                    data: "Quintas das 20h às 22h", 
                    imagem: "../imagens/f1.jpg",
                    link: "https://www.instagram.com/forrodo.bom/"
                },
                { 
                    nome: "Charme", 
                    local: "Vale do Anhangabaú", 
                    data: "Segunda às 20h", 
                    imagem: "../imagens/charme.jpg",
                    link: "https://www.instagram.com/sampacharme_sp/"
                },
                { 
                    nome: "Dança dos Povos", 
                    local: "Vale do Anhangabaú", 
                    data: "Sextas às 16h", 
                    imagem: "../imagens/povo.webp",
                    link: "https://www.novoanhangabau.com.br/eventos/danca-dos-povos-43"
                },
               
            ]
        },
        {
            id: "street-dance", // ID único
            nome: "Street Dance",
            aulas: [
                { 
                    nome: "Street Dance", 
                    local: "Fábrica de Cultura Parque Belém", 
                    data: "Terças e Quintas das 14h às 17h", 
                    imagem: "/imagens/s1.webp",
                    link: "https://www.fabricadecultura.org.br/node/1181"
                },
                { 
                    nome: "HIP HOP", 
                    local: "Vale do Anhagabaú", 
                    data: "Terças às 18h", 
                    imagem: "/imagens/s2.jpg",
                    link: "https://www.novoanhangabau.com.br/eventos/hip-hop-75"
                },
                { 
                    nome: "Twerk", 
                    local: "Vale do Anhagabaú", 
                    data: "Quintas às 19h", 
                    imagem: "/imagens/s3.jpg",
                    link: "https://www.novoanhangabau.com.br/eventos/twerk-5"
                },
                { 
                    nome: "Street Dance", 
                    local: "Fábrica de Cultura Parque Belém", 
                    data: "Sábados no período da tarde", 
                    imagem: "/imagens/s4.jpg",
                    link: "https://www.fabricadecultura.org.br/node/7672"
                },
                { 
                    nome: "Street Dance", 
                    local: "Fábrica de Cultura Vila Curuçá", 
                    data: "Terças e Quintas das 14h às 17h", 
                    imagem: "/imagens/s5.jpg",
                    link: "https://www.fabricadecultura.org.br/index.php/node/1039"
                },
            ]
        },
        {
            id: "bale",
            nome: "Balé",
            aulas: [
                { 
                    nome: "Balé Clássico", 
                    local: "Fábrica de Cultura Vila Curuçá", 
                    data: "Terças e Quintas das 14h às 17h", 
                    imagem: "/imagens/balé1.jpg",
                    link: "https://www.fabricadecultura.org.br/node/1031"
                },
                { 
                    nome: "Balé Clássico", 
                    local: "Fábrica de Cultura Itaim Paulista", 
                    data: "Terças e Quintas das 14h às 17h", 
                    imagem: "/imagens/balé2.jpg",
                    link: "https://www.fabricadecultura.org.br/index.php/node/7679"
                },
                { 
                    nome: "Balé Moderno", 
                    local: "Fábrica de Cultura Cidade Tiradentes", 
                    data: "Quartas e Sextas das 9h às 12h", 
                    imagem: "../imagens/bale3.jpg",
                    link: "https://www.fabricadecultura.org.br/node/1216"
                },
                { 
                    nome: "Balé Clássico", 
                    local: "Fábrica de Cultura Vila Curuçá", 
                    data: "Quartas e Sextas das 9h as 12h", 
                    imagem: "/imagens/bale4.jpg",
                    link: "https://www.fabricadecultura.org.br/index.php/node/1024"
                },
                { 
                    nome: "Balé Moderno", 
                    local: "Fábrica de Cultura Sapopemba", 
                    data: "Quartas e Sextas das 9h às 12h", 
                    imagem: "../imagens/bale5.jpeg",
                    link: "https://www.fabricadecultura.org.br/node/1071"
                },
                { 
                    nome: "Balé Clássico", 
                    local: "Fábrica de Cultura Parque do Belém", 
                    data: "Sábados das 9h às 12h", 
                    imagem: "../imagens/bale6.jpg",
                    link: "https://www.fabricadecultura.org.br/node/1195"
                },
                { 
                    nome: "Balé Clássico", 
                    local: "Fábrica de Cultura Cidade Tiradentes", 
                    data: "Período da Manhã - Terça e Quinta ", 
                    imagem: "../imagens/bale7.jpeg",
                    link: "https://www.fabricadecultura.org.br/node/1211"
                },
            ]
        },
       
        {
            id: "contemporaneo",
            nome: "Dança Contemporânea",
            aulas: [
                { 
                    nome: "Dança Contemporânea", 
                    local: "Fábrica de Cultura Sapopemba", 
                    data: "Quartas, das 18h às 21h", 
                    imagem: "/imagens/c1.jpeg",
                    link: "https://www.fabricadecultura.org.br/node/1109"
                },
                { 
                    nome: "Dança Contemporânea", 
                    local: "Fábrica de Cultura Itaim Paulista", 
                    data: " Quartas e Sextas, das 09h às 12h", 
                    imagem: "/imagens/c2.jpg",
                    link: "https://www.fabricadecultura.org.br/node/7692"
                },
                { 
                    nome: "Dança Contemporânea", 
                    local: "Fábrica de Cultura Cidade Tiradentes", 
                    data: "Período Noturno - Terça", 
                    imagem: "/imagens/c3.webp",
                    link: "https://www.fabricadecultura.org.br/node/1243"
                },
            ]
        },
        {
            id: "dancas-de-salao",
            nome: "Danças de Salão",
            aulas: [
                { 
                    nome: "Gafieira", 
                    local: "Centro Cultural de São Paulo", 
                    data: "Quartas das 12h às 13h30", 
                    imagem: "/imagens/ds1.jpg",
                    link: "https://centrocultural.sp.gov.br/festival-de-solos-do-ccsp-2/"
                },
                { 
                    nome: "Forró", 
                    local: "Vale do Anhangabaú", 
                    data: "Quintas das 20h às 22h", 
                    imagem: "/imagens/ds2.jpg",
                    link: "https://www.instagram.com/forrodo.bom/"
                },
                { 
                    nome: "Tango", 
                    local: "Vale do Anhangabaú", 
                    data: "Sábados às 17h", 
                    imagem: "/imagens/ds3.webp",
                    link: "https://www.novoanhangabau.com.br/eventos/tango-na-rua-3"
                },
                { 
                    nome: "Danças de Salão", 
                    local: "CEL Padre José de Anchieta", 
                    data: "17/12/2024", 
                    imagem: "/imagens/ds4.webp",
                    link: "https://capital.sp.gov.br/web/penha/w/noticias/62385"
                },
            ]
        },
        {
            id: "dancas-estrangeiras",
            nome: "Danças Estrangeiras",
            aulas: [
                { 
                    nome: "Dança do Ventre", 
                    local: "SESC - Avenida Paulista", 
                    data: "De 02/11 a 12/12 - Sábados e Quintas", 
                    imagem: "/imagens/ventre.jpeg",
                    link: "https://www.sescsp.org.br/programacao/danca-do-ventre-10/"
                },
                { 
                    nome: "Raqsa – Dança Árabe", 
                    local: "SESC - Avenida Paulista", 
                    data: "14/12/2024", 
                    imagem: "/imagens/r.jpeg",
                    link: "https://www.sescsp.org.br/programacao/raqsa-danca-arabe-caseira/"
                },
                { 
                    nome: "Dança Afro", 
                    local: "Ilê Asé Egbé Yewale Bemy - Rua Rio Guaíba, 828, Bela Vista.", 
                    data: "De 16/11 a 06/12", 
                    imagem: "/imagens/a.jpg",
                    link: "https://www.folhabv.com.br/variedades/cultura/coletivo-oferece-oficina-gratuita-de-dancas-afro-brasileiras/"
                },
                { 
                    nome: "Dança Burlesca", 
                    local: "SESC - Belenzinho", 
                    data: "De 16/11 a 06/12", 
                    imagem: "/imagens/b.jpg",
                    link: "https://www.sescsp.org.br/programacao/oficina-de-danca-burlesca/"
                },
               
            
            ]
        },
      
        {
            id: "zumba",
            nome: "Zumba",
            aulas: [
                { 
                    nome: "Zumba", 
                    local: "Vale do Anhangabaú", 
                    data: "Domingos às 16h", 
                    imagem: "/imagens/zumba.jpg",
                    link: "https://exemplo.com/bale-classico"
                },
            
            ]
        },
        {
            id: "cursos",
            nome: "Cursos",
            aulas: [
                { 
                    nome: "Curso Dança Contemporânea", 
                    local: "São Paulo Escola de Dança", 
                    data: "A verificar", 
                    imagem: "/imagens/c.jpeg",
                    link: "https://spescoladedanca.org.br/cursos_livres"
                },
                { 
                    nome: "Curso Danças Urbanas", 
                    local: "São Paulo Escola de Dança", 
                    data: "A verificar", 
                    imagem: "/imagens/u.jpg",
                    link: "https://spescoladedanca.org.br/cursos_livres"
                },
                { 
                    nome: "Curso Dança Clássica", 
                    local: "São Paulo Escola de Dança", 
                    data: "A verificar", 
                    imagem: "/imagens/cc.webp",
                    link: "https://spescoladedanca.org.br/cursos_livres"
                },
                { 
                    nome: "Curso Dança de Salão", 
                    local: "São Paulo Escola de Dança", 
                    data: "A verificar", 
                    imagem: "/imagens/ss.jpg",
                    link: "https://spescoladedanca.org.br/cursos_livres"
                },
            ]
        },
    ];

    const categoriasContainer = document.getElementById("categorias-container");

    categorias.forEach(categoria => {
        const categoriaDiv = document.createElement("div");
        categoriaDiv.classList.add("categoria");
        categoriaDiv.id = categoria.id;

        const tituloCategoria = document.createElement("h2");
        tituloCategoria.textContent = categoria.nome;
        categoriaDiv.appendChild(tituloCategoria);

        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        categoria.aulas.forEach(aula => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <a href="${aula.link}" target="_blank" rel="noopener noreferrer">
                    <img src="${aula.imagem}" alt="${aula.nome}">
                    <div class="card-content">
                        <h3>${aula.nome}</h3>
                        <p>Local: ${aula.local}</p>
                        <p>Data: ${aula.data}</p>
                    </div>
                </a>
            `;

            cardContainer.appendChild(card);
        });

        categoriaDiv.appendChild(cardContainer);
        categoriasContainer.appendChild(categoriaDiv);
    });
});
