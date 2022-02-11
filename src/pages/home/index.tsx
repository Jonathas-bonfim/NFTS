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
import arrow from '../../assets/images/arrow-white.svg';

import astronaut1 from '../../assets/images/astronauta 1.png';
import astronaut2 from '../../assets/images/astronauta-2.png';
import astronaut3 from '../../assets/images/astronauta-3.png';
import astronaut4 from '../../assets/images/astronauta-4.png';

import artist1 from '../../assets/images/artista-1.png';
import artist2 from '../../assets/images/artista-2.png';
import artist3 from '../../assets/images/artista-3.png';
import artist4 from '../../assets/images/artista-4.png';
import artist5 from '../../assets/images/artista-5.png';
import artist6 from '../../assets/images/artista-6.png';

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

      <section className="section-popularesWeek">
        <div className="div-popular-week">
          <h1> <span className="informational-span">Populares</span> da Semana</h1>
        </div>

        <div className="populares">

          <div className="author-popular separated-astronauts">

            <div className="astronaut1 astronaut">
              <div className="div-astronaut">
                <h2 className="astronaut-title">Astronauta 1</h2>
                <img className="arrow" src={arrow} alt="Símbolo para astronauta" />
              </div>
              <div className="astronaut-subtitle">
                <h4 className="astronaut-name"> Jônathas Bonfim</h4>
                <p className="astronaut-value">1.50 RKT</p>
              </div>
              <img src={astronaut1} alt="Imagem do Astronauta" className="astronaut-image" />
            </div>

            <hr />

            <div className="astronaut2 astronaut">
              <div className="div-astronaut">
                <h2 className="astronaut-title">Astronauta 2</h2>
                <img className="arrow" src={arrow} alt="Símbolo para astronauta" />
              </div>
              <div className="astronaut-subtitle">
                <h4 className="astronaut-name"> Deisy Bonfim</h4>
                <p className="astronaut-value">2.0 RKT</p>
              </div>
              <img src={astronaut2} alt="Imagem do Astronauta" className="astronaut-image" />
            </div>

          </div>

          <div className="author-popular">

            <div className="astronaut3 astronaut">
              <div className="div-astronaut">
                <h2 className="astronaut-title">Astronauta 3</h2>
                <img className="arrow" src={arrow} alt="Símbolo para astronauta" />
              </div>
              <div className="astronaut-subtitle">
                <h4 className="astronaut-name"> Enza &amp; Cecília</h4>
                <p className="astronaut-value">3.75 RKT</p>
              </div>
              <img src={astronaut3} alt="Imagem do Astronauta" className="astronaut-image" />
            </div>

            <hr />


            <div className="astronaut4 astronaut">
              <div className="div-astronaut">
                <h2 className="astronaut-title">Astronauta 4</h2>
                <img className="arrow" src={arrow} alt="Símbolo para astronauta" />
              </div>
              <div className="astronaut-subtitle">
                <h4 className="astronaut-name"> Lemão &amp; Cenir </h4>
                <p className="astronaut-value">4.0 RKT</p>
              </div>
              <img src={astronaut4} alt="Imagem do Astronauta" className="astronaut-image" />
            </div>

          </div>

        </div>
      </section>

      <section className="section-bestArtists">

        <div className="bestArtists">
          <h1 className="artist-title">Melhores <span>Artistas</span> </h1>
        </div>

        <div className="gallery-artists">
          <div className="artistaaa">
            <img src={artist1} alt="Artista" />
            <div className="text">
              <p>Jônathas Bonfim</p>
              <p>80 Fotografias</p>
            </div>
          </div>
        </div>
      </section>
    </body >


  )
}