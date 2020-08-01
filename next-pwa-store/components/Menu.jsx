import React from 'react';
import HamburguerIcon from '../icons/Hamburguer';
import DrinksIcon from '../icons/Drinks';
import SweetIcon from '../icons/Sweet';
import BoxIcon from '../icons/Box';

function Menu() {
  return (
    <ul className="flex lg:max-w-md lg:mx-auto justify-between space-x-10 overflow-x-auto my-10 h-20">
      <li>
        <a className="flex items-center flex-col" href="#">
          <HamburguerIcon size={48} />
          <span className="text-sm mt-1 font-medium leading-none">Hamburguers</span>
        </a>
      </li>
      <li>
        <a className="flex items-center flex-col" href="#">
          <DrinksIcon size={48} />
          <span className="text-sm mt-1 font-medium leading-none">Bebidas</span>
        </a>
      </li>
      <li>
        <a className="flex items-center flex-col" href="#">
          <SweetIcon size={48} />
          <span className="text-sm mt-1 font-medium leading-none">Sobremesas</span>
        </a>
      </li>
      <li>
        <a className="flex items-center flex-col" href="#">
          <BoxIcon size={48} />
          <span className="text-sm mt-1 font-medium leading-none">Combos</span>
        </a>
      </li>
    </ul>
  );
}

export default Menu;