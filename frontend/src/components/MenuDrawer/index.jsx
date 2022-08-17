import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./styles.scss";
import { UserInfo } from "../../components/UserInfo";
import { isObjectEmpty } from "../../utils/object";
import { Drawer } from "@mui/material";
import "./styles.scss";

export function MenuDrawer({
  user = {},
  isAdmin = false,
  logout = () => {},
  open = false,
  onClose = () => {},
  toggle = () => {},
}) {
  const handleLogout = () => {
    logout();
    toggle();
  }

  return (
    <Drawer anchor="top" open={open} onClose={onClose}>
      <div className="menu-drawer">
        <div className="menu-drawer__header">
          <button
            className="menu-drawer__header__close-button"
            onClick={toggle}
          >
            <MdClose />
          </button>
          {!isObjectEmpty(user) ? (
            <div className="menu-drawer__header__user-info">
              <UserInfo mobile userName={user.name} />
            </div>
          ) : (
            <h2 className="menu-drawer__header__heading">MENU</h2>
          )}
          <div className="divider-x">
            <div className="divider-x__line"></div>
          </div>
        </div>
        <nav className="menu-drawer__nav">
          <div className="menu-drawer__nav__top">
            {!isObjectEmpty(user) ? (
              <>
                <Link
                  onClick={toggle}
                  className="menu-drawer__nav__link"
                  to="/"
                >
                  Início
                </Link>
                {isAdmin ? (
                  <Link
                    onClick={toggle}
                    className="menu-drawer__nav__link"
                    to="/admin/lands/create"
                  >
                    Administar
                  </Link>
                ) : (
                  <Link
                    onClick={toggle}
                    className="menu-drawer__nav__link"
                    to="/your-land"
                  >
                    Cadastre o seu terreno
                  </Link>
                )}
                <button className="menu-drawer__nav__logout" onClick={handleLogout}>
                  Encerrar a sessão
                </button>
              </>
            ) : (
              <>
                <Link
                  onClick={toggle}
                  className="menu-drawer__nav__link"
                  to="/"
                >
                  Início
                </Link>
                <Link
                  onClick={toggle}
                  className="menu-drawer__nav__link"
                  to="/login"
                >
                  Entrar
                </Link>
                <Link
                  onClick={toggle}
                  className="menu-drawer__nav__link"
                  to="/register"
                >
                  Criar conta
                </Link>
                <Link
                  onClick={toggle}
                  className="menu-drawer__nav__link"
                  to="/your-land"
                >
                  Cadastre o seu terreno
                </Link>
              </>
            )}

            <div className="divider-x">
              <div className="divider-x__line"></div>
            </div>
          </div>
          <div className="menu-drawer__nav__bottom">
            <Link
              onClick={toggle}
              className="menu-drawer__nav__link"
              to="/about"
            >
              Sobre
            </Link>
            <Link onClick={toggle} className="menu-drawer__nav__link" to="/faq">
              Saiba mais
            </Link>
            <a
              className="menu-drawer__nav__link"
              href="https://sosamazonia.org.br/"
              target="_blank"
              rel="noreferrer"
            >
              Ajude a Amazônia 🇧🇷
            </a>
          </div>
        </nav>
      </div>
    </Drawer>
  );
}
