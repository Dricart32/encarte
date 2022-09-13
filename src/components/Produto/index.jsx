export default function selectedProduct({selectedProduct, setSelectedProduct}) {
   
  return (
    <>
          <div
            onClick={() => setSelectedProduct(null)}
            key={selectedProduct.oferta_id}
            className="relative rounded-lg border border-gray-300 bg-white py-5 mx-1 px-6 shadow-sm flex items-center justify-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 h-96"
          >
            <div className="flex">
              <img className="h-60 w-60" src={selectedProduct.oferta_imagem} alt="" />
            </div>
            <div className="min-w-0">
                <a className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{selectedProduct.oferta_produto}</p>
                  <p className="text-sm font-bold text-green-900">{`R$${selectedProduct.oferta_preco}`}</p>
                  <p className="text-sm text-gray-500 truncate">{`${selectedProduct.loja_marca_nome} | ${selectedProduct.loja_bairro}`}</p>
                </a>
            </div>
            <p>Voltar</p>
          </div>
     
    </>
  )
}