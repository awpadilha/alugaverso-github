import "./styles.scss";


export function RegisterHome(){
    return(
        <div className="registerHome-container">
            <div className="registerHome-container__divider"></div>

            <h2 className="registerHome-container__title">Receba dicas sobre o Metaverso</h2>
            <p className="registerHome-container__description">Descontos, inspirações e recomendações sobre esse universo</p>

            <form className="registerHome-container__form">
                <div className="registerHome-container__form__campo">
                    <label className="registerHome-container__form__label">seu email</label>
                    <input type="email" className="registerHome-container__form__input"/>
                </div>
                <div className="registerHome-container__form__campo">
                    <label className="registerHome-container__form__label">seu nome</label>
                    <input type="text" className="registerHome-container__form__input"/>
                </div>
            </form>
            <button className="registerHome-container__button">Cadastrar</button>
        </div>
    )
}