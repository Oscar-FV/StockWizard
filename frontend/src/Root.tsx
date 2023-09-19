import {
  InboxStackIcon,
  PowerIcon,
  ShoppingBagIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="flex">
      <nav className="w-[3rem] h-screen grid grid-rows-6 overflow-hidden hover:w-[13rem] ease-in-out duration-300 bg-details-light drop-shadow-lg">
        <div className="flex items-center row-span-4 mt-6">
          <ul className="list-none space-y-8 font-subtitles min-w-fit w-full text-details">
            <li className="w-full">
              <a
                href="#"
                aria-label="dashboard"
                className="py-3 relative flex items-center space-x-4 hover:text-white hover:bg-details hover:w-full"
              >
                <InboxStackIcon className="h-6 w-6 ml-[.6rem]" />
                <span className="-mr-1">Inventario</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                aria-label="dashboard"
                className="py-3 relative flex items-center space-x-4 hover:text-white hover:bg-details hover:w-full"
              >
                <UsersIcon className="h-6 w-6 ml-[.6rem]" />
                <span className="-mr-1">Clientes</span>
              </a>
            </li>
            <li className="w-full">
              <a
                href=""
                aria-label="dashboard"
                className="py-3 relative flex items-center space-x-4 hover:text-white hover:bg-details hover:w-full"
              >
                <ShoppingBagIcon className="h-6 w-6 ml-[.6rem]" />
                <span className="-mr-1">Venta</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-end min-w-max row-start-6 mt-6 font-subtitles  text-details">
          <a
            href=""
            aria-label="dashboard"
            className="py-3 relative flex items-center space-x-4 hover:text-white hover:bg-details hover:w-full"
          >
            <PowerIcon className="h-5 w-5 ml-3" />
            <span>Cerrar Sesión</span>
          </a>
        </div>
      </nav>
      <div className="w-full" id="detail">
        <Outlet />
      </div>
    </div>
  );
}
