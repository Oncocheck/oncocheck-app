import React from 'react';
import { useNavigate } from 'react-router-dom';
import './gerenciar-usuarios.css';

function GerenciarUsuarios() {
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate('/admin' );
  }

  return (
    <div className='screen-administrador'>
      <div className='box-usuarios'>
        <div>
            <p className='title-usuarios'>Editar dados do usuário</p>
            <div className='box-input-usuarios'>
                <span className='text-input-usuarios'>Nome</span>
                <input className='input-usuarios' type='text' placeholder='José Maria dos Santos'/>
            </div>
            <div className='box-input-usuarios'>
                <span className='text-input-usuarios'>Tipo</span>
                <input className='input-usuarios' type='text' placeholder='Administrador'/>
            </div>
            <div className='box-input-usuarios'>
                <span className='text-input-usuarios'>CRM</span>
                <input className='input-usuarios' type='text'/>
            </div>
            <div className='box-input-usuarios'>
                <span className='text-input-usuarios'>Login</span>
                <input className='input-usuarios' type='text' placeholder='exemplologin1234'/>
            </div>
            <div className='box-input-usuarios'>
                <span className='text-input-usuarios'>Senha</span>
                <input className='input-usuarios' type='text' placeholder='**********'/>
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

export default GerenciarUsuarios;