import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/store/configStore';

import MainNavigation from './src/navigation/mainNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainNavigation />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
