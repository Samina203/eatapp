import { StyleSheet } from "react-native";
import { colors, genericStyles } from "../theme/designSystem";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "colors.white",
    marginTop: 30,
    flex: 1,
  },
  formCon: {
    flex: 0.8,
    justifyContent: "center",
  },
  bottomCon: {
    flex: 0.2,
  },
  form: {
    padding: 10,
  },
  inputCon: {
    ...genericStyles.inputBase,
    marginVertical: 10,
  },
  pickImageCon: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
  },
  profieImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export { Styles };
