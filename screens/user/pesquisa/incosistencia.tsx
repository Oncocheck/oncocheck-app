import React from 'react';

import './inconsistencia.css';
import { useNavigate, useParams } from 'react-router-dom';

function Inconsistencia() {
  const navigate = useNavigate();
  const { user } = useParams<'user'>();
  
  const goToHome = () => {
    navigate('/' + user);
  }

  return (
    <div className='background-page-pesquisa'>
        <div>
            <p className='title-inconsistencia'>Relatar Inconsistência</p>
        </div>
        <div>
            <p className='sub-title-incosistencia'>Descreva a inconsistência no campo abaixo</p>
            <textarea
                className='input-inconsistencia'
            />
        </div>
        <div className='bloco-botao-incosistencia'>
            <button className='button-enviar' onClick={goToHome}>Enviar</button>
            <button className='button-cancelar' onClick={goToHome}>Cancelar</button>
        </div>
    </div>
  )
}

export default Inconsistencia;