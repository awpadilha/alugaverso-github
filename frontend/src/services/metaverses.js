import { api } from "./api";

export const MetaversesAPI = {
  getMetaverses: async () => {
    return await api.get("/metaverses");
  },
};
