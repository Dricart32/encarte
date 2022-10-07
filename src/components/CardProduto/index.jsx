import Image from 'next/image';
import { useState } from 'react';
import Produto from '../Produto';

//Validade inicial, validade final, oferta validade final, oferta produto marca, oferta produto, oferta preço, oferta imagem, oferta id, loja nome, loja marca nome, loja marca id, loja imagem, loja id, loja estado, loja endereço, loja cidade, loja bairro, location{lat lng},encarte validade inicial, encarte validade final, encarte pagina id, encarte nome, encarte id, distancia

export default function CardProduto({ ofertas }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct != null)
    return <Produto selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />;

  return (
    <div className="grid grid-cols-1 mb-5 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ofertas.map((produto) => (
        <div
          key={produto.oferta_id}
          onClick={() => setSelectedProduct(produto)}
          className="cursor-pointer relative rounded-lg border border-gray-300 bg-white hover:bg-red-300 py-5 mx-1 px-6 shadow-sm flex items-center space-x-3"
        >
          <div className="flex-shrink-0">
            <img width={90} src={produto.oferta_imagem} alt="" />
          </div>
          <div className="flex-1 min-w-0">
            <a className="focus:outline-none">
              <p className="text-sm font-medium">{produto.oferta_produto}</p>
              <p className="text-sm font-bold text-green-900">{`R$${produto.oferta_preco}`}</p>
              <p className="text-smtruncate">{`${produto.loja_marca_nome} | ${produto.loja_bairro}`}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
