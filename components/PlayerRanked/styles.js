import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "42%",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "red",
    borderWidth: 2,
  },
  top: {
    width: "100%",
    height: 48,
    backgroundColor: "#003279",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
  },
  position: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 42,
  },
  result: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottom: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -18,
    zIndex: -1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  nick: {
    color: "#003279",
    fontSize: 16,
  },
});

export default styles;
