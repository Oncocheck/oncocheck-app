import React from 'react';
import './detalhes-pesquisa.css';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';

import Cerebro from '/assets/cerebro.png';

function DetalhesPesquisa() {
    const navigate = useNavigate();
    const { user } = useParams<'user'>();

    const goToHome = () => {
      navigate('/' + user);
    }

    const goToInconsistencia = () => {
        navigate('inconsistencia');
    }

    return (
        <div className='background-page-pesquisa'>
            <div className='arrow-div'>
                <button className='blocos-arrow' onClick={goToHome}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </div>
            <div className='title-content'>
                <div className='header-titulo'>
                    <img className='image-pesquisa' src={Cerebro} alt="Image" />
                    <p className='title-pesquisa'>TG</p>
                </div>
                <div className='header-titulo'>
                    <p className='title-favoritar'>Favoritar</p>
                    <button className='blocos-favoritar'>
                        <FontAwesomeIcon icon={faStar} />
                    </button>
                </div>
            </div>
            <div className='text-detalhes'>
                <p>
                A tireoglobulina é um marcador tumoral muito utili-zado para avaliar o desenvolvimento do câncer de tireoide, especialmente durante o seu tratamen-to, ajudando o médico a adaptar a forma de tratamen-to e/ou as doses, de acordo com os resultados.
                </p>
                <p>
                O valor de tireoglobulina em uma pessoa saudável, sem qualuer alteração na tireoide, geralmente é inferior a 10 ng/mL. Assim se o resultado do exame estiver acima desses valores, pode indicar a pre-sença de um problema na tireoide.
                </p>
            </div>
            <div className='bloco-botao'>
                <button className='button-relatar' onClick={goToInconsistencia}>Relatar inconsistência</button>
            </div>
        </div>
    )
}

export default DetalhesPesquisa;