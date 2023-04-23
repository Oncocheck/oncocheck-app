import React from 'react';

import './favoritos.css';
import Cerebro from '../assets/cerebro.png'
import { faArrowLeft, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useParams } from 'react-router-dom';

function Favoritos() {
  const navigate = useNavigate();
  const { user } = useParams<'user'>();
  
  const goToHome = () => {
    navigate('/' + user);
  }

  return (
    <div className='background-page-pesquisa'>
        <div className='arrow-div'>
            <button className='blocos-arrow' onClick={goToHome}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
        </div>
        <div>
            <p className='title-inconsistencia'>Exames Favoritos</p>
        </div>
        <div className='pesquisa-results'>
            <div className='pesquisa-results-blocos'>
            <p className='nome-resultados'>NSE</p>
            <button className='blocos-arrow'>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
            </div>
            <div className='pesquisa-results-blocos'>
            <p className='nome-resultados'>TG</p>
            <button className='blocos-arrow'>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Favoritos;