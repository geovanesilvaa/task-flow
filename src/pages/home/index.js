import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import styles from "./styles";

const logoTarefa = require("../../img/tarefas-app-sf.png");

export function Home() {
  const [nameUser, setNameUser] = useState("");
  const [loading, setLoading] = useState(false);

  const saveUsernameToStorage = async () => {
    setLoading(true);

    if (nameUser === "") {
      Alert.alert("Ops!", "Por favor, insira seu nome!");
      setLoading(false);
      return;
    }

    try {
      await AsyncStorage.setItem("username", JSON.stringify(nameUser));

      showMessage({
        message: "Seu nome foi adicionado com sucesso!",
        type: "success",
        duration: 4000,
      });
    } catch (error) {
      Alert.alert("Ops!", "Tivemos um problema com o servidor!");

      console.error("Erro ao salvar o nome do usuário no AsyncStorage:", error);
    }

    setLoading(false);

    setNameUser("");
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.viewIndicator}>
          <ActivityIndicator size={130} color={"#000"} />
        </View>
      ) : (
        <>
          <Image source={logoTarefa} style={styles.logo} />
          <View style={styles.containerInput}>
            <TextInput
              value={nameUser}
              style={styles.input}
              placeholder="Digite seu nome..."
              placeholderTextColor="#fff"
              onChangeText={(text) => setNameUser(text)}
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={saveUsernameToStorage}
            >
              <Text style={styles.text}>Adicionar</Text>
              <Ionicons name="add-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
