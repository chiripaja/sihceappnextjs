
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
 <div>
   <nav className="bg-white border-b border-gray-300">
        <div className="flex justify-between items-center px-9">
         
            <button id="menuBtn">
            <MdOutlineMenu size={25}/>
            </button>

      
            <div className="ml-1">
               <h1>HRHVM</h1>
            </div>

            <div className="space-x-4">
                <button>
                    <i className="fas fa-bell text-cyan-500 text-lg"></i>
                </button>

         
                <button>
                    <i className="fas fa-user text-cyan-500 text-lg"></i>
                </button>
            </div>
        </div>
    </nav>


    <div id="sideNav" className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">

        <div className="p-4 space-y-4">
         
            <Link href="/admin/dashboard" aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                <i className="fas fa-home text-white"></i>
                <span className="-mr-1 font-medium">Inicio</span>
            </Link>

            <Link href="/admin/pokemon" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-wallet"></i>
                <span>Pokemon</span>
            </Link>
            <Link href="/admin/contador" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-exchange-alt"></i>
                <span>Contador</span>
            </Link>
            <Link href="/admin/favorites" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-user"></i>
                <span>Pokemon Favoritos</span>
            </Link>
            <a href="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                <i className="fas fa-sign-out-alt"></i>
                <span>Cerrar sesión</span>
            </a>
        </div>
    </div>

    <div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

        <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
            <div className="flex items-center">
                <i className="px-3 fas fa-search ml-1"></i>
                <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full"/>
            </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md my-4">
            {children}
        </div>

     
    </div>
 </div>
  );
}