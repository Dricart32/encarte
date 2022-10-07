import { SearchIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import CardEncarte from '../CardEncarte';

var axios = require('axios');

export default function OfertasEncartes() {
  const [encarte, setEncarte] = useState([]);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [searchEncarte, setsearchEncarte] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });

    var config = {
      method: 'get',
      url: `https://api.poupatize.com.br/api/v1/encartes_publicados?lat=${lat}&lng=${lng}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer SFMyNTY.g3QAAAACZAAEZGF0YWFYZAAGc2lnbmVkbgYA2epkkHIB.5c1aAf8Xfsr-P_MTYZrzXFVbDSATYbk02cUk4cjljs0',
      },
    };
    axios(config)
      .then(function (response) {
        setEncarte(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [lat, lng]);
  // const API_endpoint = `https://api.poupatize.com.br/api/v1/encartes_publicados?`;
  //   const config = {
  //     headers: { Authorization: `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJMaXN0YXF1aUFwaSIsImV4cCI6MTUzNjc2NTQ3NSwiaWF0IjoxNTM0MzQ2Mjc1LCJpc3MiOiJMaXN0YXF1aUFwaSIsImp0aSI6ImIzNWNjMjc3LWU4ZDYtNDZmZC04YmFhLWIxMzhhOTI1NmJjOSIsIm5iZiI6MTUzNDM0NjI3NCwicGVtIjp7ImRlZmF1bHQiOjN9LCJzdWIiOiIxIiwidHlwIjoiYWNjZXNzIn0.zUM9lUTHg7YZU2zAd0_aLCLg9ivuPQQ5OlwA9tGKdevxuXa_U6Jz_kBawtQziy0dOPRwrTw8IwHDNTln6DqtSw` }
  // };
  //   useEffect(() => {
  //       navigator.geolocation.getCurrentPosition( (position) => {
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     });

  //     axios.get(`{${API_endpoint}&lat=${lat}&lng=${lng}}`, config)
  //     .then((response) => {
  //        setOferta(response.data)
  //        console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   },[lat, lng, searchEncarte]);

  return (
    <div>
      <div className="flex-1 m-3 flex justify-center lg:justify-start rounded-md">
        <div className="w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          {/* <div className="relative text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="searchEncarte"
              className="block w-full bg-white py-3 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white focus:border-white sm:text-sm"
              placeholder="Pesquise pelo nome do mercado ou encarte"
              type="search"
              name="search"
              value={searchEncarte}
              onChange={(e) => setsearchEncarte(e.target.value)}
            />
          </div> */}
        </div>
      </div>

      <div>
        <CardEncarte encarte={encarte} />
      </div>
    </div>
  );
}
