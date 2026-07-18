import { Product } from "@/features/products/types";
import { StyleSheet, Text, View } from "react-native";
import IconCategory from "../../../assets/images/categoryicons/index";
import ProductButton from "../proton/product/productButton";

const calculateAmount = (quantity: number, price: number): string => {
  const amount = (quantity * price).toFixed(2);
  return amount;
};

const ItemProduct = ({
  id = "1",
  name = "Без имени",
  category = "Овощи и фрукты",
  description = "",
  quantity = 1,
  scaling = "килограмм",
  price = 1,
  onDelete,
}: Product & { onDelete?: (id: string) => void }) => {
  const amount = calculateAmount(quantity, price);

  const CategoryIcon = IconCategory[category];

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.product}>
            <View style={styles.productHeader}>
              <View style={styles.productCategoryIcon}>
                {CategoryIcon ? <CategoryIcon /> : null}
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productDescription}>{description}</Text>
              </View>
            </View>
            <View style={styles.productFooter}>
              <View style={styles.productParams}>
                <Text>
                  Купить {quantity} {scaling} по {price} = {amount}
                </Text>
              </View>
              <View style={styles.productActions}>
                <ProductButton
                  type="normal"
                  content="icon"
                  icon="SETTING"
                  iconChange="CHANGE"
                  iconBack="BACK"
                  iconDelete="DELETE"
                  onDelete={handleDelete}
                ></ProductButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {},
  container: { paddingHorizontal: 8 },
  product: {
    flexDirection: "column",
    backgroundColor: "#44eb6048",
    borderColor: "#33ee4c",
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 20,
    paddingHorizontal: 12,
    gap: 8,
  },
  productHeader: { flexDirection: "row", gap: 12, alignItems: "center" },
  productCategoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ffff",
    backgroundColor: "#33ee4c",
    color: "#0000",
    alignItems: "center",
    justifyContent: "center",
  },
  productInfo: { flexDirection: "column", gap: 4, alignItems: "flex-start" },
  productName: {},
  productDescription: {},
  productFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productParams: { alignItems: "center", justifyContent: "flex-start" },
  productActions: {},
});
export default ItemProduct;
