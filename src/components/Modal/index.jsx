export default function Modal({ pagina, setEncarteAberto }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-2 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-row w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <img
                onClick={() => setEncarteAberto(null)}
                className="h-auto  w-auto pt-10"
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
