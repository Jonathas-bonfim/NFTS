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
import additionalImage from '../../assets/images/banner2.png';

import './index.scss';

export function Home() {
  return (
    <body>
      <div className="background">
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
      </div>


      <section className="section-information">
        <aside className="aside-information">

          <div className="arts-information">
            <h1 className="information-title">10K+</h1>
            <p className="information-paragraph">Artes</p>
          </div>

          <div className="sales-information">
            <h1 className="information-title">200+</h1>
            <p className="information-paragraph">Vendas</p>
          </div>

          <div className="artists-information">
            <h1 className="information-title">10K+</h1>
            <p className="information-paragraph">Artistas</p>
          </div>
        </aside>

        <div className="additional-information">
          <div className="additional-information-container">
            <div className="additional-information-text">
              <div className="first-text">
                <p className="informational-paragraph">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Congue malesuada amet  <br />
                  pretium lacus. Id <span className="informational-span"> potenti diam </span>et cras odio <br />
                  viverra. Amet, velit ut hac sit. Enim ultricies <br />
                  mauris mattis nunc semper.
                </p>
                <p className="author">Lorem ipsum</p>
              </div>

              <div className="first-last">
                <p className="informational-paragraph">
                  Lorem ipsum dolor sit amet, consectetur <br />
                  adipiscing elit. Congue malesuada amet <br />
                  pretium lacus. Id <span className="informational-span"> potenti diam </span> et cras odio <br />
                  viverra. Amet, velit ut hac sit. Enim ultricies <br />
                  mauris mattis nunc semper. <br />
                </p>
                <p className="author">Lorem ipsum</p>
              </div>

            </div>
            <div className="additional-information-image">
              <img src={additionalImage} alt="Imagem sobre o autor do texto" />
            </div>
          </div>
        </div>
      </section>

      <section className="second-body">
        <div className="div-popular-week">
          <h1> <span className="informational-span">Populares</span>  da Semana</h1>
        </div>
        <div className="populares">
          <div className="autor-popular"></div>
        </div>
      </section>
    </body>
  )
}