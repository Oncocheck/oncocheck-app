import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gerenciar-exames.css';

function GerenciarExames() {
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate('/admin' );
  }

  return (
    <div className='screen-administrador'>
      <div className='box-exames'>
        <div>
            <p className='title-exames'>Cadastrar Exames</p>
            <div className='box-input-exames'>
                <span className='text-input-exames'>Nome</span>
                <input className='input-exames' type='text' placeholder='José Maria dos Santos'/>
            </div>
            <div className='box-input-exames'>
                <span className='text-input-exames'>Orgãos Relacionados</span>
                <input className='input-exames' type='text' placeholder='Administrador'/>
            </div>
            <div className='box-input-exames'>
                <span className='text-input-exames'>Descrição</span>
                <textarea className='textarea-exames'/>
            </div>
        </div>
        <div className='box-button'>
          <button className='button-azul'>Salvar</button>
        </div>
        <div className='box-button'>
          <button className='button-vermelho' onClick={goToAdmin}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default GerenciarExames;