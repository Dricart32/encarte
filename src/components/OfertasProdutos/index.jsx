import { useEffect, useState } from 'react';
import CardProduto from '../CardProduto';   
import { SearchIcon } from '@heroicons/react/solid'


var axios = require('axios');
const API_endpoint = `http://api.poupatize.com.br/api/v1/ofertas/pesquisar?`;
var oferta_produto_busca = ""

export default function OfertasProdutos() {

  const [oferta, setOferta] = useState([]);
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")    
  const [searchProd, setSearchProd] = useState("")  
  
  useEffect(() => {
     navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    axios.get(`${API_endpoint}produto=${searchProd}&lat=${lat}&lng=${lng}&distance=1000&max=15`)
    .then((response) => {
       setOferta(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[lat, lng, searchProd]);
  
    return(
    
    //   Filtrar o retorno e mandar pra um card
    <div>
      <div className="flex-1 px-2 m-2 flex justify-center lg:ml-6 lg:justify-start rounded-md  border-2 border-red-400">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                    placeholder="Pesquise pelo nome do produto"
                    type="search"
                    name="search"
                    value={searchProd}
                    onChange={e => setSearchProd(e.target.value)}
                  />
                </div>
              </div>
            </div>
      <CardProduto oferta={oferta} />
    </div>
    )
}