import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ItemList from '../../../components/ItemList';

const HomeScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <ItemList desc="Wash dishes" isComplete={false} date="23-07-2023" />
      <ItemList desc="Practical test" isComplete={true} date="23-07-2023" />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
});
