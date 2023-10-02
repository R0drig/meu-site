import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <a href="#" className="text-black text-2xl font-bold">R.Reis</a>

        {/* Links de Navegação */}
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-black hover:underline">Home</a>
          </li>
          <li>
            <a href="#portfolio" className="text-black hover:underline">Portfólio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
