import { Product } from "@/features/products/types";
import { useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import uuid from "react-native-uuid";
import ItemProduct from "./itemProduct";

type ListProductProps = {};

const ListProduct = ({}: ListProductProps) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: uuid.v4(),
      category: "Мясная продукция",
      name: "Колбаса",
      description: "Вареная колбаса с сальцем",
      scaling: "килограмм",
      price: 1.4,
      quantity: 1,
    },
    {
      id: uuid.v4(),
      category: "Мясная продукция",
      name: "Курица",
      description: "Тушка цельная",
      scaling: "килограмм",
      price: 1.2,
      quantity: 2.2,
    },
    {
      id: uuid.v4(),
      category: "Хлебо-булочные изделия",
      name: "Батон",
      description: "На молоке",
      scaling: "единица",
      price: 0.4,
      quantity: 3,
    },
    {
      id: uuid.v4(),
      category: "Овощи и фрукты",
      name: "Бананы",
      description: "По акции",
      scaling: "килограмм",
      price: 1.3,
      quantity: 2,
    },
    {
      id: uuid.v4(),
      category: "Молочная продукция",
      name: "Йогурт",
      description: "ТОП шоколадный",
      scaling: "литр",
      price: 3,
      quantity: 0.45,
    },
    {
      id: uuid.v4(),
      category: "Вода и напитки",
      name: "Аливария бархатное",
      description: "1.9 литра вкусного пива",
      scaling: "литр",
      price: 2,
      quantity: 1.9,
    },
  ]);

  const handleDeleteProduct = (id: string) => {
    const productToDelete = products.find((p) => p.id === id);

    Alert.alert(
      "Удалить продукт",
      `Точно удалить "${productToDelete?.name || "продукт"}"?`,
      [
        { text: "Отмена", style: "cancel" },
        {
          text: "Удалить",
          style: "default",
          onPress: () => {
            setProducts((list) => list.filter((p) => p.id !== id));
          },
        },
      ],
    );
  };

  return (
    <FlatList
      scrollEnabled={true}
      style={styles.listProduct}
      contentContainerStyle={styles.listProductContainer}
      data={products}
      renderItem={({ item }) => (
        <ItemProduct
          id={item.id}
          category={item.category}
          name={item.name}
          scaling={item.scaling}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          onDelete={handleDeleteProduct}
        ></ItemProduct>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listProduct: { flex: 1 },
  listProductContainer: {
    gap: 8,
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
});
export default ListProduct;
