/* possiveis retornos da api */

import Image from "next/image";

        //Validade inicial, validade final, oferta validade final, oferta produto marca, oferta produto, oferta preço, oferta imagem, oferta id, loja nome, loja marca nome, loja marca id, loja imagem, loja id, loja estado, loja endereço, loja cidade, loja bairro, location{lat lng},encarte validade inicial, encarte validade final, encarte pagina id, encarte nome, encarte id, distancia
    
  
        export default function CardProduto({oferta}) {
            return (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {oferta.map((produto) => (
                  <div
                    key={produto.encarte_pagina_id}
                    className="relative rounded-lg border border-gray-300 bg-white mx-1 px-5 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                  >
                    <div className="flex-shrink-0">
                      <img className="h-20 w-20" src={produto.oferta_imagem} alt="" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">{produto.encarte_nome}</p>
                        <p className="text-sm font-bold text-green-900">{`R$${produto.encarte_validade_final}`}</p>
                        <p className="text-sm text-gray-500 truncate">{`${produto.loja_marca_nome} | ${produto.loja_bairro}`}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )
          }