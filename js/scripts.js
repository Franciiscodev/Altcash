document.addEventListener("DOMContentLoaded", function () {
  const taxas = [
    { banco: "Wise", spread: 2.5, iof: 1.1 },
    { banco: "Nomad", spread: 3.0, iof: 1.1 },
    { banco: "Inter", spread: 2.0, iof: 0.38 },
    { banco: "C6 Bank", spread: 3.5, iof: 1.1 },
  ];

  const tabela = document.getElementById("tabela-taxas");

  taxas.forEach((dado) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
            <td>${dado.banco}</td>
            <td>${dado.spread}%</td>
            <td>${dado.iof}%</td>
            <td>${(dado.spread + dado.iof).toFixed(2)}%</td>
        `;
    tabela.appendChild(linha);
  });

  // Simulador de Conversão
  const btnConverter = document.getElementById("btn-converter");
  btnConverter.addEventListener("click", () => {
    const valorBRL = parseFloat(document.getElementById("valor-brl").value);
    const taxaCambio = 0.18; // Taxa de câmbio estática para BRL->EUR

    if (!isNaN(valorBRL)) {
      const valorEUR = (valorBRL * taxaCambio).toFixed(2);
      document.getElementById("valor-eur").textContent = `€ ${valorEUR}`;
    } else {
      alert("Por favor, insira um valor válido em BRL.");
    }
  });
});
