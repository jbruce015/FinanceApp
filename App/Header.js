import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function Header() {
  return (
    <SafeAreaProvider>
        <Appbar.Header style={styles.header}>
        <Appbar.Content style={styles.container} title="Google Sheet" />
        <StatusBar />
        </Appbar.Header>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "rgba(137,232,207,100)",
  },
});