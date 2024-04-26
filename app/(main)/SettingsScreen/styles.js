import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
  profile: {
    borderColor: "red",
    borderWidth: 2,

    marginTop: 20,
    width: "90%",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 56,
    position: "absolute",
    zIndex: 2,
    marginTop: 4,
    marginLeft: 8,
  },
  top: {
    width: "100%",
    height: 42,
    backgroundColor: "#003279",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 1,
  },
  space: {
    width: "24%",
  },
  nick: {
    color: "#FFFFFF",
    fontSize: 18,
    width: "40%",
  },
  viewPoints: {
    flexDirection: "row",
  },
  points: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
    marginRight: 2,
  },
  bottom: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -18,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  viewBottom: {
    backgroundColor: "#003279",
    flexDirection: "row",
    borderRadius: 12,
    marginBottom: 2,
    paddingLeft: 8,
    paddingRight: 9,
  },
  icon: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 8,
  },
  desc: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  position: {
    zIndex: 2,
    position: "absolute",
    right: 12,
    bottom: 2,
    fontSize: 16,
    color: "#003279",
  },
  type1: {
    color: "#FFFFFF",
    width: 160,
    fontSize: 14,
    fontWeight: "bold",
  },
  type2: {
    color: "#003279",
    width: 160,
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
  },
  bottomKing: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: -18,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: "row",
  },
  info1: {
    width: 100,
    color: "#FFFFFF",
    fontSize: 14,
  },
  info2: {
    width: 100,
    marginLeft: 10,
    color: "#003279",
    fontSize: 14,
    marginBottom: 2,
  },
  icon1: { fontSize: 20, color: "#FFFFFF" },
  icon2: {
    fontSize: 20,
    marginRight: 10,
    color: "#003279",
  },
  list: {
    marginTop: 20,
  },
});

export default styles;
