import React, { useState } from 'react';
import axios from 'axios';
import Button from './button';

const FormComplete: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }
    setError('');

    try {
      await axios.post('http://localhost:3001/subscriptions', { name, email, phone, message });
      alert('Você foi inscrito com sucesso!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error('Erro ao inscrever:', error);
      alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <div className="bg-white col-span-3 flex items-center gap-2 p-4 rounded-lg">
      <form onSubmit={handleSubmit} className="lg:flex w-full flex-col gap-4">
        <h1>Entre em Contato:</h1>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <input
          name="phone"
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />

        <Button variant='solid' text="Subscribe Now" />

      </form>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default FormComplete;
