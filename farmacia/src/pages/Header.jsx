import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="../../imagens/farmacia.PNG.png" alt="" className='imgLogo'/>
        <h3 className='titulo'>Farmacia do Alex</h3>
      </div>
      <div className='resto'>
        <div className="icons">
        <i class="fa-regular fa-bell"></i>
        </div>
        <div className="icons">
        <i class="fa-solid fa-money-bill-wave"></i>
        </div>
        <div className="icons">
        <i class="fa-solid fa-bullseye"></i>
        </div>
      </div>
    </div>
  )
}

export default Header