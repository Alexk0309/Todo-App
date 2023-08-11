import React, {FC, useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../../components/Button';
import {useMutation} from 'react-query';
import {editTodo} from '../../../api/todoApi';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {todoActions} from '../../../store/todoSlice';

const EditTaskModal: FC = () => {
  const dispatch = useDispatch();
  const [taskDesc, setTaskDesc] = useState('');
  const submitEditTodoMutation = useMutation({
    mutationFn: editTodo,
  });
  const {
    showEditTaskModal,
    editTaskModalData: {description, id = 0},
  } = useSelector((state: RootState) => state.todo);

  const closeEditTodoModal = () => {
    setTaskDesc('');
    dispatch(
      todoActions.CONTROL_EDIT_TASK_MODAL({
        showModal: false,
        clearData: true,
      }),
    );
  };

  const handleEditTodo = () => {
    submitEditTodoMutation.mutate({
      pathId: {
        id: id,
      },
      param: {
        description: taskDesc,
      },
    });
    setTaskDesc('');
    closeEditTodoModal();
  };

  return (
    <Modal animationType="slide" visible={showEditTaskModal}>
      <View>
        <View style={styles.addTaskForm}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Edit Task</Text>
            <TextInput
              style={styles.descriptionInput}
              placeholder={description}
              onChangeText={setTaskDesc}
              value={taskDesc}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleEditTodo} title="Confirm" />
          <Button title="Cancel" onPress={closeEditTodoModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addTaskForm: {
    height: '100%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 'auto',
    marginBottom: 20,
  },
  button: {
    width: 'auto',
    height: 'auto',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  descriptionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
  },
  descriptionTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  descriptionInput: {
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
});

export default EditTaskModal;
