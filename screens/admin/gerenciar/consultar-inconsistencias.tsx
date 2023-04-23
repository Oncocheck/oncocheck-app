import React from 'react';
import { useNavigate } from 'react-router-dom';
import './consultar-inconsistencias.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ConsultarInconsistencias() {
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate('/admin' );
  }

  return (
    <div className='screen-administrador'>
      <div className='box-inconsistencia'>
        <div>
            <div className='arrow-div'>
                <button className='blocos-arrow' onClick={goToAdmin}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <p className='title-inconsistencia'>Inconsistências</p>
            <div className='sub-box-inconsistencia'>
                <div className='sub-box-title-inconsistencia'>
                    <span className='text-inconsistencia'>José Maria dos Santos</span>
                    <span className='text-blue-inconsistencia'>NSE</span>
                </div>
                <span className='sub-text-inconsistencia'>Existe um erro na descrição do exame NSE</span>
            </div>
            <div className='sub-box-inconsistencia'>
                <div className='sub-box-title-inconsistencia'>
                    <span className='text-inconsistencia'>José Maria dos Santos</span>
                    <span className='text-blue-inconsistencia'>NSE</span>
                </div>
                <span className='sub-text-inconsistencia'>Não consigo acessar os detalhes dos exames relacionados</span>
            </div>
            <div className='sub-box-inconsistencia'>
                <div className='sub-box-title-inconsistencia'>
                    <span className='text-inconsistencia'>José Maria dos Santos</span>
                    <span className='text-blue-inconsistencia'>NSE</span>
                </div>
                <span className='sub-text-inconsistencia'>Não consigo acessar os detalhes dos exames relacionados</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultarInconsistencias;