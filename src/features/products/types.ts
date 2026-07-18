export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  scaling: Scaling;
  quantity: number;
  price: number;
};

export type Category =
  | "Мясная продукция"
  | "Молочная продукция"
  | "Хлебо-булочные изделия"
  | "Овощи и фрукты"
  | "Вода и напитки"
  | "Сладкое, конфеты, печенье";

export type Scaling = "килограмм" | "единица" | "литр";
