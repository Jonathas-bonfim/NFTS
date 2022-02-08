import { Header } from "../../components/header";

import groupAvatars from '../../assets/images/group-avatars.png';
import badge from '../../assets/images/badge.svg';

import galeria1 from '../../assets/images/galeria-1.png';
import galeria2 from '../../assets/images/galeria-2.png';
import galeria3 from '../../assets/images/galeria-3.png';
import galeria4 from '../../assets/images/galeria-4.png';
import galeria5 from '../../assets/images/galeria-5.png';
import galeria6 from '../../assets/images/galeria-6.png';
import galeria7 from '../../assets/images/galeria-7.png';
import galeria8 from '../../assets/images/galeria-8.png';

import './index.scss';

export function Home() {
  return (
    <body>
      <Header />
      <main>
        <section className="section-text">
          <div className="artists">
            <p>
              Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
              Compre, venda e descubra ativos digitais exclusivos para você.
            </p>
            <div className="artists-selected">
              <img src={groupAvatars} alt="Artistas Selecionados" />
              <div className="number-artists">
                <h4>+10</h4>
                <p>Artistas Selecionados</p>
              </div>
            </div>
          </div>

          <div className="text-main">
            <h1>
              Descubra a verdadeira <br />
              arte digital e <br />
              colecione diversas
              <p className="nfts-text">
                NFTs
              </p>
            </h1>
          </div>

          <div className="logo">
            <img src={badge} alt="Logo Badge" />
          </div>

        </section>


        <section className="section-gallery">
          <div className="first-gallery">
            <img src={galeria1} alt="Foto da primeira galeria" />
            <img src={galeria2} alt="Foto da primeira galeria" />
            <img src={galeria3} alt="Foto da primeira galeria" />
            <img src={galeria4} alt="Foto da primeira galeria" />
          </div>

          <div className="last-gallery">
            <img src={galeria5} alt="Foto da segunda galeria" />
            <img src={galeria6} alt="Foto da segunda galeria" />
            <img src={galeria7} alt="Foto da segunda galeria" />
            <img src={galeria8} alt="Foto da segunda galeria" />
          </div>

        </section>

      </main>
    </body>
  )
}