import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "30%",
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    fontSize: 34,
    color: "green", //na zoltej kartce nei widac tekstu dostosowac pozniej
    position: "absolute",
    top: -14,
    left: 4,
  },
  points: {
    position: "absolute",
    top: -11,
    left: 12,
    color: "#FFFFFF",
    transform: [{ rotate: "-20deg" }],
    fontSize: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  result: {
    color: "#FFFFFF",
    fontSize: 28,
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
    fontSize: 14,
    marginBottom: 2,
  },
});

export default styles;
