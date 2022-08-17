import { useState } from "react";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { ReactComponent as Heart } from "../../assets/img/heart.svg";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Helmet from 'react-helmet';

import "./styles.scss";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Insira um email válido")
    .required("Digite o e-mail"),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Digite a senha"),
});

export function Login() {
  const { onAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    await onAuth(values)
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Login | Alugaverso</title>
      </Helmet>
      <img
        src={logo}
        alt="Login Page"
        className="login-container__login__logo"
      />

      <div className="login-container__login-user-content">
        <div className="flex-center">
          <h1 className="login-container__login-form-title">Fazer login</h1>
          <div className="login-container__container-login">
            <div className="login-container__wraper-login">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ values, handleChange, handleBlur, isSubmitting }) => (
                  <Form className="login-container__login-form">
                    <div>
                      <label
                        htmlFor="email"
                        className="login-container__wrapper-label"
                      >
                        e-mail
                      </label>
                      <div className="login-container__wrapper-input">
                        <input
                          type="email"
                          name="email"
                          placeholder=""
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="login-container__error-message"
                    />
                    <div>
                      <label
                        htmlFor="password"
                        className="login-container__wrapper-label"
                      >
                        senha
                      </label>
                      <div className="login-container__wrapper-input">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder=""
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <span
                          onClick={() =>
                            setShowPassword((password) => !password)
                          }
                        >
                          {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                        </span>
                      </div>
                    </div>

                    <ErrorMessage
                      name="password"
                      component="span"
                      className="login-container__error-message"
                    />
                    <div className="login-container__wrapper-form-additionals">
                      <div className="wraper__input-checkbox">
                        <input type="checkbox" name="remember" />
                        Lembrar-me
                      </div>
                      <a
                        href="https://google.com"
                        className="login-container__recovery-login"
                      >
                        Esqueci minha senha
                      </a>
                    </div>

                    <div className="login-container__login-form-btn-wrapper">
                      <button
                        type="submit"
                        className="login-container__login-form-btn"
                        disabled={isSubmitting}
                      >
                        Entrar
                      </button>
                    </div>

                    <div className="login-container__text-bottom">
                      <div className="login-container__text-center">
                        <span>Ainda não tem conta? </span>
                        <span className="login-container__text-heart">
                          É de graça &nbsp;<Heart />{" "}
                        </span>
                      </div>
                      <div>
                        <a
                          className="login-container__register"
                          href="/register"
                        >
                          {" "}
                          Registre-se{" "}
                        </a>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
