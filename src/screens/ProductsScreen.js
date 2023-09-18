import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import products from '../data/products';

const ProductsScreen=({navigation})=>{
    return (
        <FlatList
        data={products}
        renderItem={({item})=>
        <Pressable onPress={()=>navigation.navigate('Product Details')} style={styles.itemContainer}>
          <Image 
            source={{uri: item.image}}
            style={{width:'100%',aspectRatio:1}}/>
        
        </Pressable>} 
        numColumns={2} 
  />
    )
}

const styles = StyleSheet.create({
    itemContainer:{
      width:'50%',
      padding:1,
  
    }
  });

export default ProductsScreen