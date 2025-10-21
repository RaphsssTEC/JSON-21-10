function carregarDados() {
    return fetch('aula.json')
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Erro ao carregar o arquivo");
        }
        return response.json();
      })
      .catch(function(error) {
        console.error('Erro:', error);
        throw error; // Re-lança o erro para ser tratado em outro lugar
      });
  }
  
  function exibirDados(dados) {
    var div = document.getElementById('resultado');
    div.innerHTML = 
      '<p>Nome: ' + dados.nome + '</p>' +
      '<p>Idade: ' + dados.idade + '</p>' +
      '<p>CPF: ' + dados.cpf + '</p>' +
      '<p>Alunos:</p>';
    
    // Lista os alunos
    dados.alunos.forEach(function(element) {
      div.innerHTML += '<p>' + element + '</p>';
    });
  }
  
  // Função principal que gerencia o fluxo
  function inicializar() {
    carregarDados()
      .then(function(dados) {
        exibirDados(dados);
      })
      .catch(function(error) {
        console.error('Erro ao processar os dados:', error);
      });
  }
  
  inicializar();
  