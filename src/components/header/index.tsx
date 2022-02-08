import logo_MetaMask from '../../assets/images/logo_MetaMask.svg'
import logo_header from '../../assets/images/logo.svg'

import './index.scss';

export function Header() {
  return (
    <header>
      <section className="header">

        <div className="logo-image">
          <img src={logo_header} alt="Logo do Cabeçalho" />
        </div>

        <div className="menus">
          <a href="/">Compar NFT</a>
          <a href="/">Sobre</a>
          <a href="/">FAQ</a>
        </div>

        <div className="button">
          <button className="conectar-carteira">
            <img src={logo_MetaMask} alt="Conectar Carteira" />
            Conectar Carteira
          </button>
        </div>

      </section>
    </header>
  )
}