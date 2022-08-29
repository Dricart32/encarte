/* This example requires Tailwind CSS v2.0+ */
const oferta = [
    {
        //Validade inicial, validade final, oferta validade final, oferta produto marca, oferta produto, oferta preço, oferta imagem, oferta id, loja nome, loja marca nome, loja marca id, loja imagem, loja id, loja estado, loja endereço, loja cidade, loja bairro, location{lat lng},encarte validade inicial, encarte validade final, encarte pagina id, encarte nome, encarte id, distancia
    }
  ]
  
  export default function CardProduto({oferta}) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {oferta.map((produto) => (
          <div
            key={produto.email}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img className="h-20 w-20" src={produto.oferta_imagem} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{produto.oferta_produto}</p>
                <p className="text-sm text-gray-500 truncate">{produto.loja_nome}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
  