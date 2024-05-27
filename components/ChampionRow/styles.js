import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  top: {
    width: "100%",
    height: 42,
    backgroundColor: "#003279",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 24,
    zIndex: 2,
    paddingRight: 10,
  },
  team: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
  },
  bottom: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    marginTop: -18,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  player: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 16,
  },
  teams: {
    color: "#003279",
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 4,
  },
});

export default styles;
