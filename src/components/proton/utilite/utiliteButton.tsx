import { Pressable, StyleSheet, Text } from "react-native";
import IconInterface from "../../../../share/lib/assets/icons/interfaceicons";

type UtiliteButtonProps = {
  typeTitle: "text" | "icon" | "nothing";
  icon?: "FILTER" | "ADD";
  text?: string;
  onPress?: () => void;
};

const UtiliteButton = ({
  typeTitle = "icon",
  icon = "FILTER",
  text = "",
  onPress,
}: UtiliteButtonProps) => {
  const ButtonIcon = IconInterface[icon];
  const content = {
    text: <Text>{text}</Text>,
    icon: <ButtonIcon width={16} height={16} color="#000000" />,
    nothing: null,
  };

  return (
    <>
      <Pressable onPress={onPress} style={[styles.utilitesButton]}>
        {content[typeTitle]}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  utilitesButton: {
    padding: 4,
    width: "40%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#000000",
    backgroundColor: "transparent",
    alignItems: "center",
  },
  icon: { height: 16, width: 16, color: "#ffff" },
});

export default UtiliteButton;
