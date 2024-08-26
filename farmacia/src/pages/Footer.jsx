import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [inputValue, setInputValue] = useState('');

    function recebaa() {
        alert(`Verifique seu E-mail ${inputValue}`);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="container-footer">
                <div className="esquerda">
                </div>
                <div className="meio">
                    <div className="email">
                        <div className="centralEsquerda">
                            <div className="cantoEsquerda">
                                
                                <h2>Receba todas as ofertas!</h2>
                            </div>
                            <div className="baixoEsquerda">
                                <span>Direto pelo seu E-mail</span>
                            </div>
                        </div>
                        <div className="emailMeio">
                            <input 
                                type="text" 
                                placeholder="Digite seu nome" 
                                className="inputEmailDois" 
                                onChange={handleInputChange} 
                                value={inputValue}
                            />
                            <input 
                                type="text" 
                                placeholder="Digite seu E-mail" 
                                className="inputEmailDois" 
                            />
                            <button onClick={recebaa} className="btnReceber">Receber</button>
                        </div>
                    </div>
                </div>
                <div className="direita">

                </div>
            </div>
        </>
    );
}

export default Footer;
