import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ItemList from '../../../components/ItemList';
import {useQuery} from 'react-query';
import {ITodoItem, getTodoItems} from '../../../api/todoApi';
import AddTaskModal from './AddTaskModal';

const HomeScreen = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['get_todo_item'],
    queryFn: () => getTodoItems(),
  });

  useEffect(() => {
    refetch();
  });

  return (
    <View style={styles.container}>
      <AddTaskModal visible={showAddModal} setShowAddModal={setShowAddModal} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        {isLoading ? (
          <Text>Loading ...</Text>
        ) : (
          data?.map((item: ITodoItem) => {
            const {description, complete, date, id} = item;
            return (
              <ItemList
                key={id}
                id={id}
                desc={description}
                isComplete={complete}
                date={date}
              />
            );
          })
        )}
      </ScrollView>

      <View style={styles.addTaskButtonContainer}>
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={() => setShowAddModal(true)}>
          <Text style={styles.addTaskButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  scrollContainer: {
    backgroundColor: 'white',
    marginBottom: 20,
    height: 580,
  },
  addTaskButtonContainer: {
    marginTop: 'auto',
  },
  addTaskButton: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  addTaskButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
