fetch("filmes.json")
    .then((response) => response.json())
    .then((filmes) => {
        const container = document.getElementById("catalogo");

        filmes.forEach((filme) => {
            const div = document.createElement("div");
            div.classList.add("filme");

            div.innerHTML = `
            <h2 class="titulo">${filme.titulo} (${filme.ano})</h2>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Gêneros:</strong> ${filme.generos.join(", ")}</p>
            <p><strong>Elenco:</strong> ${filme.elenco.join(", ")}</p>
            <h3>Avaliações:</h3>
          `;

            filme.avaliacoes.forEach((avaliacao) => {
                const blocoAvaliacao = document.createElement("div");
                blocoAvaliacao.classList.add("avaliacao");
                blocoAvaliacao.innerHTML = `
              <p><strong>Usuário:</strong> ${avaliacao.usuario}</p>
              <p class="nota"><strong>Nota:</strong> ${avaliacao.nota}</p>
              <p>${avaliacao.comentario}</p>
            `;
                div.appendChild(blocoAvaliacao);
            });

            container.appendChild(div);
        });
    })
    .catch((erro) => console.error("Erro ao carregar os filmes:", erro));