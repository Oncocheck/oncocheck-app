import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './administrador.css';
import LogoOncocheck from '/assets/logo-oncocheck.png'

function Administrador() {
  const navigate = useNavigate();

  const goToExames = () => {
    navigate('exames');
  }

  const goToUsuarios = () => {
    navigate('usuarios');
  }

  const goToInconsistencias = () => {
    navigate('inconsistencias');
  }

  const goToLogin = () => {
    navigate('/' );
  }

  return (
    <div className='screen-administrador'>
      <div className='title-adiministrador'>
        <img className='image-administrador' src={LogoOncocheck} alt="Image" />
        <p className='paragrafo-administrador'>Administrador</p>
      </div>
      <div className='box-administrador'>
        <div className='box-button'>
          <button className='button-azul' onClick={goToExames}>Gerenciar Exames</button>
          <button className='button-azul' onClick={goToUsuarios}>Gerenciar Usuários</button>
          <button className='button-azul' onClick={goToInconsistencias}>Consultar Inconsistências</button>
        </div>
        <div className='box-button'>
          <button className='button-vermelho' onClick={goToLogin}>Sair</button>
        </div>
      </div>
    </div>
  )
}

export default Administrador;