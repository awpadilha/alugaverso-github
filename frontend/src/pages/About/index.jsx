import "./styles.scss";

import { time } from "../../services/time"
import { CardTime } from "../../components/CardTime";
import Helmet from 'react-helmet';


export function About() {
    return (
        <section className="about__container">

            <Helmet>
                <title>Sobre | Alugaverso</title>
            </Helmet>
            
            <h1 className="about__container__title-h1">Sobre nós</h1>

            <p className="about__container__p">O metaverso é um ambiente de interação no ciberespaço com o uso de avatares refletindo o mundo físico mas sem suas limitações físicas. Com o objetivo de conversar com o seu próximo público várias empresas estão investindo no metaverso. Algumas marcas do setor varejista de vestuário já estão produzindo peças de roupas para avatares. A ideia é proporcionar ao usuário uma experiência “da vida real” no ciberespaço.</p>

            <p className="about__container__p">Ainda que o costume seja usar o termo “metaverso” no singular existem vários metaversos que atendem a diversas propostas. O ramo imobiliário, por exemplo, apresenta uma das tendências do setor: construção de imóveis, compra, venda e aluguel de terrenos. Com a proposta de agrupar terrenos disponíveis para aluguel em um único lugar surge a AlugaVerso. O nosso objetivo é facilitar as experiências únicas que você pode ter no metaverso.</p>

            <p className="about__container__p">A Alugaverso é uma plataforma que facilita o aluguel de terrenos em dois metaversos: Sandbox e Decentraland. Atualmente, contempla quatro categorias de terrenos:  casamento, divulgação, lazer e recreação e festa e show. Conheça as propostas:</p>
            <ul className="about__container__p">
                <li>  Casamento: espaços ideais para que os noivos desfrutem desse momento único proporcionem experiências imersivas para os seus convidados;</li>

                <li>  Divulgação: terrenos localizados em posições estratégicas para que, tanto pessoas quanto empresas, tenham a possibilidade de promover sua marca e seus produtos;</li>

                <li>   Lazer e recreação: ambientes destinados para jogos interativos, confraternizações, reuniões informais entre amigos e bastante curtição;</li>

                <li>   Festa e show: a badalação dos ambientes físicos também se faz presente no metaverso. Muita festa e curtição acontece nesses locais.</li>
            </ul>

            <h2 className="about__container__title-h2"> Conheça o time responsável por construir a sua ponte para novos universos:</h2>

            <div className="about__container__card-item">
                {time.map((person) => (
                    <CardTime
                        key={person.id}
                        name={person.name}
                        image={person.image}
                        office={person.office}
                        linkedin={person.linkedin}
                        github={person.github}
                    />
                ))}
            </div>
        </section>
    )
}