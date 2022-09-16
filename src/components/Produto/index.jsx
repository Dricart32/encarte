export default function selectedProduct({
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <div clasName="flex items-center justify-center">
      <div
        className="relative  bg-red-100 py-5 mx-1 px-6 shadow-sm  space-x-3 items-center justify-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
      >
        <div
          className="bg-red-500 px-2 border-double border w-16 flex absolute ml-6  text-white border-black rounded-3xl my-5"
          onClick={() => setSelectedProduct(null)}
        >
          <p className="items-center justify-center ">Voltar</p>
        </div>
        <div className="flex rounded-lg items-center pb-4 justify-center">
          <div className="flex flex-col bg-red-500 rounded-lg border-2 border-black border-dotted py-4 px-8 my-3 mx-2">
            <img
              className="h-60 w-60 border p-1 bg-white border-black rounded-3xl shadow-lg"
              src={selectedProduct.oferta_imagem}
              alt=""
            />

            <div className="min-w-500 flex flex-col items-center justify-center ">
              <div className="focus:outline-none">
                <p className="text-sm font-medium text-black bg-white p-1 mt-2">
                  {selectedProduct.oferta_produto}
                </p>
                <p className="text-sm font-bold p-1 bg-white text-green-900">{`R$${selectedProduct.oferta_preco}`}</p>
                <p className="text-sm bg-white p-1 text-gray-500 truncate">{`${selectedProduct.loja_marca_nome} | ${selectedProduct.loja_bairro}`}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-red-500 border-2 border-dotted border-black m-5 p-6 shadow-lg">
            {" "}
            <button
              type="button"
              className="inline-flex justify-center items-center m-2 rounded-md border border-gray-500 bg-white px-4 py-2 text-base font-medium text-red-700 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Adicionar na Lista
            </button>
            <button
              type="button"
              className="inline-flex items-center m-2 rounded-md border border-gray-500 bg-white px-4 py-2 text-base font-medium text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Ver oferta no Encarte
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center m-2 rounded-md border border-gray-500 bg-white px-4 py-2 text-base font-medium text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Compartilhar via Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
