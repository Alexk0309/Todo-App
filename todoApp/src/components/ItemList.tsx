import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IItemList {
  desc: string;
  isComplete: boolean;
  date: string;
}

const ItemList: FC<IItemList> = props => {
  const {desc, isComplete, date} = props;
  const status = isComplete ? 'Completed' : 'Incomplete';
  const colorStatus = isComplete ? {color: 'green'} : {color: 'red'};
  const flattenStyle = StyleSheet.flatten([styles.itemStatusText, colorStatus]);
  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={styles.itemDescText}>{desc}</Text>
        <Text style={flattenStyle}>{status}</Text>
        <Text style={styles.itemDateText}>{date}</Text>
      </View>
    </>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  itemDescText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  itemStatusText: {
    color: 'black',
    fontSize: 20,
  },
  itemDateText: {
    color: 'black',
    fontSize: 15,
  },
});
