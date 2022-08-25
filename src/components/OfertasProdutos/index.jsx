import { useEffect, useState } from 'react';

var oferta_produto_busca = ""
var axios = require('axios');

export default function OfertasProdutos() {


  const [oferta, setOferta] = useState([]);
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  function getLocation() {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  useEffect(() => {
     
    var baseURL = `http://api.poupatize.com.br/api/v1/ofertas/pesquisar?produto=${oferta_produto_busca}&lat=${lat}&lng=${lng}&distance=1000&max=20`;
      axios.get(baseURL)
      .then((response) => {
        setOferta(response.data.data)
        getLocation()
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

  
    return(
    //   Filtrar o retorno e mandar pra um card
    <p>{oferta.map((o) => (
      <p key={o.oferta_id}>{o.oferta_produto}</p>
    ))}
    </p>
    )
}