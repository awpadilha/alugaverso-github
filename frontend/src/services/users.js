import { api } from "./api";

export const UsersAPI = {
  registerAdmin: async (payload) => {
    return await api.post("/users", {
      ...payload,
      roles: [
        {
          id: 1,
        },
      ],
    });
  },

  registerClient: async (payload) => {
    return await api.post("/users", {
      ...payload,
      roles: [
        {
          id: 2,
        },
      ],
    });
  },

  login: async (payload) => {
    return await api.post("/login", payload);
  },

  fetchMe: async () => {
    return await api.get("/users/me");
  },
};
