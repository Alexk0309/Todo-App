import React, {FC} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallButton from '../../../../components/SmallButton';
import {useMutation} from 'react-query';
import {deleteTodo} from '../../../../api/todoApi';

interface IItemList {
  id: number;
  desc: string;
  isComplete: boolean;
  date: string;
}

const ItemList: FC<IItemList> = props => {
  const {id, desc, isComplete, date} = props;
  const status = isComplete ? 'Completed' : 'Incomplete';
  const colorStatus = isComplete ? {color: 'green'} : {color: 'red'};
  const flattenStyle = StyleSheet.flatten([styles.itemStatusText, colorStatus]);

  const deleteTaskMutation = useMutation({mutationFn: deleteTodo});

  const handleDeleteTask = () => {
    console.log(id);
    deleteTaskMutation.mutate({id: id});
    Alert.alert('Delete Task', 'Task successfully deleted');
  };

  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemDescText}>{desc}</Text>
          <Text style={flattenStyle}>{status}</Text>
          <Text style={styles.itemDateText}>{date}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <SmallButton iconName="edit" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <SmallButton onPress={handleDeleteTask} iconName="delete" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  itemDescText: {
    width: 200,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemStatusText: {
    color: 'black',
    fontSize: 18,
  },
  itemDateText: {
    color: 'black',
    fontSize: 15,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
