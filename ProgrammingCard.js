import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingCard = ({ language, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{language}</Text>
      <Text style={styles.experience}>Опыт: {experience}</Text>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  experience: {
    fontSize: 14,
    marginBottom: 8,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default ProgrammingCard;