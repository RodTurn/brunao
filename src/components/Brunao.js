import React, { useState } from 'react';

function Corpo() {
  const listaGrande = [
    'Bkv6fi5KsN8',
    'QkyfXrNpKCU',
    'lV3eeQzXpZI',
    'X8oVCB2fRFk',
    'SLxIqYU0jfk',
    'hvgd8Xo-C9U',
    'Vb8mvW83P2s',
  ];
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [numeroDeItensPorPagina] = useState(3);
  const indexDoUltimoItem = paginaAtual * numeroDeItensPorPagina;
  const indexDoPrimeiroItem = indexDoUltimoItem - numeroDeItensPorPagina;
  const itensExibidosNaPaginaAtual = listaGrande.slice(
    indexDoPrimeiroItem,
    indexDoUltimoItem
  );
  const numeroDePaginas = Math.ceil(
    listaGrande.length / numeroDeItensPorPagina
  );
  const numerosDaPaginacao = [...Array(numeroDePaginas + 1).keys()].slice(1);

  return (
    <div id="corpo">
      <div className="rodrigao">
        <div>
          {itensExibidosNaPaginaAtual.map((item) => (
            <div key={item}>
              <iframe
                id="frame"
                width="300"
                height="170"
                src={`https://www.youtube.com/embed/${item}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="mt-4"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <nav>
          <ul className="flex">
            {numerosDaPaginacao.map((pagina) => (
              <li key={pagina} className="mt-12">
                <a href="#" onClick={() => setPaginaAtual(pagina)}>
                  {pagina}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Corpo;
