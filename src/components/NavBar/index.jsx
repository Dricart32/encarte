import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const navigation = [
    { name: "Supermercados", href: "/", current: true },
    { name: "Farmácias", href: "/farmacias", current: false },
    { name: "Construção", href: "/construcao", current: false },
    { name: "Restaurantes", href: "/restaurantes", current: false },
    { name: "Petshops", href: "/petshops", current: false },
    { name: "Diversos", href: "/diversos", current: false },
  ];
  const heading = navigation.find((nav) => nav.current === true);

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-red-800 pb-32">
      <nav>
        <Disclosure
          open={isOpen}
          onChange={() => setOpen(!isOpen)}
          as="nav"
          className="bg-red-800"
        >
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="border-b border-red-700">
                <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Image height={8} width={8} src="/logo.png" alt="Workflow" />
                    </div>
                    <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
                      <h1 className="text-3xl font-bold text-white">
                        Poupatize
                      </h1>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, index) => (
                          <Link href={item.href} key={index}>
                            <a
                              name={item.name}
                              className={[
                                item.current
                                  ? "text-white bg-red-900 px-3 py-2 rounded-md text-sm font-medium"
                                  : "text-red-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                              ]}
                              aria-current={item.current ? "page" : undefined}
                              //vai receber o onClick que muda a page
                            >
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                      <span className="sr-only">Open main menu</span>
                      {isOpen ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="border-b border-red-700 md:hidden">
              <div className="px-2 py-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.nome}
                    as="a"
                    href={item.href}
                    className={
                      item.current
                        ? "text-white bg-red-900 block px-3 py-2 rounded-md text-base font-medium"
                        : "text-red-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                    //vai receber o onClick que muda a page
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        </Disclosure>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-white" key={heading.current}>
          {heading.name}
        </h1>
      </div>
    </div>
  );
}
