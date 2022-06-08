import 'react-native-gesture-handler';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView, StatusBar, LogBox } from 'react-native';
import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Header as HeaderRNE } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Players from './Players';
import Teams from './Teams';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StackNavigator from '../StackNavigator';
import MyDrawer from '../MyDrawer';

const store = createStore(reducers, applyMiddleware(thunk));

LogBox.ignoreLogs(['Warning: ...']);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#32333D'
  },
};

const App = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer theme={MyTheme}>
          <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
};

/* const styles = StyleSheet.create({
  header: {
    backgroundColor: "#212121"
  }
}); */

export default App;
