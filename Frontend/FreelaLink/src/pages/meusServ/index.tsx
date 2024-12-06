import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../global/themes";

import { styles } from "./styles";
import { CardServ } from "../../components/cardServ";

export default function MeusServ() {
  const [selectedTab, setSelectedTab] = useState<"meusFreelas" | "compartilhados">("meusFreelas");
  const [isModalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState<number>(0);

  const handleConclude = () => {
    setModalVisible(true);
  };

  const handleStarPress = (star: number) => {
    setRating(star);
  };

  return (
    <View style={{ flex: 1, backgroundColor: themes.colors.bgScreen }}>
      {/* Top Navigation */}
      <View style={styles.containerTop}>
        <Text style={styles.titulo}>Serviços</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "meusFreelas" && styles.activeTab]}
          onPress={() => setSelectedTab("meusFreelas")}
        >
          <Text style={[styles.tabText, selectedTab === "meusFreelas" && styles.activeTabText]}>
            Meus freelas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "compartilhados" && styles.activeTab]}
          onPress={() => setSelectedTab("compartilhados")}
        >
          <Text style={[styles.tabText, selectedTab === "compartilhados" && styles.activeTabText]}>
            Compartilhados comigo
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <CardServ 
            titulo="Título do serviço"
            periodo="2 anos"
            hora="00:00 às 00:00"
            local="R. dos Serviços, 12 - Centro, SJC-SP"
            tipo='Tipo'
          />
          <TouchableOpacity style={styles.button} onPress={handleConclude}>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons name="close" size={24} color={themes.colors.cyan} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              {selectedTab === "meusFreelas" ? "Avaliar prestador" : "Avaliar ofertante"}
            </Text>


            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                  <MaterialIcons
                    name={star <= rating ? "star" : "star-border"}
                    size={32}
                    color={themes.colors.cyan}
                  />
                </TouchableOpacity>
              ))}
            </View>


            <TextInput
              style={styles.input}
              placeholder="Digite seu comentário..."
              multiline
            />


            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}