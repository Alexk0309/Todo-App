import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ItemList from './components/ItemList';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Todo List</Text>
        </View>
        <ItemList desc="Wash dishes" isComplete={false} date="23-07-2023" />
        <ItemList desc="Practical test" isComplete={true} date="23-07-2023" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    backgroundColor: 'white',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
