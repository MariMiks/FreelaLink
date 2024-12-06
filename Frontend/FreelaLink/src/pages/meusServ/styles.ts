import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: themes.colors.cyan,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: themes.colors.cyan,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "transparent",
  },
  activeTab: {
    borderColor: themes.colors.cyan,
  },
  tabText: {
    fontSize: 16,
    color: themes.colors.gray,
  },
  activeTabText: {
    color: themes.colors.cyan,
    fontWeight: "bold",
  },
  scrollContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: themes.colors.lightBlue,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: themes.colors.cyan,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
  tagText: {
    color: themes.colors.bgScreen,
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: themes.colors.cyan,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: themes.colors.bgScreen,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: themes.colors.lightBlue,
    padding: 20,
    borderRadius: 10,
    width: "85%",
    maxHeight: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: themes.colors.cyan,
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: themes.colors.gray,
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
    textAlignVertical: "top",
    height: 80,
  },
  submitButton: {
    backgroundColor: themes.colors.cyan,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: themes.colors.bgScreen,
    fontWeight: "bold",
  },
});