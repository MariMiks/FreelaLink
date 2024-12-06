import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bgScreen,
      },
      header: {
        alignItems: "center",
        paddingVertical: 30, // Adiciona mais espaço no topo
        backgroundColor: themes.colors.bgLogin,
      },
      avatarContainer: {
        flexDirection: "row", // Posiciona os ícones ao lado do avatar
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10, // Espaçamento entre o avatar e o nome
      },
      avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: themes.colors.gray,
      },
      iconButton: {
        padding: 8,
        marginHorizontal: 10, // Espaçamento entre o ícone e o avatar
        backgroundColor: themes.colors.bgScreen,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
      iconText: {
        fontSize: 18,
        color: themes.colors.cyan,
      },
      nomeUsuario: {
        marginTop: 10, // Ajusta espaço entre avatar e nome
        fontSize: 20,
        fontWeight: "bold",
        color: themes.colors.cyan,
      },
      statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
      },
      statBox: {
        alignItems: "center",
        backgroundColor: themes.colors.bgScreen,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
      statValue: {
        fontSize: 22,
        fontWeight: "bold",
        color: themes.colors.cyan,
      },
      statLabel: {
        fontSize: 14,
        color: themes.colors.cyan,
      },
      notaContainer: {
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: themes.colors.lightBlue,

      },
      notaTitulo: {
        fontSize: 16,
        fontWeight: "bold",
        color: themes.colors.cyan,
      },
      starsContainer: {
        flexDirection: "row",
        marginTop: 5,
      },
      star: {
        fontSize: 24,
        color: themes.colors.cyan,
        marginHorizontal: 2,
      },
      ajudaContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 10,
      },
      ajudaHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      },
      ajudaTituloPrincipal: {
        fontSize: 18,
        fontWeight: "bold",
        color: themes.colors.cyan,
      },
      reportarBugButton: {
        backgroundColor: themes.colors.cyan,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      reportarBugText: {
        color: themes.colors.bgScreen,
        fontSize: 14,
      },
      ajudaLista: {
        paddingVertical: 10,
      },
      ajudaItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: themes.colors.cyan,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
      },
      ajudaTitulo: {
        fontSize: 16,
        color: themes.colors.bgScreen,
      },
      ajudaIcon: {
        fontSize: 20,
        color: themes.colors.bgScreen,
      },
      ajudaDescricao: {
        fontSize: 14,
        color: themes.colors.dark,
        padding: 10,
        backgroundColor: themes.colors.lightBlue,
        borderRadius: 5,
        marginVertical: 5,
      },
  });