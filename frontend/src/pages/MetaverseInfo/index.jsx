import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Helmet from 'react-helmet';

import "./styles.scss";

export function MetaverseInfo() {
  return (

    <div className="home-container">
      <Helmet>
        <title>Saiba Mais | Alugaverso</title>
      </Helmet>
      <div className="metaverseInfo-container">
        <h2 className="metaverseInfo-container__title">Saiba mais</h2>
        <p className="metaverseInfo-container__p-title">
          O Metaverso é um espaço ainda em construção e pensando nisso preparamos algumas informações bacanas para você ficar ainda mais por dentro do que vem por aí e como se adaptar a essa nova forma de interação.
        </p>
      </div>

      <div className="metaverseInfo__div-accordion">
        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >

              <p className="metaverseInfo__accordion__title">1. O que é Metaverso?</p>

            </AccordionSummary>
          </div>

          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <p>
                A palavra Metaverso deriva do Grego Meta que significa “Em seguida” e Verso de Universo. Ou seja, um universo além. Todos os dias surgem notícias e definições desse “Universo além”. Mas, para simplificar, preferimos abordar o conceito de Metaverso com 4 requisitos que são um consenso dito por especialistas da área.
                Segundo Kenneth Corrêa, para uma plataforma ser considerada Metaverso deve ser/ter:
              </p>
              <ol>
                <li>Ambiente Virtual (internet)</li>
                <li>Imersivo (ter a impressão de estar dentro do ambiente)</li>
                <li>Coletivo (não é um jogo individual ou ter apenas interações com bots, precisa ter outras pessoas)</li>
                <li>Persistente (não é possível pausar, você precisa estar presente)</li>
              </ol>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon
                className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">2. Metaverso é um único universo?</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <p>Não. O Metaverso, hoje, está sendo escrito e desenvolvido em muitas frentes: saúde, entretenimento, vendas, reuniões corporativas, com muitas inovações e pesquisas. Empresas de variados setores como Adidas, Carrefour, Tinder, Stella Artois, Hyundai, Lojas Renner, já estão experimentando essas oportunidades.</p>
              <p>Também no mundo corporativo há plataformas de reuniões como Spatial, Horizon (empresa Meta), Altspace VR que nos indicam sendo as reuniões virtuais são uma realidade no mercado internacional, um ambiente personalizavel para receber clientes e colegas de trabalho, inclusive sendo possivel simulações, test drive e modelagem de produtos.</p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">3. O Metaverso tem benefícios?</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <p>Sim. O principal benefício é a oportunidade de ter vivências mais naturais de socialização entre as pessoas que não estão fisicamente conectadas.</p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">4. Conseguimos ter experiências de lazer no Metaverso? </p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <p>Sim. Hoje, muitas plataformas de jogos atendem aos quatro requisitos descritos anteriormente como Minecraft, Fortinite, Roblox, PKXD (brasileira). Temos que considerar a importância delas no mercado com milhões de acessos diários no Brasil e no mundo e investimento em e-games, com empresas e universidades patrocinando competições e times profissionais.</p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">5. Para além dos benefícios de eliminar barreiras físicas para a comunicação, interações e lazer; quais pontos são importantes ficarmos atentos e refletirmos?
              </p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <p>É importante discutir, refletir e  redefinir conceitos sobre segurança de dados, ética, saúde mental, vícios e outras questões e possibilidades que ainda nem existem… E, como toda experiência existem sucessos e pontos a melhorar.</p>
              <p>Acreditamos que o Metaverso é uma oportunidade de acompanhar a evolução da tecnologia, e com o aumento do tempo que passamos conectados e da importância que a internet tem na vida das pessoas, gostaríamos de perguntar: Com quem você quer se conectar?</p>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">6. Mergulhe no universo de podcasts para saber mais sobre Metaverso.</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <ul>
                <li>
                  <a
                    href="https://open.spotify.com/episode/2rCSUMTKdeGu0rhmraYl8S?si=1aX1YXJ4Q_C_fczH5R5Efw&utm_source=copy-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    O Metaverso vai substituir o mundo físico?
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/episode/08LMmrkbHl6VEVaPEHHrWr?si=42-kMcM3SHSMwWuBbsnbfA&utm_source=copy-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metaverso: o que é e como irá funcionar a “nova internet”?
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/episode/77CgaFQYM4YOBaL5KvfVpz?si=8KZPaRogTgmfOcq4g1uKvQ&utm_source=copy-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metaverso: o dinheiro que já circula na economia do futuro
                  </a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">7. Amplie os horizontes com as várias visões sobre o Metaverso</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=G-6_VUCQ2R0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metaverso: como funciona? O que tem dentro, afinal?
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=u_jJkkxeE30"
                    target="_blank"
                    rel="noreferrer"
                  >
                    O Metaverso na visão de 2 programadores
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=_7-TuwqGmNo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metaverso -  Como serão as relações futuras?
                  </a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title">8. Veja os eventos que já aconteceram no Metaverso</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <ul>
                <li>
                  <a
                    href="https://canaltech.com.br/entretenimento/shows-que-ja-aconteceram-no-metaverso/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    5 shows que já aconteceram no Metaverso
                  </a>
                </li>
                <li>
                  <a
                    href="https://events.decentraland.org/event/?id=f33a1b81-632e-4fa2-9f49-06cc0905c135"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cretaverso | Lançamento do novo Creta da Hyundai
                  </a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className="metaverseInfo__accordion">
          <div className='metaverseInfo__accordion__divider-title'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='color-icon' />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <p className="metaverseInfo__accordion__title"> 9. Acompanhe a série que detalha os preparativos do primeiro casamento de brasileiros no Metaverso</p>
            </AccordionSummary>
          </div>
          <AccordionDetails>
            <div className="metaverseInfo__accordion__p">
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=CTli4VuofX8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Metalove – A Série
                  </a>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
}
