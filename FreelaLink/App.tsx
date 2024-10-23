import './gesture-handler';
import { StyleSheet, View } from 'react-native';

import Routes from './src/routes/index.routes'
import { NavigationContainer } from '@react-navigation/native';
import { themes } from './src/global/themes';

export default function App() {
  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
