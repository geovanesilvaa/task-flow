import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export function HeaderTab({ nameUser }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Seja Bem-Vindo, {nameUser || "Usuário!"}😁
      </Text>
    </View>
  );
}
