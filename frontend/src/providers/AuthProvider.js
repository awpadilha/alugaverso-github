import React from "react";
import { UsersAPI } from "../services/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  user: { name: "" },
  token: "",
  userDetails: {},
  onAuth: async () => {},
  onRegister: async () => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [userDetails, setUserDetails] = React.useState({});
  const [token, setToken] = React.useState("");
  const navigate = useNavigate();

  const onSaveUser = () => {
    const userName = localStorage.getItem("@metaverse/user");
    const userToken = localStorage.getItem("@metaverse/token");
    const userData = localStorage.getItem("@metaverse/userDetails");

    if (userName) setUser({ name: userName });
    if (userToken) setToken(userToken);
    if (userData) setUserDetails(JSON.parse(userData));
  };

  const getUserDetails = async () => {
    await UsersAPI.fetchMe().then((response) =>
      localStorage.setItem(
        "@metaverse/userDetails",
        JSON.stringify(response.data)
      )
    );
  };

  const resetUserData = () => {
    setUser({});
    setToken("");
  };

  const onAuth = async (values) => {
    await UsersAPI.login(values)
      .then(async (response) => {
        localStorage.setItem("@metaverse/user", response.data.login);
        localStorage.setItem("@metaverse/token", response.data.token);
        await getUserDetails();
        onSaveUser();

        toast("Sucesso! Bem vindo ao Alugaverso!", {
          type: "success",
          theme: "dark",
          autoClose: 1000,
        });
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        const message =
          e.message === "Request failed with status code 403" ||
          e.message === "Request failed with status code 404"
            ? "Usuário ou senha inválidos."
            : "Houve algum erro durante o login, tente novamente.";
        toast(message, {
          type: "error",
          theme: "dark",
        });
      });
  };

  const onRegister = async (values) => {
    return await UsersAPI.registerClient(values)
      .then(
        async () =>
          await onAuth({
            email: values.email,
            password: values.password,
          })
      )
      .catch(() =>
        toast(
          "Infelizmente, você não pôde se registrar. Por favor, tente novamente mais tarde.",
          {
            type: "error",
            theme: "dark",
          }
        )
      );
  };

  const onLogout = () => {
    localStorage.removeItem("@metaverse/user");
    localStorage.removeItem("@metaverse/role");
    localStorage.removeItem("@metaverse/token");
    resetUserData();
  };

  React.useEffect(() => {
    onSaveUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, token, userDetails, onAuth, onLogout, onRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context)
    throw new Error("AuthProvider is necessary in order to use useAuth");

  return context;
};
