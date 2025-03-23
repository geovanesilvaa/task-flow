import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Alert,
  FlatList,
  Keyboard,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { useIsFocused } from "@react-navigation/native";
import { HeaderTab } from "../../components/HeaderTab";
import { TaskList } from "../../components/TaskList";

import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export function Dashboard() {
  const [inputText, setInputText] = useState("");

  const [data, setData] = useState([]);

  const [key, setKey] = useState("");

  const [userName, setUserName] = useState("");

  const focused = useIsFocused();

  const inputRef = useRef(null);

  const loadUserName = async () => {
    try {
      const userNameJSON = await AsyncStorage.getItem("username");

      if (userNameJSON) {
        const userNameObj = JSON.parse(userNameJSON);

        setUserName(userNameObj);
      }
    } catch (error) {
      Alert.alert("Ops!", "Tivemos um problema com o servidor!");

      console.error(
        "Erro ao recuperar o nome do usuário do AsyncStorage:",
        error
      );
    }
  };

  useEffect(() => {
    loadUserName();
  }, [focused]);

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("itemList");

        if (storedData !== null) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        Alert.alert("Ops!", "Tivemos um problema com o servidor!");

        console.error("Erro ao carregar os dados do AsyncStorage:", error);
      }
    };

    loadStoredData();
  }, []);

  const addItemToList = async () => {
    const trimmedText = inputText.trim();

    if (trimmedText === "") {
      Alert.alert("Ops!", "Por favor, insira uma Tarefa!");
      return;
    }

    const itemExist = data.some((item) => item === trimmedText);

    if (itemExist) {
      Alert.alert("Ops!", "A Tarefa já existe!");
      return;
    }

    if (key !== "") {
      try {
        const storedData = await AsyncStorage.getItem("itemList");

        if (storedData) {
          const currentData = JSON.parse(storedData);

          const itemIndex = currentData.findIndex((item) => item === key);

          if (itemIndex !== -1) {
            currentData[itemIndex] = trimmedText;

            await AsyncStorage.setItem("itemList", JSON.stringify(currentData));

            setData(currentData);

            Alert.alert("Uhuu!", "A Tarefa foi atualizada!");

            setInputText("");
          } else {
            Alert.alert("Erro", "A Tarefa não foi encontrada na lista.");
          }
        }
      } catch (error) {
        Alert.alert("Ops!", "Tivemos um problema com o servidor!");

        console.error("Erro ao atualizar os dados no AsyncStorage:", error);
      }

      Keyboard.dismiss();
      setKey("");
      return;
    }

    if (inputText) {
      const newData = [...data, trimmedText];

      try {
        await AsyncStorage.setItem("itemList", JSON.stringify(newData));

        setData(newData);

        Alert.alert("Uhuu!", "A Tarefa foi adicionada!");

        setInputText("");
      } catch (error) {
        Alert.alert("Ops!", "Tivemos um problema com o servidor!");

        console.error("Erro ao salvar os dados no AsyncStorage:", error);
      }
    }
  };

  const handleDeleteItem = async (itemToDelete) => {
    try {
      const storedData = await AsyncStorage.getItem("itemList");

      if (storedData) {
        const currentData = JSON.parse(storedData);

        const updatedData = currentData.filter((item) => item !== itemToDelete);

        await AsyncStorage.setItem("itemList", JSON.stringify(updatedData));

        setData(updatedData);

        Alert.alert("Uhuu!", "A Tarefa foi removida!");
      }
    } catch (error) {
      Alert.alert("Ops!", "Tivemos um problema com o servidor!");

      console.error("Erro ao salvar os dados no AsyncStorage:", error);
    }
  };

  const handleEditItem = async (data) => {
    setKey(data);
    setInputText(data);
    inputRef.current.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderTab nameUser={userName} />

      <Text style={styles.text}>ADICIONE UMA TAREFA</Text>

      <View style={styles.viewInput}>
        <TextInput
          ref={inputRef}
          value={inputText}
          style={styles.input}
          placeholder="Adicionar......"
          placeholderTextColor="#fff"
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={addItemToList}>
          <Text style={styles.textBtn}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <TaskList
            data={item}
            deleteItem={handleDeleteItem}
            editItem={handleEditItem}
          />
        )}
      />
    </SafeAreaView>
  );
}
