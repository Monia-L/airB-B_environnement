import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Es-tu cool ? </Text>
      <Button title="Touc me !" onPress={() => Alert.alert('Aïe!')} />
    </View>
  );
}
