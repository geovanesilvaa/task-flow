import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

export function TaskList({ data, deleteItem, editItem }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => deleteItem(data)}
      >
        <Ionicons name="trash" size={24} color="#000" />
      </TouchableOpacity>

      <View style={{ paddingRight: 10 }}>
        <TouchableWithoutFeedback onPress={() => editItem(data)}>
          <Text style={styles.text}>{data}</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
