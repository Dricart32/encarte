import { SearchIcon } from '@heroicons/react/solid';
import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import CardProduto from '../CardProduto';

var axios = require('axios');
const API_endpoint = `https://api.poupatize.com.br/api/v1/ofertas/pesquisar?`;

export default function OfertasProdutos() {
  const [ofertas, setOfertas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [searchProd, setSearchProd] = useState('');
  const [executeSearchTxt, setExecuteSearchTxt] = useState('');
  const [maxProd, setMaxProd] = useState(30);

  const executeSearch = useCallback(
    debounce((txt) => setExecuteSearchTxt(txt), 1000),
    [] // será criada apenas uma vez inicialmente
  );

  const keyPressOnSearch = (txt) => {
    setSearchProd(txt);
    executeSearch(txt);
  };

  // const handleMoreCards = () => {
  //   setMaxProd(maxProd + 6);
  // };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    setCarregando(true);
    axios
      .get(`${API_endpoint}produto=${executeSearchTxt}&lat=${lat}&lng=${lng}&distance=1000&max=${maxProd}`)
      .then((response) => {
        setOfertas(response.data.data);
        setCarregando(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [lat, lng, executeSearchTxt, maxProd]);

  return (
    <div>
      <div className="flex-1 m-3 mb-3 flex justify-center lg:justify-start rounded-md ">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="searchProduto"
              className="block w-full bg-white py-3 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white focus:border-white sm:text-sm"
              placeholder="Pesquise pelo nome do produto"
              type="search"
              name="search"
              value={searchProd}
              onChange={(e) => keyPressOnSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="px-2">
        {carregando && <p className="text-white mb-5">Aguarde, carregando...</p>}
        {!carregando && <CardProduto ofertas={ofertas} />}
      </div>

      {/* <div className="flex items-center justify-center m-2">
        <button
          type="button"
          onClick={handleMoreCards}
          className="inline-flex items-center rounded-full border border-black bg-white p-3 text-red-900 hover:text-white hover:bg-red-900 shadow-s"
        >
          Carregar mais ofertas
        </button>
      </div> */}
    </div>
  );
}
