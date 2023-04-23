import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main-page.css';
import Home from '/assets/home-oncocheck.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons';

function MainPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const goToPesquisa = () => {
    navigate(input);
  }

  const goToLogin = () => {
    navigate('/' );
  }

  const goToFavoritos = () => {
    navigate('favoritos' );
  }

  return (
    <div className='background-page-home'>
      <div className='bloco-buttons'>
        <button className='blocos-arrow' onClick={goToFavoritos}>
            <FontAwesomeIcon icon={faStar} />
        </button>
        <button className='blocos-arrow' onClick={goToLogin}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </button>
      </div>
      <p className='title-home'>Escolha uma área na imagem abaixo</p>
      <img className='image-home' src={Home} alt="Image" />
      <div className='box-pesquisa-home'>
        <p className='title-pesquisa-home'>Ou digite aqui sua suspeita</p>
        <input
          className='pesquisa-home'
          type="span"
          name="pesquisa"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='button-pesquisa-home' onClick={goToPesquisa}>Consultar</button>
      </div>
    </div>
  )
}

export default MainPage;