import "./styles.scss";

export function Info(){
    return(
        <section className="info__container">
            <div className="info__container__divider-mobile"></div>
            <div className="info__container__divider-desktop"></div>
            <h2 className="info__container__title-h2">Informações adicionais</h2>
            <div className="info__container__layout">
                <div className="info__container__informacoes-gerais">
                    <h3>Regras do Aluguel</h3>
                    <p>
                        Sabemos como é ser restringido por regras. Então, finalmente decidimos acabar com elas. Não há limites. Convidados ilimitados,opções ilimitadas. Crie o seu espaço da forma que imaginar, sem quaisquer restrições!
                    </p>
                </div>

                <div className="info__container__informacoes-gerais">
                    <h3>Política de cancelamento</h3>
                    <p>
                        Selecione as datas desejadas do aluguel para obter detalhes do
                    cancelamento.
                    </p>
                </div>

                <div className="info__container__informacoes-gerais">
                    <h3>Segurança</h3>
                    <p>
                        Seus dados sempre estarão seguros e criptografados dentro das normas
                        da LGPD.
                    </p>
                </div>
            </div>
        </section>
    )
}