import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import quranData from './quran.json';

const SurahList = () => {
  return (
    <FlatList
      data={quranData.surahs}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.surahName}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  surahName: {
    fontSize: 20,
    color: '#1A4D2E', // Islamic green [[6]]
  },
});

export default SurahList;
