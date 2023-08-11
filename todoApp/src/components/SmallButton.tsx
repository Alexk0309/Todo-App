import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface ISmallButton {
  iconName: string;
  onPress?: () => void;
}

const SmallButton: FC<ISmallButton> = props => {
  const {iconName, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcon name={iconName} size={30} color="black" />
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
  },
});
