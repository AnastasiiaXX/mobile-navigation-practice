import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#25292e" />
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to My App</Text>
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
    backgroundColor: '#25292e',
    padding: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', 
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
