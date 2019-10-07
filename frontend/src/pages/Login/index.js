import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
      event.preventDefault();
    
      const response = await api.post('/users', { email });
    
      const { _id } = response.data;
  
      localStorage.setItem('userId', _id);

      console.log(response);

    history.push('/profile');
    }

    return (
        <>
            <p>
            Ofereça <strong>Spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa!
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input
            id="email"
            type="email"
            placeholder="Digite seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}