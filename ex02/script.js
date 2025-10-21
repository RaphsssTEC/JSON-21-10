fetch('cardapio.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cardapio');

        for (const categoria in data) {
            const secao = document.createElement('div');
            secao.classList.add('categoria');
            secao.innerHTML = `<h2>${categoria.replace('_', ' ')}</h2>`;

            data[categoria].forEach(prato => {
                const item = document.createElement('div');
                item.classList.add('prato');
                item.innerHTML = `
        <h3>${prato.nome}</h3>
        <p>${prato.descricao}</p>
        <p class="preco">R$ ${prato.preco.toFixed(2)}</p>
        <p><strong>Acompanhamentos:</strong> ${prato.acompanhamentos.join(', ')}</p>
      `;
                secao.appendChild(item);
            });

            container.appendChild(secao);
        }
    })
    .catch(erro => console.error('Erro ao carregar o cardápio:', erro));