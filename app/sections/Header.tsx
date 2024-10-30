import {
    MagnifyingGlassIcon as SearchIcon,
    UserIcon,
    ShoppingCartIcon,
    ChevronDownIcon,
    Bars3Icon,
  } from '@heroicons/react/24/outline';
  
  export const Header = () => {
    return (
      <header className="py-5 border-b border-gray-200 shadow-sm bg-gray-50 sticky top-0 z-10">
        <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center border border-white/15 rounded-xl px-4">
            <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
  
            {/* Heading Section */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="border rounded-lg flex justify-center items-center border-white/15 p-2">
                <h1 className="text-3xl md:text-5xl font-bold">tap.</h1>
              </div>
              {/* Mobile Menu Icon */}
              <div className="flex md:hidden">
                <Bars3Icon className="h-6 w-6 text-black cursor-pointer" />
              </div>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex gap-8 text-md font-bold">
                <a href="#" className="text-black hover:text-gray-600 transition">
                  Home
                </a>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-black hover:text-gray-600 transition">
                    Products
                  </a>
                  <ChevronDownIcon className="h-5 w-5 hover:text-gray-600 transition text-black cursor-pointer" />
                </div>
                <a href="#" className="text-black hover:text-gray-600 transition">
                  Business
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition">
                  Blogs
                </a>
                <a href="#" className="text-black hover:text-gray-600 transition">
                  Tutorials
                </a>
              </nav>
            </div>
  
            {/* Icon Section */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-2 items-center text-md font-bold">
                <a href="#">English</a>
                <ChevronDownIcon className="h-5 w-5 text-gray-900 cursor-pointer" />
              </nav>
  
              {/* Search Icon */}
              <SearchIcon className="h-6 w-6 text-black cursor-pointer" />
              <UserIcon className="h-6 w-6 text-black cursor-pointer" />
              <ShoppingCartIcon className="h-6 w-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    );
  };
  