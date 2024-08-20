import './Header.css';

function Header() {
  return (
    <div className="container">
    <div className="header-container">
      <div className="logo">
        <img src="../../imagens/farmacia.PNG.png" alt="" className='imgLogo'/>
        <h3 className='titulo'>Farmacia do Alex</h3>
      </div>
      <div className="pesquisa">
        <input type="text" id='inputPesquisa' placeholder='O que você está procurando?'/>
        <div className="caixa">
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className='resto'>
        <div className="icons">
        <i class="fa-regular fa-bell"></i>
        </div>
        <div className="icons">
        <i class="fa-solid fa-money-bill-wave"></i>
        </div>
      </div>
    </div>
    <div className="navBar">
      <div className="caminhos">
        <button className='btnTitulos'><span className="nomeBtn">Ofertas</span><i class="fa-solid fa-caret-down"></i></button>
      </div>
      <div className="caminhos">
        <button className='btnTitulos'><span className="nomeBtn">Infantil</span><i class="fa-solid fa-caret-down"></i></button>
      </div>
      <div className="caminhos">
        <button className='btnTitulos'><span className="nomeBtn">Adulto</span><i class="fa-solid fa-caret-down"></i></button>
      </div>
      <div className="caminhos">
        <button className='btnTitulos'><span className="nomeBtn">Idoso</span><i class="fa-solid fa-caret-down"></i></button>
      </div>
      <div className="caminhos">
        <button className='btnTitulos'><span className="nomeBtn">Maquiagens</span><i class="fa-solid fa-caret-down"></i></button>
      </div>
    </div>
    </div>
  )
}

export default Header