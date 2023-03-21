import { View, TouchableOpacity, Text } from "react-native";
import { Styles } from "../screens/login_style";
import { colors } from "../theme/designSystem";
import { StyleSheet } from "react-native";
function Button({ Primary, onPress, outline, title }) {
  return (
    <TouchableOpacity
      style={
        Primary === true
          ? styles.primaryButton
          : outline === true
          ? styles.outlineButton
          : styles.primaryButton
      }
      onPress={onPress}
    >
      <Text
        style={
          Primary
            ? styles.btnText
            : outline
            ? styles.outlineText
            : styles.btnText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const base = {
  backgroundColor: colors.Primary,
  borderRadius: 80,
  borderWidth: 1,
  padding: 15,
  alignItems: "center",
  flex: 1,
};
const styles = StyleSheet.create({
  primaryButton: {
    ...base,
  },
  outlineButton: {
    ...base,
    backgroundColor: colors.black,
  },
  btnText: {
    color: colors.white,
  },
  outlineText: {
    color: colors.Primary,
  },
});
export { Button };
