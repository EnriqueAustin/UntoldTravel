import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1, marginVertical: 10, }}>
        <MainNavigator />
      </GestureHandlerRootView>
  );
}
