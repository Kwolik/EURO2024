import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
  flatlist: {
    width: "90%",
    marginLeft: 2,
    height: "78%",
  },
});

export default styles;
