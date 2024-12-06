import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { styles } from "./styles";


export default function Perfil() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const ajudaTopicos = [
    {
      id: "1",
      titulo: "Editar foto de perfil",
      descricao:
        "Clicar no ícone ao lado direito da foto de perfil e alterar as informações necessárias na página que será redirecionado.",
    },
    {
      id: "2",
      titulo: "Alterar senha",
      descricao:
        "Acesse as configurações de conta para redefinir sua senha com segurança.",
    },
    {
      id: "3",
      titulo: "Excluir conta",
      descricao:
        "Na seção de configurações, clique em 'Excluir conta' e siga as instruções.",
    },
  ];

  const renderAjudaItem = ({ item }: { item: typeof ajudaTopicos[0] }) => (
    <View>
      <TouchableOpacity
        style={styles.ajudaItem}
        onPress={() =>
          setExpandedTopic(expandedTopic === item.id ? null : item.id)
        }
      >
        <Text style={styles.ajudaTitulo}>{item.titulo}</Text>
        <Text style={styles.ajudaIcon}>
          {expandedTopic === item.id ? "˄" : "˅"}
        </Text>
      </TouchableOpacity>
      {expandedTopic === item.id && (
        <Text style={styles.ajudaDescricao}>{item.descricao}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>⟳</Text>
          </TouchableOpacity>
          <View style={styles.avatar} />
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>✎</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nomeUsuario}>Nome do usuário</Text>
      </View>

      {/* Estatísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Freelas realizados</Text>
          <Text style={styles.statValue}>00</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Freelas em aberto</Text>
          <Text style={styles.statValue}>00</Text>
        </View>
      </View>

      {/* Nota Geral */}
      <View style={styles.notaContainer}>
        <Text style={styles.notaTitulo}>Minha nota geral</Text>
        <View style={styles.starsContainer}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Text key={index} style={styles.star}>
                ★
              </Text>
            ))}
        </View>
      </View>

      {/* Ajuda */}
      <View style={styles.ajudaContainer}>
        <View style={styles.ajudaHeader}>
          <Text style={styles.ajudaTituloPrincipal}>Ajuda</Text>
          <TouchableOpacity style={styles.reportarBugButton}>
            <Text style={styles.reportarBugText}>Reportar um bug</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ajudaTopicos}
          keyExtractor={(item) => item.id}
          renderItem={renderAjudaItem}
          contentContainerStyle={styles.ajudaLista}
        />
      </View>
    </View>
  );
}


