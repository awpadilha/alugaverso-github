import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ReactComponent as EyeSvg } from "../../assets/img/eye.svg";
import { ReactComponent as Facebook } from "../../assets/img/facebook-logo.svg";
import { ReactComponent as Google } from "../../assets/img/google-logo.svg";
import Helmet from 'react-helmet';

import "./styles.scss";
import { useAuth } from "../../providers/AuthProvider";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Digite seu primeiro nome"),
  lastName: Yup.string().required("Digite seu ultimo nome"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("Digite o e-mail"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Digite a senha"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => !!val && val.length >= 6,
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "As senhas precisam ser iguais"
    ),
  }),
});

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { onRegister } = useAuth()

  const handleSubmit = async ({ confirmPassword, ...values }) => {
    await onRegister(values);
    navigate(-1);
  };

  return (
    <div className="register-container">
      <Helmet>
        <title>Cadastro | Alugaverso</title>
      </Helmet>
      <h1 className="register-container__title">
        Alugue terrenos e compartilhe experiências autênticas no Metaverso
      </h1>

      <div className="register-container__content">
        <div className="register-container__facebook">
          <div className="register-container__facebook__content">
            <h2>Cadastre-se mais rápido com</h2>
            <div  className="register-container__button-group">
              <button className="register-container__google__button">
                Continuar com o Google <Google />
              </button>
              <button className="register-container__facebook__button">
                Continuar com o Facebook <Facebook />
              </button>
            </div>
            <h5 className="register-container__facebook__info">
              <i>Jamais publicaremos sem a sua permissão</i>
            </h5>
          </div>
        </div>

        <div className="register-container__content-divider">
          <div className="register-container__content-divider__divider" />
          <strong className="register-container__content-divider__text">
            ou
          </strong>
        </div>

        <div className="register-container__form-content">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ values, handleChange, handleBlur, isSubmitting }) => (
              <Form className="register-container__form">
                <h1 className="register-container__form__title">
                  Cadastre-se com seu e-mail
                </h1>
                <div className="register-container__form__input-wrapper">
                  <div className="register-container__form__input">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      name="name"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="register-container__form__input__error-message"
                    />
                  </div>

                  <div className="register-container__form__input">
                    <label htmlFor="lastName">Sobrenome</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="span"
                      className="register-container__form__input__error-message"
                    />
                  </div>
                </div>
                <div className="register-container__form__input">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__input">
                  <label htmlFor="password">Senha</label>
                  <div className="register-container__wrapper-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <span
                      onClick={() => setShowPassword((password) => !password)}
                    >
                      {" "}
                      <EyeSvg />{" "}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__input">
                  <label htmlFor="confirmPassword">Confirmar senha</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="register-container__form__input__error-message"
                  />
                </div>

                <div className="register-container__form__submit">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="register-container__form__submit-button"
                  >
                    Criar conta
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="register-container__login">
        <span className="register-container__login__title">
          Já tem uma conta?
        </span>
        <a
          href="/login"
          className="register-container__login__link"
        >
          Iniciar sessão
        </a>
      </div>
    </div>
  );
}
