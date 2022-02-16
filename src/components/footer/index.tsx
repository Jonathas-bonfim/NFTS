import logo_header from '../../assets/images/logo.svg';
import arrowBlack from '../../assets/images/arrow-black.svg';

import instagram from '../../assets/images/instagram.svg';
import youtube from '../../assets/images/youtube.svg';
import twitter from '../../assets/images/twitter.svg';
import email from '../../assets/images/email.svg';


import './index.scss';

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="title">
          <img src={logo_header} alt="Logo do Cabeçalho" />
          <button className="btn-top">
            <img src={arrowBlack} alt="Imagem para ir ao topo" />
          </button>
        </div>

        <hr className="hr-width" />
        <div className="middle-footer">
          <div className="middle">
            <div className="middle-left">
              <div className="middleLeft-text">
                <p>
                  Fique por dentro de <br />
                  <span>todas as novidades</span>
                </p>
              </div>

              <div className="sendEmail">
                <input type="email" placeholder='nfts@jonathasnfts.com' />
                <button className="send-button">Enviar</button>
              </div>

            </div>

            <hr />
            <div className="middle-right">

              <div className="information-styled company">

                <p>Empresa</p>
                <a href="/">Sobre</a>
                <a href="/">Serviços</a>
                <a href="/">Time</a>
                <a href="/">Carreira</a>
              </div>

              <div className="information-styled map">
                <p>Mapa</p>
                <a href="/">Galeria</a>
                <a href="/">Populares</a>
                <a href="/">Vendas</a>
                <a href="/">Contato</a>
              </div>

              <div className="information-styled links">
                <p>Links</p>
                <a href="/">FAQs</a>
                <a href="/">Termos</a>
                <a href="/">Política</a>
                <a href="/">Ajuda</a>
              </div>

            </div>
          </div>
        </div>

        <hr className="hr-width" />

        <div className="end-footer">
          <div className="social-media">
            <a href="/">www.jonathasnfts.com.br</a>
          </div>
          <div className="icons">
            <img src={instagram} alt="Instagram" />
            <img src={youtube} alt="Youtube" />
            <img src={twitter} alt="Twitter" />
            <img src={email} alt="E-mail" />
          </div>

        </div>
      </div>

    </footer>
  )
}