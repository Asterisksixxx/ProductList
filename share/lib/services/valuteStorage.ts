import { Valute } from "@/features/products/types";
import { storage } from "./../storage/storage";

const KEY = "valute";

const DEFAULT_VALUTE: Valute = { name: "BYN", symbol: "Б" };

export const valuteStorage = {
  get: async () => {
    const valute = await storage.getItem(KEY);
    return valute ? JSON.parse(valute) : DEFAULT_VALUTE;
  },
  set: async (value: Valute) => {
    return await storage.setItem(KEY, JSON.stringify(value));
  },
};
