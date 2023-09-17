import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from './src/data/products';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductsDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      {/* <ProductDetailsScreen/> */}
          <ShoppingCart/>

    
   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({


});
