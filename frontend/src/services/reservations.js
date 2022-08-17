import { api } from "./api";

export const reservations = {
  makeReservation: async (token, body) => {
    return await api.post("/reservation/me", body, {
      headers: { "Authorization": `Bearer ${token}` }
    });
  }
}