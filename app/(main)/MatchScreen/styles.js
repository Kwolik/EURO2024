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
    height: 64,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
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
  flatlist: {
    position: "absolute",
    marginTop: 100,
  },
  mainTeams: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: -8,
  },
  result: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    width: 48,
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  bottom: {
    height: 66,
    backgroundColor: "#FFFFFF",
    marginTop: -40,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 8,
  },
  teams: {
    color: "#003279",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
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
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    padding: 4,
  },
  typeResult: {
    width: "20%",
    backgroundColor: "#003279",
    height: "16%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  resultText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
