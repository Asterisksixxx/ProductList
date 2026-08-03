import { Category, Product, Scaling } from "@/features/products/types";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import IconAddProduct from "../../../share/lib/assets/icons/interfaceicons/addProduct";
import IconBack from "../../../share/lib/assets/icons/interfaceicons/back";
import IconPen from "../../../share/lib/assets/icons/interfaceicons/pen";
import { productStorage } from "../../../share/lib/services/productStorage";

type ModalProductProps = {
  visible: boolean;
  willCreate: boolean;
  oldProduct: Product | null;
  onPressClose: () => void;
};

const ModalProduct = ({
  visible = false,
  willCreate = true,
  oldProduct,
  onPressClose,
}: ModalProductProps) => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productCount, setProductCount] = useState<string>();
  const [productPrice, setProductPrice] = useState<string>();

  const [productCategory, setProductCategory] =
    useState<Category>("Молочная продукция");

  useEffect(() => {
    if (oldProduct) {
      setProductName(oldProduct?.name);
      setProductCategory(oldProduct?.category);
      setProductDescription(oldProduct?.description);
      setProductScale(oldProduct?.scaling);
      setProductCount(oldProduct?.quantity.toString());
      setProductPrice(oldProduct?.price.toString());
    }
  }, [oldProduct]);

  const categories: Category[] = [
    "Мясная продукция",
    "Молочная продукция",
    "Хлебо-булочные изделия",
    "Овощи и фрукты",
    "Вода и напитки",
    "Сладкое, конфеты, печенье",
  ];

  const [productScale, setProductScale] = useState<Scaling>("единица");

  const scalings: Scaling[] = ["килограмм", "единица", "литр"];

  const handleAddButtonClick = async () => {
    const isValid = validateModal();
    if (isValid) {
      await saveNewProductInStore();
      clearModal();
      onPressClose();
    }
  };

  const handleChangeButtonClick = async () => {
    const isValid = validateModal();
    if (isValid) {
      await changeProductInStore();
    }
    clearModal();
    onPressClose();
  };

  const validateModal = () => {
    const isValid =
      productName.trim() &&
      productCategory.trim() &&
      productScale.trim() &&
      Number(productCount) > 0;
    if (!isValid) {
      Alert.alert("Ошибка", "Заполните все необходимые поля");
      return false;
    } else {
      return true;
    }
  };

  const createNewProduct = () => {
    const newProduct: Product = {
      id: oldProduct?.id || uuid.v4.toString(),
      name: productName.trim(),
      category: productCategory,
      description: productDescription.trim()
        ? productDescription
        : "Нет описания",
      scaling: productScale,
      quantity: Number(productCount),
      price: Number(productPrice),
    };
    return newProduct;
  };

  const saveNewProductInStore = async () => {
    await productStorage.set(createNewProduct());
  };

  const changeProductInStore = async () => {
    await productStorage.update(createNewProduct());
  };

  const clearModal = () => {
    setProductName("");
    setProductDescription("");
    setProductCount("");
    setProductPrice("");
  };

  return (
    <>
      <Modal animationType="slide" transparent={false} visible={visible}>
        <View style={styles.body}>
          <View style={styles.container}>
            <Pressable
              style={styles.back}
              onPress={() => {
                onPressClose();
                clearModal();
              }}
            >
              <IconBack width={30} height={30} color="#33ee4c"></IconBack>
            </Pressable>
            <ScrollView
              scrollEnabled={true}
              contentContainerStyle={styles.scroll}
            >
              <Text>Название продукта: *</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                placeholder="Минеральная вода"
                style={styles.textInput}
                value={productName}
                onChangeText={(name) => setProductName(name)}
              ></TextInput>
              <Text>Категория продукта: *</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  selectedValue={productCategory}
                  onValueChange={(itemValue) => {
                    setProductCategory(itemValue);
                  }}
                >
                  {categories.map((category) => (
                    <Picker.Item
                      key={category}
                      label={category}
                      value={category}
                    />
                  ))}
                </Picker>
              </View>
              <Text>Описание</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                placeholder="Вода с клубничным ароматизатором"
                style={styles.textInput}
                numberOfLines={4}
                value={productDescription}
                onChangeText={(desc) => {
                  setProductDescription(desc);
                }}
              ></TextInput>
              <Text>Единица измерения: *</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  selectedValue={productScale}
                  onValueChange={(scale) => setProductScale(scale)}
                >
                  {scalings.map((scale) => (
                    <Picker.Item key={scale} value={scale} label={scale} />
                  ))}
                </Picker>
              </View>
              <Text>Количество/Объём/Масса: *</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                style={styles.textInput}
                keyboardType="number-pad"
                placeholder="3"
                value={productCount}
                onChangeText={(count) => {
                  setProductCount(count);
                }}
              ></TextInput>
              <Text>Стоимость за 1 единицу/литр/килограмм товара</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                style={styles.textInput}
                keyboardType="number-pad"
                placeholder="2.50"
                value={productPrice}
                onChangeText={(count) => {
                  setProductPrice(count);
                }}
              ></TextInput>
            </ScrollView>
            {willCreate ? (
              <Pressable
                onPress={handleAddButtonClick}
                style={styles.buttonSubmit}
              >
                <Text>Добавить</Text>
                <IconAddProduct width={25} height={25} color="#000000" />
              </Pressable>
            ) : (
              <Pressable
                onPress={handleChangeButtonClick}
                style={styles.buttonSubmit}
              >
                <Text>Изменить</Text>
                <IconPen width={25} height={25} color="#000000" />
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  body: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    flexDirection: "column",
    gap: 32,
  },
  back: { alignItems: "flex-end" },
  scroll: { flex: 1, paddingBottom: 40, gap: 12 },
  pickerWrapper: {
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#44eb6048",
    borderColor: "#33ee4c",
  },
  picker: { maxHeight: 50, color: "#000000" },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#44eb6048",
    borderColor: "#33ee4c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    color: "#000000",
    letterSpacing: 0.1,
  },
  buttonSubmit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#44eb6048",
    borderColor: "#33ee4c",
  },
});
export default ModalProduct;
