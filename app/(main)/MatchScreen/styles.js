import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
  top: {
    backgroundColor: "#003279",
    height: 72,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: 1,
  },
  info: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  date: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  mainTeams: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: -8,
  },
  result: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
  },
  bottom: {
    height: 72,
    backgroundColor: "#FFFFFF",
    marginTop: -44,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  teams: {
    color: "#003279",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  players: {
    borderColor: "green",
    borderWidth: 2,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewButton: {
    width: 120,
    height: 40,
    backgroundColor: "#003279",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomSheet: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    height: "auto",
  },
});

export default styles;
