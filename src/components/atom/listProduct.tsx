import { Product } from "@/features/products/types";
import { Alert, FlatList, StyleSheet } from "react-native";
import { productStorage } from "../../../share/lib/services/productStorage";
import ItemProduct from "./itemProduct";

type ListProductProps = {
  listProducts: Product[];
  onDelete: () => void;
  onChange: (oldProduct: Product) => void;
};

const ListProduct = ({
  listProducts = [],
  onDelete,
  onChange,
}: ListProductProps) => {
  const handleDeleteProduct = (id: string) => {
    productStorage.delete(id);
    const productToDelete: Product | undefined = listProducts.find(
      (item) => item.id === id,
    );

    if (productToDelete) {
      Alert.alert(
        "Удалить продукт",
        `Точно удалить "${productToDelete.name || "продукт"}"?`,
        [
          { text: "Отмена", style: "cancel" },
          {
            text: "Удалить",
            style: "default",
            onPress: () => {
              onDelete();
            },
          },
        ],
      );
    }
  };

  const handleChangeProduct = (id: string) => {
    const productToUpdate: Product | undefined = listProducts.find(
      (item) => item.id === id,
    );
    if (productToUpdate) {
      onChange(productToUpdate);
    }
  };

  return (
    <FlatList
      scrollEnabled={true}
      style={styles.listProduct}
      contentContainerStyle={styles.listProductContainer}
      data={listProducts}
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
          onChange={handleChangeProduct}
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
