import React, { useState } from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import ProgrammingCard from './ProgrammingCard';
import programmingLanguages from './data';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Имитация обновления данных
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={programmingLanguages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgrammingCard
            language={item.language}
            experience={item.experience}
            logo={item.logo}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});