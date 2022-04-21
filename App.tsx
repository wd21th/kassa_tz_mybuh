import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';


// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

import RootNavigation from "./navigators/Container"

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>

        <ReduxProvider store={store} >
          <RootNavigation />
        </ReduxProvider>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
