function gerarJogo() {
  // Gerar 5 números aleatórios entre 1 e 50 sem repetição
  let numeros = [];
  while (numeros.length < 5) {
    let numero = Math.floor(Math.random() * 50) + 1;
    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }
  // Ordenar os números em ordem crescente
  numeros.sort(function (a, b) {
    return a - b;
  });

  // Gerar 2 estrelas aleatórias entre 1 e 12 sem repetição
  let estrelas = [];
  while (estrelas.length < 2) {
    let estrela = Math.floor(Math.random() * 12) + 1;
    if (!estrelas.includes(estrela)) {
      estrelas.push(estrela);
    }
  }
  // Ordenar as estrelas em ordem crescente
  estrelas.sort(function (a, b) {
    return a - b;
  });

  // Exibir os números e estrelas gerados na página HTML
  let numerosList = document.getElementById("numeros");
  numerosList.innerHTML = "";
  for (let i = 0; i < numeros.length; i++) {
    let numeroItem = document.createElement("li");
    numeroItem.appendChild(document.createTextNode(numeros[i]));
    numerosList.appendChild(numeroItem);
  }

  let estrelasList = document.getElementById("estrelas");
  estrelasList.innerHTML = "";
  for (let i = 0; i < estrelas.length; i++) {
    let estrelaItem = document.createElement("li");
    estrelaItem.appendChild(document.createTextNode(estrelas[i]));
    estrelasList.appendChild(estrelaItem);
  }
}
