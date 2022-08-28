import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/solid'
import OfertasProdutos from '../OfertasProdutos'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// começar a utilizar a api
export default function MainSection() {
  const tabs = [
    { name: 'Pesquisar Ofertas', href: 'ofertas', current: true },
    { name: 'Visualizar Encartes', href: 'encartes', current: false },
  ]
    return(
      <>
          <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <Link href={tab.href}>
                <a
                key={tab.name}
                className={classNames(
                  tab.current
                    ? 'border-red-500 text-red-900'
                    : 'border-transparent text-gray-400 hover:text-red-700 hover:border-red-300',
                  'whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
                // passar onClick e mudar a aba
              >
                {tab.name}
              </a></Link>
            ))}

          </nav>
            <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                    placeholder="Pesquise pelo nome do produto"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
        </div>
            <div className="m-2 border-4 border-dashed border-red-200 rounded-lg h-auto ">
              <OfertasProdutos />
            </div>
        </>
  )
}