import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./button";
import Pagination from "./pagination";
import { Link } from "react-router";

interface Product {
  age: string;
  category: string;
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  gender: string;
  color: string;
  breed: string;
}

interface ProductsProps {
  category: string;
  subtitle: string;
  title: string;
  variant: string;
  limit_itens?: number; 
  filters: {
    gender: string[];
    color: string[];
    breed: string[];
  };
}

interface ProductResponse {
  products: Product[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

const Products: React.FC<ProductsProps> = ({
  category,
  subtitle,
  title,
  variant,
  filters,
  limit_itens = 8, 
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [puppiesNumber, setPuppiesNumber] = useState(0);

  const fetchProducts = async () => {
    try {
      const params: any = {
        page,
        limit: limit_itens, 
        ...filters,
      };

      if (filters.gender.length > 0) params.gender = filters.gender.join(",");
      if (filters.color.length > 0) params.color = filters.color.join(",");
      if (filters.breed.length > 0) params.breed = filters.breed.join(",");

      const res = await axios.get<ProductResponse>(
        `http://localhost:3001/products/category/${category}`,
        { params: { ...params } }
      );

      setProducts(res.data.products);
      const petQtd = res.data.products.filter(p => p.category === "Pet").length;
      setPuppiesNumber(petQtd);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    setPage(1); 
  }, [filters]);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="flex justify-center items-center my-10">
      <div className="lg:max-w-[1200px] p-5 lg:p-0 w-full">
        {variant !== "category" && ( 
        <div className="flex justify-between my-10">
          <div className="flex flex-col">
            <p>{subtitle}</p>
            <p className="text-primary font-bold">{title}</p>
          </div>
          <div className="lg:block hidden">
          <Button text="View More" icon={<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333' stroke='#003459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>} variant="outline" />
        </div>
        </div>
        )}  
        {variant === "category" && ( 
        <div className="flex justify-between my-10">
           <div className="flex gap-6">
            <p className="text-primary text-2xl ">Small Dogs</p>
            <p>{puppiesNumber} puppies</p>
      </div>
        </div>
        )}  
        <div className="grid gap-2 lg:gap-6 justify-center lg:grid-cols-[repeat(auto-fit,minmax(0,250px))] grid-cols-[repeat(auto-fit,minmax(0,160px))]">

          {products.map((product) => (
            <Link to={`/products/${product.id}`} className="text-primary " key={product.id}>
              <div className="bg-white shadow-xl rounded-md w-full h-[98] px-2 py-4">
                <img className="rounded-md" src={product.imageUrl} alt={product.name} />
                <div className="flex flex-col gap-4">
                  <p className="font-bold">{product.name}</p>
                  <div className="flex gap-4">
                    <p className="text-sm text-neutral">
                      {product.category === 'Pet' ? (
                        <>Gender: <span>{product.gender}</span></>
                      ) : (
                        <>Product: <span>{product.gender}</span></>
                      )}
                    </p>
                    <p className="text-sm text-neutral">
                      {product.category === 'Pet' ? (
                        <>Age: <span>{product.age}</span></>
                      ) : (
                        <>Size: <span>{product.age}</span></>
                      )}
                    </p>
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">{product.price} VDN</span>
                  </p>
                </div>
                
              </div>
              
            </Link>
          ))}
     
        </div>
              <div className="block lg:hidden w-full">
                    <Button text="View More" icon={<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'><path d='M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333' stroke='#003459' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>} variant="outline" />
              </div>
        {variant === "category" && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setCurrentPage={setPage}
          />
        )}

      </div>
    </div>
  );
};

export default Products;
