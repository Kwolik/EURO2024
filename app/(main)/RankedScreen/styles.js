import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
  topRanked: {
    marginTop: 24,
    marginLeft: 4,
  },
  playerRanked: {
    width: "86%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginLeft: "2%",
    marginTop: 20,
  },
});

export default styles;
