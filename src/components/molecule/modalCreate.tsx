import IconAddProduct from "@/assets/images/interfaceicons/addProduct";
import IconBack from "@/assets/images/interfaceicons/back";
import { Category, Scaling } from "@/features/products/types";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type ModalCreateProps = {
  visible: boolean;
  onPressClose: () => void;
};

const ModalCreate = ({ visible = false, onPressClose }: ModalCreateProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Вода и напитки");

  const categories: Category[] = [
    "Мясная продукция",
    "Молочная продукция",
    "Хлебо-булочные изделия",
    "Овощи и фрукты",
    "Вода и напитки",
    "Сладкое, конфеты, печенье",
  ];

  const [selectedscale, setSelectedScale] = useState<Scaling>("единица");

  const scalings: Scaling[] = ["килограмм", "единица", "литр"];

  const handleAddButtonClick = () => {
    onPressClose();
  };

  return (
    <>
      <Modal animationType="fade" transparent={false} visible={visible}>
        <View style={styles.body}>
          <View style={styles.container}>
            <Pressable style={styles.back} onPress={onPressClose}>
              <IconBack width={30} height={30} color="#33ee4c"></IconBack>
            </Pressable>
            <ScrollView
              scrollEnabled={true}
              contentContainerStyle={styles.scroll}
            >
              <Text>Название продукта</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                placeholder="Минеральная вода"
                style={styles.textInput}
              ></TextInput>
              <Text>Категория продукта</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue) => {
                    setSelectedCategory(itemValue);
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
              ></TextInput>
              <Text>Единица измерения</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedscale}
                  onValueChange={(scale) => setSelectedScale(scale)}
                >
                  {scalings.map((scale) => (
                    <Picker.Item key={scale} value={scale} label={scale} />
                  ))}
                </Picker>
              </View>

              <Text>Количество/Объём/Масса</Text>
              <TextInput
                autoComplete="off"
                importantForAutofill="no"
                style={styles.textInput}
                keyboardType="number-pad"
              ></TextInput>
            </ScrollView>
            <Pressable
              onPress={handleAddButtonClick}
              style={styles.buttonSubmit}
            >
              <Text>Добавить</Text>
              <IconAddProduct
                width={25}
                height={25}
                color="#000000"
              ></IconAddProduct>
            </Pressable>
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
    gap: 12,
    paddingVertical: 12,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#44eb6048",
    borderColor: "#33ee4c",
  },
});
export default ModalCreate;
