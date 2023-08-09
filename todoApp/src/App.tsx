import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './modules/home/view/HomeScreen';
import {Provider} from 'react-redux';
import store from './store';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={styles.safeContainer}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Todo List</Text>
          </View>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
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
