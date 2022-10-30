import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 75,
    marginBottom: 30,
  },

  ctInput: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 15,
    paddingBottom: 5,
  },

  inputField: {
    fontSize: 16,
    fontWeight: "400",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    paddingVertical: 5,
  },

  inputInvalid: {
    color: "red",
    fontSize: 13,
    fontWeight: "400",
    paddingLeft: 15,
    paddingTop: 5,
  },

  buttonStyle: {
    backgroundColor: "black",
    width: 150,
    borderRadius: 15,
    marginTop: 20,
  },

  buttonLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },

  borderlessButtonStyle: {
    marginTop: 20,
  },

  borderlessButtonLabel: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});
