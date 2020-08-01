import Head from 'next/head'
import Menu from '../components/Menu';

import Product from '../components/Product';

export default function Home() {
  return (
    <div className="p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <b>King burguer</b>

          <img src="https://via.placeholder.com/32" className="rounded-full	" alt="inmg"/>
        </div>

        <Menu />
      </div>

      <div class="container mx-auto grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, () => <Product />)}
      </div>

    </div>
  )
}