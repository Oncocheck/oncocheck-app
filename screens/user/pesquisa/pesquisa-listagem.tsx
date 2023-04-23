import React from 'react';

import './pesquisa-listagem.css';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';

import Cerebro from '/assets/cerebro.png';

function PesquisaListagem() {
  const navigate = useNavigate();
  const { user } = useParams<'user'>();
  
  const goToHome = () => {
    navigate('/' + user);
  }

  const goToDetalhe = () => {
    navigate('tg');
  }

  return (
    <div className='background-page-pesquisa'>
      <div className='arrow-div'>
        <button className='blocos-arrow' onClick={goToHome}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div className='title-content'>
          <img className='image-pesquisa' src={Cerebro} alt="Image" />
          <p className='title-pesquisa'>Cerebro</p>
      </div>
      <div>
        <p className='sub-title-pesquisa'>Exames Relacionados</p>
      </div>
      <div className='pesquisa-results'>
        <p className='titulo-resultados'>2 Resultados:</p>
        <div className='pesquisa-results-blocos'>
          <p className='nome-resultados'>NSE</p>
          <button className='blocos-arrow' onClick={goToDetalhe}>
              <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <div className='pesquisa-results-blocos'>
          <p className='nome-resultados'>TG</p>
          <button className='blocos-arrow' onClick={goToDetalhe}>
              <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PesquisaListagem;