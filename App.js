import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from './src/data/products';
import ProductsScreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreen/>
   

    
      <Text>Open up App.js tstteg o start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
