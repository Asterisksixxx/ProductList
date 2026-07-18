import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type UtiliteContainerProps = {
  position: "left" | "right" | "center";
  children?: ReactNode;
};

const UtiliteContainer = ({
  position = "center",
  children,
}: UtiliteContainerProps) => {
  return (
    <>
      <View style={[styles.container, styles[position]]}>{children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: "#0cff34",
    backgroundColor: "#44eb60",
    borderWidth: 2,
    width: "30%",
    minHeight: 40,
    alignItems: "center",
  },
  center: { borderTopRightRadius: 15, borderTopLeftRadius: 15 },
  left: { borderTopRightRadius: 15 },
  right: { borderTopLeftRadius: 15, justifyContent: "space-evenly" },
});

export default UtiliteContainer;
