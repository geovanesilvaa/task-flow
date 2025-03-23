import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
  },
  text: {
    fontSize: 17,
    marginRight: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  containerInput: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  input: {
    width: "95%",
    height: 45,
    color: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    fontWeight: "bold",
    borderColor: "#fff",
    paddingHorizontal: 10,
    backgroundColor: "#000",
  },
  btn: {
    width: "95%",
    height: 45,
    padding: 6,
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 10,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  logo: {
    marginTop: 50,
    width: 380,
    height: 160,
  },
  viewIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
