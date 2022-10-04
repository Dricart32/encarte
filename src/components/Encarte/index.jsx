import Image from "next/image";
import { useState } from "react";
import ModalEncarte from "../ModalEncarte";

export default function Encarte({ selectedEncarte, setSelectedEncarte }) {
  //data {validade_inicial, validade_final, status, paginas[{ thumb_img_url, pagina, image_url, id, compact_image_url}] nome, id}
  const [encarteAberto, setEncarteAberto] = useState(null);
  return (
    <div clasName="flex items-center justify-center">
      <div className="bg-logo bg-no-repeat bg-center relative py-5 mx-1 px-6 shadow-sm space-x-3 items-center justify-center">
        <div className="flex flex-col rounded-lg bg-red-500 border-2 border-dotted border-black m-2 p-5 shadow-lg">
          <div className="flex rounded-lg items-center justify-start">
            <div
              className="bg-white px-2 border-double border w-16 ml-6  text-red-700 border-black rounded-full my-1"
              onClick={() => setSelectedEncarte(null)}
            >
              <p className="items-center justify-center cursor-pointer font-bold">
                Voltar
              </p>
            </div>
          </div>
          <div className="flex ">
            <div className="p-2 m-1 flex flex-row flex-wrap items-center justify-center">
              {console.log(encarteAberto)}
              {selectedEncarte.paginas.map((p) =>
                encarteAberto != null ? (
                  <div>
                    <ModalEncarte
                      pagina={encarteAberto}
                      setEncarteAberto={setEncarteAberto}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col border border-black rounded-lg bg-white m-1">
                    <Image width={180} height={240}
                      onClick={() => setEncarteAberto(p)}
                      className="hover:opacity-80 p-1 "
                      src={p.image_url}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <button
            type="button"
            className="inline-flex justify-center items-center m-1 rounded-md border border-gray-500 bg-white px-4 py-1 text-base font-medium text-red-700 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <a
              href="whatsapp://send?text=Baixe Poupatize https://play.google.com/store/apps/details?id=br.com.poupatize&hl=pt-BR&ah=NcfU73Ufj5LzrRIJ6v8-3kOEuWM"
              data-action="share/whatsapp/share"
            >
              Compartilhar via Whatsapp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
