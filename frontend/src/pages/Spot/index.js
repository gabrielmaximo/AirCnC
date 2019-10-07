/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';
import './styles.css'

export default function Spot({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('userId');

        console.log(user_id);

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        const response = await api.post('/spots', data, {
            headers: { user_id }
        });

        console.log(response);

        history.push('/profile');
    }
    return (<form onSubmit={handleSubmit}>
        <label id="thumbnail" style={{ backgroundImage: `url(${preview})`}}
        className={thumbnail ? 'has-thumbnail' : ''}
        >
            <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
            <img src={camera} alt="Select img" />
        </label>

        <label htmlFor="company">EMPRESA *</label>
        <input id="company" 
        placeholder="Digite sua Empresa" 
        value={company} 
        onChange={event => setCompany(event.target.value)} 
        />

        <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
        <input 
        id="techs" 
        placeholder="Quais suas tecnologias?" 
        value={techs} 
        onChange={event => setTechs(event.target.value)} 
        />
        
        <label htmlFor="price">VALOR DA DIÁRIA <span>(em branco para spot Gratuito)</span></label>
        <input 
        id="price" 
        placeholder="Dê o seu valor p/dia nesse spot!" 
        value={price} 
        onChange={event => setPrice(event.target.value)} 
        />

        <button type="submit" className="btn">Cadastrar</button>
    </form>
    );
}
