import ListProduct from "@/components/atom/listProduct";
import Utilites from "@/components/atom/Utilites";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalCreate from "./../components/molecule/modalCreate";

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Список покупок</Text>
            <Utilites
              onPressAdd={() => setVisible(true)}
              amountValute="Итого $:"
            ></Utilites>
          </View>
          <ListProduct></ListProduct>
          <ModalCreate
            onPressClose={() => setVisible(false)}
            visible={visible}
          ></ModalCreate>
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
