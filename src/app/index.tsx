import ListProduct from "@/components/atom/listProduct";
import Utilites from "@/components/atom/Utilites";
import { Product, Valute } from "@/features/products/types";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { productStorage } from "../../share/lib/services/productStorage";
import { valuteStorage } from "../../share/lib/services/valuteStorage";
import ModalProduct from "../components/molecule/modalProduct";

export default function HomeScreen() {
  const [visible, setVisible] = useState<boolean>(false);
  const [willCreate, setWillCreate] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [valute, setValute] = useState<Valute>({ name: "EUR", symbol: "€" });

  const loadData = async () => {
    const data = await productStorage.get();
    const valute = await valuteStorage.get();
    setValute(valute);
    setProducts(data);
  };

  useEffect(() => {
    const sum: number = products.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    setAmount(sum);
  }, [products]);

  useEffect(() => {
    loadData();
  }, []);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setWillCreate(false);
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Список покупок</Text>
            <Utilites
              onPressAdd={() => {
                setVisible(true);
                setWillCreate(true);
              }}
              amountText="Итого:"
              amountValue={amount.toFixed(2)}
              amountValute={valute.symbol}
            ></Utilites>
          </View>
          <ListProduct
            listProducts={products}
            onDelete={loadData}
            onChange={handleEditProduct}
          ></ListProduct>
          <ModalProduct
            onPressClose={() => {
              setVisible(false);
              loadData();
            }}
            willCreate={willCreate}
            oldProduct={editingProduct}
            visible={visible}
          ></ModalProduct>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  body: { flex: 1 },
  container: { flex: 1 },
  header: { padding: 8, gap: 12 },
  headerTitle: { fontSize: 24, color: "rgb(0, 0, 0)" },
});
