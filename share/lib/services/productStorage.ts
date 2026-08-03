import { Product } from "@/features/products/types";
import { storage } from "./../storage/storage";

const KEY = "products";

export const productStorage = {
  get: async () => {
    const products = await storage.getItem(KEY);
    return products ? JSON.parse(products) : [];
  },

  set: async (value: Product) => {
    const oldData = await productStorage.get();
    const products: Product[] = oldData ? oldData : [];
    const newProducts = [...products, value];
    return await storage.setItem(KEY, JSON.stringify(newProducts));
  },

  delete: async (id: string) => {
    const oldData = await productStorage.get();
    const products: Product[] = oldData ? oldData : [];
    const newProducts = products.filter((item) => item.id !== id);
    return await storage.setItem(KEY, JSON.stringify(newProducts));
  },

  clear: async () => {
    return await storage.clear();
  },

  update: async (value: Product) => {
    const oldData = await productStorage.get();
    const products: Product[] = oldData ? oldData : [];

    console.log(value);
    console.log(products);
    const productToDelete: Product | undefined = products.find(
      (item) => item.id === value.id,
    );
    if (productToDelete) await productStorage.delete(productToDelete?.id);
    await productStorage.set(value);
  },
};
