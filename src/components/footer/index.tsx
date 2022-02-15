import logo_header from '../../assets/images/logo.svg'
import arrowBlack from '../../assets/images/arrow-black.svg'

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

        <div className="middle-footer">
          <hr />

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
          {/* <hr /> */}
        </div>
      </div>

    </footer>
  )
}