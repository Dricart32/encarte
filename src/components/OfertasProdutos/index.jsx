import { useEffect, useState } from 'react';


var axios = require('axios');
const API_endpoint = `http://api.poupatize.com.br/api/v1/ofertas/pesquisar?`;
var oferta_produto_busca = ""

export default function OfertasProdutos() {

  const [oferta, setOferta] = useState([]);
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")      
  
  useEffect(() => {
     navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    axios.get(`${API_endpoint}produto=${oferta_produto_busca}&lat=${lat}&lng=${lng}&distance=1000&max=15`)
    .then((response) => {
       setOferta(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[lat, lng]);
  
    return(
    //   Filtrar o retorno e mandar pra um card
    <div>{oferta.map((o) => (
      <p key={o.oferta_id}>{o.oferta_produto}</p>
    ))}
    </div>
    )
}