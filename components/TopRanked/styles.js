import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",

    borderColor: "red",
    borderWidth: 2,
  },
  top: {
    width: 100,
    justifyContent: "flex-end",
    marginTop: 12, //uwaga
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 36,
  },
  mainBackground: {
    backgroundColor: "#D0CFD0",
    width: "100%",
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 16,
  },
  nick: {
    fontSize: 14,
    marginBottom: 4,
    color: "#003279",
    marginTop: 4,
  },
  bottom: {
    height: 30,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: -12,
    zIndex: -1,
  },
  points: {
    color: "#003279",
    fontWeight: "bold",
  },
  firstPlace: {
    backgroundColor: "#FDDA13",
    width: "100%",
    height: 70,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 16,
  },
  avatarFirst: {
    width: 60,
    height: 60,
    borderRadius: 46,
  },
  color3: {
    backgroundColor: "#8B5120",
  },
});

export default styles;
