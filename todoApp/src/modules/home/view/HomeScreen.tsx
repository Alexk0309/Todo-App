import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ItemList from '../../../components/ItemList';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/index';

const HomeScreen = () => {
  const {todoItems} = useSelector(({todo}: RootState) => todo);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      {todoItems.map(item => {
        const {description, complete, date} = item;
        return (
          <ItemList desc={description} isComplete={complete} date={date} />
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
