import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header-container">
        <div className="logo" onClick={() => navigate('/')}> 
          <img src="../../imagens/farmacia.PNG.png" alt="" className='imgLogo'/>
          <h3 className='titulo'>Farmacia do Alex</h3>
        </div>
        <div className="pesquisa">
          <input type="text" id='inputPesquisa' placeholder='O que você está procurando?'/>
          <div className="caixa">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className='resto'>
          <div className="icons">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="icons">
            <i className="fa-solid fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
      <div className="navBar">
        <div className="caminhos">
          <button className='btnTitulos'><span className="nomeBtn">Ofertas</span></button>
        </div>
        <div className="caminhos">
          <button className='btnTitulos'><span className="nomeBtn">Infantil</span></button>
        </div>
        <div className="caminhos">
          <button className='btnTitulos'><span className="nomeBtn">Adulto</span></button>
        </div>
        <div className="caminhos">
          <button className='btnTitulos'><span className="nomeBtn">Idoso</span></button>
        </div>
        <div className="caminhos">
          <button 
            className='btnTitulos'
            onClick={() => navigate('/fila')}
          >
            <span className="nomeBtn">Fila</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
