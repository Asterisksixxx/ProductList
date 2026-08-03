import { useState } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";
import IconInterface from "../../../../share/lib/assets/icons/interfaceicons";

type ProductButtonProps = {
  type: "normal" | "alert";
  content: "text" | "icon";
  iconBack: "BACK";
  iconChange: "CHANGE" | "PEN";
  iconDelete: "DELETE";
  text?: string;
  icon?: "SETTING";
  onDelete: () => void;
  onChange: () => void;
};

const isVisible: boolean = false;

const ProductButton = ({
  type = "normal",
  content = "icon",
  text = "",
  icon = "SETTING",
  iconBack = "BACK",
  iconChange = "PEN",
  iconDelete = "DELETE",
  onDelete,
  onChange,
}: ProductButtonProps) => {
  const IconButton = IconInterface[icon];
  const IconButtonDelete = IconInterface[iconDelete];
  const IconButtonChange = IconInterface[iconChange];
  const IconButtonBack = IconInterface[iconBack];

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
    setIsVisible(false);
  };

  const handleChange = () => {
    if (onChange) {
      onChange();
    }
    setIsVisible(false);
  };
  return (
    <>
      <Animated.View style={styles.container}>
        {isVisible ? (
          <>
            <Pressable style={styles.button} onPress={toggleVisibility}>
              {IconButtonBack ? (
                <IconButtonBack width={25} height={25} color="#000000" />
              ) : null}
            </Pressable>
          </>
        ) : (
          <>
            <Pressable style={styles.button} onPress={toggleVisibility}>
              {IconButton ? (
                <IconButton width={25} height={25} color="#000000" />
              ) : null}
            </Pressable>
          </>
        )}

        {isVisible ? (
          <>
            <Pressable style={styles.button} onPress={handleDelete}>
              {IconButtonDelete ? (
                <IconButtonDelete width={35} height={35} color="#000000" />
              ) : null}
            </Pressable>
            <Pressable style={styles.button} onPress={handleChange}>
              {IconButtonChange ? (
                <IconButtonChange width={25} height={25} color="#000000" />
              ) : null}
            </Pressable>
          </>
        ) : null}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    gap: 4,
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  change: {},
  delete: {},
});

export default ProductButton;
