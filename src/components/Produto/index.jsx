


export default function selectedProduct({
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <div clasName="flex items-center justify-center">
      <div  
        key={selectedProduct.oferta_id}
        className="relative rounded-lg border border-black bg-red-50 py-5 mx-1 px-6 shadow-sm  space-x-3 items-center justify-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500 h-96"
      >
        <div className="flex flex-col items-center justify-center border border-black">
          <img
            className="h-60 w-60 border border-black rounded-3xl"
            src={selectedProduct.oferta_imagem}
            width={60}
            height={60}
            alt=""
          />
        
        
        <div className="min-w-0 flex flex-col items-center justify-center ">
          <div className="focus:outline-none">
            <p className="text-sm font-medium text-gray-900">
              {selectedProduct.oferta_produto}
            </p>
            <p className="text-sm font-bold text-green-900">{`R$${selectedProduct.oferta_preco}`}</p>
            <p className="text-sm text-gray-500 truncate">{`${selectedProduct.loja_marca_nome} | ${selectedProduct.loja_bairro}`}</p>
          </div>
        </div>
      <div className="bg-red-500 p-100" onClick={() => setSelectedProduct(null)}>
        <p className="items-center justify-center ">Voltar</p>
      </div></div>
      </div>
      
    </div>
  );
}
