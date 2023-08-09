import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export interface IButton {
  title: string;
  onPress?: () => void;
}

const Button: FC<IButton> = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 'auto',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;
