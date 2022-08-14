import React, { useState } from 'react';

export default function ProductsList() {
  // Criando um array com 40 itens, esse vai ser nosso array de `dados`
  const listaGrande = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ];

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [numeroDeItensPorPagina] = useState(5);

  // pegamos o primeiro e o ultimo itens que aparecem EM CADA PÁGINA
  const indexDoUltimoItem = paginaAtual * numeroDeItensPorPagina;
  const indexDoPrimeiroItem = indexDoUltimoItem - numeroDeItensPorPagina;

  const itensExibidosNaPaginaAtual = listaGrande.slice(
    indexDoPrimeiroItem,
    indexDoUltimoItem
  );

  const numeroDePaginas = Math.ceil(
    listaGrande.length / numeroDeItensPorPagina
  );

  // Lembra como a gente criou o array de numeros que são os nossos dados? Essa aqui é uma forma de criar um array de numeros de 1 até n - será a lista dos números da paginação que o usuário clica pra mudar de página etc

  const numerosDaPaginacao = [...Array(numeroDePaginas + 1).keys()].slice(1);

  return (
    <div>
      <div className="mb-4">
        {itensExibidosNaPaginaAtual.map((item) => (
          <div className="bg-orange-300 p-4 mb-4" key={item}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>

      <nav className="py-4">
        <ul className="flex gap-x-2">
          {numerosDaPaginacao.map((pagina) => (
            <li key={pagina}>
              <a href="#" onClick={() => setPaginaAtual(pagina)}>
                {pagina}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
