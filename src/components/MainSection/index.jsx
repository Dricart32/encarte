import Link from 'next/link'
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
            
        </div>
            <div className="m-2 border-4 border-dashed border-red-200 rounded-lg h-auto ">
              <OfertasProdutos />
            </div>
        </>
  )
}