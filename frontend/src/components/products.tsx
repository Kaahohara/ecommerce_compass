import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from './button';

interface Product {
  id: number;
  name: string;
  gender: string;
  age: string;
  price: string;
  imageUrl: string;
  category: string;
}

interface ProductProps {
  category: string; 
  title: string;
  subtitle: string;
}

const Products = ({ category, subtitle, title }: ProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get<Product[]>("http://localhost:3001/products")
      .then(response => {
        const data = response.data;
        setProducts(data);

        const filtered = data.filter(product => product.category === category);
        setFilteredProducts(filtered);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, [category]); 

  return (
    <div className="flex justify-center my-10 "> 
      <div className="max-w-[1200px] w-full">
        <div className="flex justify-between my-10">
          <div className="flex flex-col">
            <p>{subtitle}</p>
            <p className="text-primary font-bold">{title}</p>
          </div>
          <Button text="View More" icon={<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333' stroke='#003459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>} variant="outline" />
        </div>
        
        <div className="grid grid-cols-4 gap-6"> 
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-xl rounded-md w-full h-[98] px-2 py-4">
              <img className="rounded-md" src={product.imageUrl} alt={product.name} />

              <div className="flex flex-col gap-4">
                <p className="font-bold">{product.name}</p>
                <div className="flex gap-4">
                          <p className="text-sm text-neutral">
                    {product.category === 'Pet' ? (
                      <>
                        Gender: <span className="font-bold">{product.gender}</span>
                      </>
                    ) : (
                      <>
                        Product: <span className="font-bold">{product.gender}</span>
                      </>
                    )}
                  </p>
            
                  <p className="text-sm text-neutral">
                    {product.category === 'Pet' ? (
                      <>
                        Age: <span className="font-bold">{product.age}</span>
                      </>
                    ) : (
                      <>
                        Size: <span className="font-bold">{product.age}</span>
                      </>
                    )}
                  </p>

                </div>
                <p className="text-sm">
                    <span className="font-bold ">{product.price} VDN</span>
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
