export default function Produto({ selectedProduct, setSelectedProduct }) {
  return (
    <div className="bg-white pt-2">
      <div
        className="bg-white px-2 border-double border w-16 ml-6  text-red-700 border-black rounded-full my-2"
        onClick={() => setSelectedProduct(null)}
      >
        <p className="items-center justify-center cursor-pointer font-bold text-sm">Voltar</p>
      </div>

      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{selectedProduct.oferta_produto}</h1>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-medium text-green-900 mb-10">{`R$ ${selectedProduct.oferta_preco}`}</p>
              </div>
              <div>
                <img src={selectedProduct.loja_imagem} alt="" width={64} />
                <p className="text-sm font-semibold p-1">{`${selectedProduct.loja_marca_nome} `}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-700 p-1">{selectedProduct.loja_endereco}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm truncate text-gray-500 p-1">
                  {`Distancia: ${parseFloat(selectedProduct.distancia).toFixed(2)} KM`}
                </p>
              </div>
            </div>

            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">Images</h2>
              <img src={selectedProduct.oferta_imagem} className="lg:col-span-2 lg:row-span-2" />
            </div>

            {/* <div className="mt-8 lg:col-span-5">
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // <div className="flex items-center justify-center">
    //   <div className="bg-logo bg-no-repeat bg-center relative py-5 mx-1 px-6 shadow-sm space-x-3 items-center justify-center">
    //     <div className="flex rounded-lg items-center pb-4 justify-center">
    //       <div
    //         className="bg-white px-2 border-double border w-16 ml-6  text-red-700 border-black rounded-full my-5"
    //         onClick={() => setSelectedProduct(null)}
    //       >
    //         <p className="items-center justify-center cursor-pointer font-bold text-sm">Voltar</p>
    //       </div>
    //       <div className="flex flex-col items-center bg-red-500 rounded-lg border-2 border-black border-dotted md:flex-row sm:min-w-0 py-4 px-0 my-3 mx-2">
    //         <div className="mx-4">
    //           <img
    //             width={240}
    //             className="sm:min-w-0 border p-1 bg-white border-black rounded-3xl shadow-lg"
    //             src={selectedProduct.oferta_imagem}
    //             alt=""
    //           />
    //           <p className="text-sm text-white font-semibold flex justify-center p-1">{`Expira: ${selectedProduct.validade_final}`}</p>
    //         </div>
    //         <div className="flex flex-col items-center justify-center shadow-lg border border-black">
    //           <div className="px-4 py-2 bg-white">
    //             <p className="text-sm font-medium text-black  p-1 mt-2">{selectedProduct.oferta_produto}</p>
    //             <p className="text-4xl border flex justify-end font-bold p-1 text-green-900">{`R$${selectedProduct.oferta_preco}`}</p>

    //             <div className="flex flex-row items-center justify-around">
    //               <p className="text-sm font-semibold p-1">{`${selectedProduct.loja_marca_nome} `}</p>
    //               <Image src={selectedProduct.loja_imagem} alt="" width={64} height={64} />
    //             </div>
    //             <p className="text-sm truncate text-gray-600 p-1">{`Distancia: ${parseFloat(
    //               selectedProduct.distancia
    //             ).toFixed(2)} KM | Endereço: ${selectedProduct.loja_endereco}`}</p>
    //           </div>
    //         </div>
    //         <div className="flex flex-col rounded-lg bg-red-500 border-2 border-dotted border-black m-5 p-6 shadow-lg">
    //           <button
    //             type="button"
    //             className="inline-flex justify-center items-center m-1 rounded-md border border-gray-500 bg-white px-4 py-1 text-base font-medium text-red-700 shadow-lg hover:bg-gray-50 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    //           >
    //             Adicionar na Lista
    //           </button>
    //           <button
    //             type="button"
    //             className="inline-flex justify-center m-1 rounded-md border border-gray-500 bg-white px-4 py-1 text-base font-medium text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    //           >
    //             Ver oferta no Encarte
    //           </button>
    //           <a
    //             href="whatsapp://send?text=Baixe Poupatize https://play.google.com/store/apps/details?id=br.com.poupatize&hl=pt-BR&ah=NcfU73Ufj5LzrRIJ6v8-3kOEuWM"
    //             data-action="share/whatsapp/share"
    //           >
    //             <button
    //               type="button"
    //               className="inline-flex justify-center items-center m-1 rounded-md border border-gray-500 bg-white px-4 py-1 text-base font-medium text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    //             >
    //               Compartilhar via Whatsapp
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
