import { Link } from "react-router-dom";
import { MdMenu, MdSearch } from "react-icons/md";
import logoSvg from "../../assets/img/logo.svg";
import "./styles.scss";
import { useState } from "react";
import { UserInfo } from "../../components/UserInfo";
import { useAuth } from "../../providers/AuthProvider";
import { isObjectEmpty } from "../../utils/object";
import { HeaderLink } from "../../components/HeaderLink";
import { SearchDrawer } from "../../components/SearchDrawer";
import { MenuDrawer } from "../../components/MenuDrawer";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, userDetails, onLogout } = useAuth();
  const isAdmin = userDetails?.roles?.find(role => role.name === 'ROLE_ADMIN')


  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  const toggleSearch = () => {
    searchOpen ? setSearchOpen(false) : setSearchOpen(true);
  }

  return (
    <header className="header">
      <SearchDrawer open={searchOpen} toggle={toggleSearch} onClose={() => setSearchOpen(false)} />
      <MenuDrawer open={menuOpen} toggle={toggleMenu} onClose={() => setMenuOpen(false)} isAdmin={isAdmin} user={user} logout={onLogout} />

      <Link className="header__logo" to="/">
        <img src={logoSvg} alt="Logo AlugaVerso" />
      </Link>

      <button className="header__menu-button" onClick={toggleMenu}>
        <MdMenu />
      </button>

      <button className="header__search-button" onClick={toggleSearch}>
        <MdSearch />
      </button>

      <nav className="header__nav">
        {!isObjectEmpty(user) ? (
          <>
            {isAdmin ? (
              <HeaderLink to="/admin/lands/create">administrar</HeaderLink>
            ) : (
              <HeaderLink to="/your-land">
                cadastre o seu terreno
              </HeaderLink>
            )}
            <UserInfo userName={user.name} onLogout={onLogout} />
          </>
        ) : (
          <>
            <HeaderLink className="header__nav__highlight" to="/your-land">
              cadastre o seu terreno
            </HeaderLink>
            <HeaderLink className="header__nav__link" to="/register">
              criar conta
            </HeaderLink>
            <HeaderLink className="header__nav__link" to="/login">
              entrar
            </HeaderLink>
          </>
        )}
      </nav>
    </header>
  );
}
