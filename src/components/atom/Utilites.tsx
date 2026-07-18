import { StyleSheet, Text, View } from "react-native";
import UtiliteButton from "../proton/utilite/utiliteButton";
import UtiliteContainer from "../proton/utilite/utiliteContainer";

type UtilitesProps = {
  amountValute: "Итого $:" | "Итого BYN:" | "Итого EUR:";
  onPressAdd: () => void;
};

const Utilites = ({
  amountValute = "Итого BYN:",
  onPressAdd,
}: UtilitesProps) => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.container}>
          <UtiliteContainer position="left">
            <Text style={styles.amountValute}>{amountValute}</Text>
            <Text style={styles.amountValue}>73</Text>
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
  amountValute: { color: "#0000" },
  amountValue: { color: "#0000" },
  columnNames: {},
});

export default Utilites;
