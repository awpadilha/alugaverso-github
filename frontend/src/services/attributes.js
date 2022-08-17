import { api } from "./api";

export const AttributesAPI = {
  getAttributes: async () => {
    return await api.get("/attributes");
  },
};
