import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet } from 'react-native';
import  Header  from './App/Header';
import  Data  from './App/Data';

export default function App() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
        <Header />
        <Data />
        <View
        style={{
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
        }}
      />
    </SafeAreaProvider>     
  );
}
