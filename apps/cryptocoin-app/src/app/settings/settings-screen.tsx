import React from 'react';
import { useRecoilState } from 'recoil';
import { Text, Switch, StyleSheet, SafeAreaView } from 'react-native';

import { darkModeAtom } from '@coincap/atoms';

export function SettingsScreen() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dark mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setDarkMode(!darkMode)}
        value={darkMode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SettingsScreen;
