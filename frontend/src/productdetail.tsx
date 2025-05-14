import { useParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Button from './components/button';
import Carrosel from './components/carrosel';
import Products from './components/products';
import Footer from './components/footer';
import Menu from './components/menu';
import CarroselPrincipal from './components/carroselprincipal';
import ModalForm from './components/modalForm';
import SubscribeFormComplete from './components/formcomplete'
export interface Product {
  id: number;
  name: string;
  gender: string;
  color: string;
  price: number;
  breed: string;
  age: string;
  imageUrl: string;
  sku: string;
  vaccinated: boolean;
  dewormed: boolean;
  cert: boolean;
  microchip: boolean;
  location: string;
  additionalInformation: string;
  category: 'Pet' | 'Product';
  publishedAt: string;
}

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    axios
      .get<Product>(`http://localhost:3001/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <div className='lg:block hidden'><Menu /></div>
      <div className="flex items-center justify-center lg:p-6">
        <div className="max-w-5xl w-full flex flex-col items-center lg:items-start justify-center md:flex-row gap-8 bg-white shadow rounded lg:p-6">
          <div className="w-full lg:w-1/2">
            <CarroselPrincipal />
          </div>
          <div className="w-full p-4 lg:w-1/2">
            <p className="text-md lg:block hidden text-neutral mb-4">SKU#{product.sku}</p>
            <h1 className="text-xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-primary mb-4">{product.price} VDN</p>
            <div className='flex gap-6 py-4'>
              <Button text='Contact Us' onClick={handleOpenModal} variant='solid' />
              <Button text='Chat with Monito' variant='outline' />
            </div>
            
            <ModalForm isOpen={isModalOpen} onClose={handleCloseModal}>
           <SubscribeFormComplete/>
            </ModalForm>

            <table className="table-auto w-full text-sm text-left text-gray-700">
              <p className='font-bold text-xl'>Information</p>
              <tbody>
                <tr><td className="py-2 font-medium">SKU</td><td className="py-2">: {product.sku}</td></tr>
                <tr><td className="py-2 font-medium">Gender</td><td className="py-2">: {product.gender}</td></tr>
                <tr><td className="py-2 font-medium">Age</td><td className="py-2">: {product.age}</td></tr>
                <tr><td className="py-2 font-medium">Breed</td><td className="py-2">: {product.breed}</td></tr>
                <tr><td className="py-2 font-medium">Color</td><td className="py-2">: {product.color}</td></tr>
                <tr><td className="py-2 font-medium">Vaccinated</td><td className="py-2">: {product.vaccinated ? 'Yes' : 'No'}</td></tr>
                <tr><td className="py-2 font-medium">Dewormed</td><td className="py-2">: {product.dewormed ? 'Yes' : 'No'}</td></tr>
                <tr><td className="py-2 font-medium">Cert</td><td className="py-2">: {product.cert ? 'Yes (MKA)' : 'No'}</td></tr>
                <tr><td className="py-2 font-medium">Microchip</td><td className="py-2">: {product.microchip ? 'Yes' : 'No'}</td></tr>
                <tr><td className="py-2 font-medium">Location</td><td className="py-2">: {product.location}</td></tr>
                <tr><td className="py-2 font-medium">Published Date</td><td className="py-2">: {new Date(product.publishedAt).toLocaleDateString()}</td></tr>
                <tr>
                  <td className="py-2 font-medium align-top">Additional Information</td>
                  <td className="py-2 whitespace-pre-line">: {product.additionalInformation}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Carrosel />
      <Products category='Pet' subtitle='Whats new?' title='Take a look at some of our pets' variant={''} limit_itens={4} filters={{
        gender: [],
        color: [],
        breed: []
      }} />
      <Footer />
    </div>
  );
}

export default ProductDetail;
