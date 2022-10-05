//data {validade_inicial, validade_final, status, paginas[{ thumb_img_url, pagina, image_url, id, compact_image_url}] nome, id}

import Image from 'next/image';
import { useState } from 'react';
import Encarte from '../Encarte';

export default function CardEncarte({ encarte }) {
  const [selectedEncarte, setSelectedEncarte] = useState(null);

  if (selectedEncarte != null)
    return <Encarte selectedEncarte={selectedEncarte} setSelectedEncarte={setSelectedEncarte} />;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {encarte.map((e) => (
        <div key={e.paginas.id}>
          <div
            onClick={() => setSelectedEncarte(e)}
            className="cursor-pointer hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 h-hover focus-within:bg-red-900
            relative rounded-lg border border-gray-300 bg-white hover:bg-red-300 py-5 mx-1 px-6 shadow-sm flex items-center space-x-3"
          >
            <div className="flex justify-start">
              {/* <img width={80} className="m-2" src={e.paginas.at(-1).compact_image_url} alt="" /> */}
              <img width={80} className="m-2" src={e.paginas[0].compact_image_url} alt="" />
            </div>
            <br />
            <div className="flex-1 min-w-0 h-40">
              <a href="#" className="focus:outline-none">
                <p className="text-sm font-medium">{e.nome}</p>
                <p className="text-sm truncate">Válido até:</p>
                <p className="text-sm text-red-500 truncate">{e.validade_final}</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
