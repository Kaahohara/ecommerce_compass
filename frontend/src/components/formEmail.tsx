import React, { useState } from 'react';
import axios from 'axios';
import Button from './button';
const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
    setError('');

    try {
      await axios.post('http://localhost:3001/subscriptions', { email });
      alert('Você foi inscrito com sucesso!');
      setEmail('');
    } catch (error) {
      console.error('Erro ao inscrever:', error);
      alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <div className="bg-white col-span-3 flex items-center gap-2 p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="lg:flex w-full">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
       <Button variant='solid' text="Subscribe Now"/>
      </form>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default SubscribeForm;
