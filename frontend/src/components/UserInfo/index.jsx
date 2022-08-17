import "./styles.scss";
import { getUserInitials } from "../../utils/user";
import { ReactComponent as LogoutSvg } from "../../assets/img/logout.svg";

export function UserInfo({ userName, onLogout, mobile = false }) {
  const mobileClass = mobile ? "mobile" : "";
  const userInitials = getUserInitials(userName);

  const handleLogout = () => {
    onLogout();
  };

  return (
      <span className={`user-info ${mobileClass}`}>
      {!mobile && <span className="user-info__divider"></span>}
        <span className="user-info__avatar">{userInitials}</span>
        <span className="user-info__greeting">
          <span className="user-info__greeting__text">Olá,</span>
          <span className="user-info__greeting__username">{userName}</span>
        </span>
        {!mobile && (
          <button onClick={handleLogout} className="user-info__logout-button">
            <LogoutSvg />
          </button>
        )}
      </span>
  );
}
