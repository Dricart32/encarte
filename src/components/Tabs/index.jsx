import { useState } from "react";
import OfertasEncartes from "../OfertasEncartes";
import OfertasProdutos from "../OfertasProdutos";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#produtos"
                role="tablist"
              >
                Pesquisar Ofertas
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#encartes"
                role="tablist"
              >
                Pesquisar Encartes
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#lista"
                role="tablist"
              >
                Lista de Compras
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-2 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="produtos">
                  <div className="m-2 border-4 border-dashed border-red-200 rounded-lg h-auto ">
                    <OfertasProdutos />
                  </div>
                  
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="encartes">
                  <div className="m-2 border-4 border-dashed border-red-200 rounded-lg h-auto ">
                    <OfertasEncartes />
                  </div>
                  
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="lista">
                  <div className="m-2 border-4 border-dashed border-red-200 rounded-lg h-auto ">
                    //Lista de Compras
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;