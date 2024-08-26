import React, { useState } from 'react';
import './Fila.css';

function Fila() {
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState('');
  const [contadorNormal, setContadorNormal] = useState(1);
  const [contadorPreferencial, setContadorPreferencial] = useState(1);

  // Função para gerar uma senha sequencial
  const gerarSenha = (tipo) => {
    let senha;
    if (tipo === 'preferencial') {
      senha = `P${contadorPreferencial}`;
      setFilaPreferencial([...filaPreferencial, senha]);
      setContadorPreferencial(contadorPreferencial + 1);
    } else {
      senha = `N${contadorNormal}`;
      setFilaNormal([...filaNormal, senha]);
      setContadorNormal(contadorNormal + 1);
    }

    console.log(`Senha ${senha} gerada e adicionada à fila ${tipo}`);
  };

  // Função para chamar uma senha
  const chamarSenha = () => {
    if (filaPreferencial.length > 0) {
      const senha = filaPreferencial[0];
      setFilaPreferencial(filaPreferencial.slice(1));
      setSenhaAtual(`Senha chamada: ${senha}`);
    } else if (filaNormal.length > 0) {
      const senha = filaNormal[0];
      setFilaNormal(filaNormal.slice(1));
      setSenhaAtual(`Senha chamada: ${senha}`);
    } else {
      setSenhaAtual('Fila vazia!');
    }
  };

  return (
    <div className="container-fila">
      <div className="bodyFila">
        <div className="tituloFila">
          <h2 className='letras'><u>Atendimento</u></h2>
        </div>
        <div className="senha-controls">
          <div className="senha-area">
            <button onClick={() => gerarSenha('normal')}>Gerar Senha</button>
            <button onClick={() => gerarSenha('preferencial')}>Senha Preferencial</button>
          </div>
          <div className="senha-area">
            <div className="chamadosUltimo">
              <button onClick={chamarSenha}>Chamar Atendimento</button>
              <div id="display-senha">{senhaAtual}</div>
            </div>
          </div>
        </div>
        <div className="titiList">
          <div className="ajustar">
            <h3 className='letras'>Fila</h3>
          </div>
          <div className="ajustar">
            <h3 className='letras'>Fila Preferencial</h3>
          </div>
        </div>
        <div className="senha-lists">
          <div className="senha-list">
            <ul>
              {filaNormal.map((senha, index) => (
                <li key={index}>{senha}</li>
              ))}
            </ul>
          </div>
          <div className="senha-list">
            <ul>
              {filaPreferencial.map((senha, index) => (
                <li key={index}>{senha}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fila;
