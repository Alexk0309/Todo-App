import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import ItemList from '../../../components/ItemList';
// import {useSelector} from 'react-redux';
// import {RootState} from '../../../store/index';
import {useQuery} from 'react-query';
import {ITodoItem, getTodoItems} from '../../../api/todoApi';

const HomeScreen = () => {
  //   const {todoItems} = useSelector(({todo}: RootState) => todo);

  const {data, isLoading, refetch} = useQuery({
    queryKey: ['get_todo_item'],
    queryFn: () => getTodoItems(),
  });

  useEffect(() => {
    refetch();
  });

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        data?.map((item: ITodoItem) => {
          const {description, complete, date, id} = item;
          return (
            <ItemList
              key={id}
              desc={description}
              isComplete={complete}
              date={date}
            />
          );
        })
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
