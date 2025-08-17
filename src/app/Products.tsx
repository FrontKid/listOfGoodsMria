"use client";

import { FC, useState } from 'react';
import { IProduct } from './page';

type TProductsProps = { products: IProduct[]};

const Products: FC<TProductsProps> = ({products}) => {
  const [query, setQuery] = useState("")

  const productsFiltered = products.filter(product => String(product.upc)
    .toLowerCase()
    .includes(query.toLowerCase()) 
      || product.name
        .toLowerCase()
        .includes(query.toLowerCase()))

const handleQuery = (text:string) => {
  setQuery(text)
}

  return <>
  <div className="my-3 m-auto flex flex-col justify-center items-center">
      <label className="block ">
        ПОИСК ПО КОДУ И НАЗВАНИЮ
        <input value={query} onChange={(e )=> handleQuery(e.target.value)} className="bg-white rounded-2xl block w-full" type="text" />
      </label>
      <span>Кол-во отфильтрованого товара: {productsFiltered.length}</span>
      <span>Всего товара: {products.length}</span>
      </div>
      <ul className="flex justify-center items-center flex-col">
        {productsFiltered.map(
(product)=> (
  <li className="w-[300px]" key={product.id}>
    <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt="" />
    <h2>{product.name}</h2>
    <p>Code: {product.upc}</p>
    <span>Model: {product.model}</span>
  </li>
)
        )}
      </ul>;
  </> 
};

export { Products };
