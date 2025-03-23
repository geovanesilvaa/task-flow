import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
  },
  text: {
    fontSize: 20,
    paddingVertical: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  viewInput: {
    marginTop: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    width: "85%",
    color: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    fontWeight: "bold",
    borderColor: "#fff",
    paddingHorizontal: 10,
    backgroundColor: "#000",
  },
  btn: {
    height: 45,
    width: 38,
    padding: 5,
    marginLeft: 5,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  textBtn: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
