import { api } from "./api";

export const LandsAPI = {
  getLands: async () => {
    return await api.get("/lands");
  },

  filterByCategory: async (categoryId) => {
    return await api.get(`/lands/search/category?idCategory=${categoryId}`);
  },

  filterByMetaverse: async (metaverseId) => {
    return await api.get(`/lands/search/metaverse?idMetaverse=${metaverseId}`);
  },

  filterByDatesAndMetaverse: async (metaverseName, initialDate, endDate) => {
    return await api.get(
      "/lands/search",
      {
        params: { metaverseName, initialDate, endDate }
      }
    );
  },

  loadLandDetails: async (id) => {
    return await api.get(`/lands/${id}`);
  },

  registerLand: async(payload) => {
    return await api.post('/lands', payload)
  }
};
