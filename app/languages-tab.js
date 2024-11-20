import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import programmingLanguages from '../data/languages-list';
import ProgrammingLanguage from '../components/list-styled';

const LanguagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgrammingLanguage
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    padding: 10,
  },
});

export default LanguagesScreen;
