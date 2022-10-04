import Image from "next/image";

export default function ModalEncarte({ pagina, setEncarteAberto }) {
  return (
    <>
      <div
        onClick={() => setEncarteAberto(null)}
        className="justify-center items-start flex overflow-x-hidden overflow-y-scroll fixed inset-2 z-50 outline-none focus:outline-none"
      >
        <div className="absolute mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-xl relative flex flex-row w-auto bg-red-500 outline-none focus:outline-none">
            <div className="relative h-max w-max p-1 m-2 flex-auto">
              <Image
                width={1200}
                height={1920}
                src={pagina.image_url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
