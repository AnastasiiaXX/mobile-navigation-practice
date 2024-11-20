import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#25292e" />
      <View style={styles.container}>
        <Link href="/about-tab" style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </Link>
        <Link href="/languages-tab" style={styles.button}>
          <Text style={styles.buttonText}>My Programming Languages</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF3E0',
    padding: 20,
  },
  button: {
    backgroundColor: '#E0F7FA', 
    borderRadius: 10,
    margin: 10,
    padding: 10,
   },
  buttonText: {
    color: '#3c33ff',
    fontSize: 18,
    textAlign: 'center',
  },
});
