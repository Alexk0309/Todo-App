import React, {FC, useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../../components/Button';
import {useMutation} from 'react-query';
import {editTodo} from '../../../api/todoApi';

interface IEditTaskModal {
  visible: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTaskModal: FC<IEditTaskModal> = props => {
  const {visible, setShowAddModal} = props;
  const [taskDesc, setTaskDesc] = useState('');

  const submitEditTodoMutation = useMutation({
    mutationFn: editTodo,
  });

  const handleEditTodo = () => {
    submitEditTodoMutation.mutate({
      pathId: {
        id: 1,
      },
      param: {
        description: taskDesc,
      },
    });
    setTaskDesc('');
    setShowAddModal(false);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View>
        <View style={styles.addTaskForm}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Edit Task</Text>
            <TextInput
              style={styles.descriptionInput}
              placeholder="What do you want to do?"
              onChangeText={setTaskDesc}
              value={taskDesc}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Button onPress={handleEditTodo} title="Confirm" />
          <Button title="Cancel" onPress={() => setShowAddModal(false)} />
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
