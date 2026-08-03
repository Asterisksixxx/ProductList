import { StyleSheet, Text, View } from "react-native";
import UtiliteButton from "../proton/utilite/utiliteButton";
import UtiliteContainer from "../proton/utilite/utiliteContainer";

type UtilitesProps = {
  amountText: string;
  amountValue: string;
  amountValute: string;
  onPressAdd: () => void;
};

const Utilites = ({
  amountText = "Итого BYN:",
  amountValue = "",
  amountValute = "",
  onPressAdd,
}: UtilitesProps) => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <UtiliteContainer position="left">
            <Text style={styles.amountText}>
              {amountText} {amountValue} {amountValute}
            </Text>
          </UtiliteContainer>
          <UtiliteContainer position="right">
            <UtiliteButton typeTitle="icon" icon="FILTER"></UtiliteButton>
            <UtiliteButton
              onPress={onPressAdd}
              typeTitle="icon"
              icon="ADD"
            ></UtiliteButton>
          </UtiliteContainer>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {},
  container: {
    justifyContent: "space-between",
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  amount: {},
  amountText: { color: "#0000" },
  columnNames: {},
});

export default Utilites;
