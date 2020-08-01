import React from 'react';

const imageSrc = "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80";

function Product() {
  return (
    <div className="rounded-lg bg-white overflow-hidden relative shadow">
      <img src={imageSrc} className="object-cover w-full h-full" />

      <div className="w-full bottom-0 bg-white p-3">
        <h3 class="text-lg font-bold text-gray-900">king James</h3>
        <p class="text-sm text-gray-700 mt-1 text-justify">Em homenagem ao jogador james, este hamburguer leva dois hamburgueres, 2 alfaces, molho especial...</p>

        <div className="flex justify-between items-center mt-2 w-full">
          <span className="text-small font-medium text-gray-700">R$ 16,00</span>

          <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium rounded-md text-green-700 bg-green-200 hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
              Adicionar ao carrinho
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;