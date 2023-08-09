import React, {FC} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';

interface IAddTaskModal {
  visible: boolean;
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTaskModal: FC<IAddTaskModal> = props => {
  const {visible, setShowAddModal} = props;
  return (
    <Modal animationType="slide" visible={visible}>
      <View>
        <View style={styles.addTaskForm}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Add" />
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
});

export default AddTaskModal;
