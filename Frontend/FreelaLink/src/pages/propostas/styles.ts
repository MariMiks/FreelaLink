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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: themes.colors.bgScreen,
  },
  activeTab: {
    backgroundColor: themes.colors.cyan,
  },
  tabText: {
    color: themes.colors.gray,
  },
  activeTabText: {
    color: themes.colors.bgScreen,
  },
  scrollContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: themes.colors.bgScreen,
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themes.colors.lightCyan,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardEntrada: {
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: themes.colors.cyan,
  },
  details: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
    color: themes.colors.dark,
    lineHeight: 18,
    flexWrap: "wrap", // Quebra o texto em linhas
  },
  prestadorContainer: {
    flexDirection: "column",
    marginBottom: 10,
  },
  prestadorName: {
    fontWeight: "bold",
    marginLeft: 10,
    color: themes.colors.cyan,
  },
  statusContainer: {
    position: "absolute",
    top: -12,
    right: -12,
    backgroundColor: themes.colors.bgScreen,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: themes.colors.cyan,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  aprovado: {
    color: themes.colors.cyan,
  },
  recusado: {
    color: themes.colors.lightRed,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonRecusar: {
    flex: 1,
    marginRight: 5,
    backgroundColor: themes.colors.lightRed,
    color: themes.colors.cyan,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonAprovar: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: themes.colors.cyan,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: themes.colors.bgScreen,
    fontWeight: "bold",
  },
});
