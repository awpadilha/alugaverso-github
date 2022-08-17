import { api } from "./api";

export const CategoriesAPI = {
  getCategories: async () => {
    return await api.get("/categories");
  },
};
