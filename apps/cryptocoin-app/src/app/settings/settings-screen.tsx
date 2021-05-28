import React from 'react';
import { useRecoilState } from 'recoil';
import { Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { darkModeAtom } from '@coincap/atoms';
import { themePalette } from '@coincap/utils';

export function SettingsScreen() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: colors.text }}>Dark mode</Text>
      <Switch
        trackColor={{ false: colors.border, true: themePalette.white }}
        thumbColor={colors.card}
        ios_backgroundColor={colors.card}
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
