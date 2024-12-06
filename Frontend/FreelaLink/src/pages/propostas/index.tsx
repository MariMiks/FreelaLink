import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { themes } from "../../global/themes";
import { styles } from "./styles";


export default function Propostas() {
  const [selectedTab, setSelectedTab] = useState<"retornos" | "entradas">("retornos");

  const renderCard = (status: "Aprovado" | "Recusado", details: string, isEntradas?: boolean) => (
    <View style={[styles.card, isEntradas && styles.cardEntrada]}>
      <Text style={styles.cardTitle}>Título do serviço</Text>
      {!isEntradas && <Text style={styles.details}>{details}</Text>}
      {isEntradas && (
        <View style={styles.prestadorContainer}>
          <Text style={styles.prestadorName}>Nome do prestador</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      )}
      {/* Renderiza o status apenas na aba "retornos" */}
      {selectedTab === "retornos" && (
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.statusText,
              status === "Aprovado" ? styles.aprovado : styles.recusado,
            ]}
          >
            {status}
          </Text>
        </View>
      )}
      {/* Botões apenas para a aba "entradas" */}
      {isEntradas && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonRecusar}>
            <Text style={styles.buttonText}>Recusar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAprovar}>
            <Text style={styles.buttonText}>Aprovar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: themes.colors.bgScreen }}>
      {/* Top Navigation */}
      <View style={styles.containerTop}>
        <Text style={styles.titulo}>Propostas</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "retornos" && styles.activeTab]}
          onPress={() => setSelectedTab("retornos")}
        >
          <Text style={[styles.tabText, selectedTab === "retornos" && styles.activeTabText]}>
            Retornos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "entradas" && styles.activeTab]}
          onPress={() => setSelectedTab("entradas")}
        >
          <Text style={[styles.tabText, selectedTab === "entradas" && styles.activeTabText]}>
            Entradas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {selectedTab === "retornos" && (
          <>
            {renderCard("Recusado", "Um pouco mais de detalhes sobre o serviço ofertado.")}
            {renderCard("Aprovado", "Outro detalhe relevante sobre o serviço ofertado.")}
          </>
        )}
        {selectedTab === "entradas" && (
          <>
            {renderCard("Recusado", "Breve comentário sobre o serviço ofertado.", true)}
            {renderCard("Aprovado", "Outro breve comentário relevante.", true)}
          </>
        )}
      </ScrollView>
    </View>
  );
}
