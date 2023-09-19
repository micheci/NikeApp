import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
//import products from '../data/products';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen=({navigation})=>{
  const dispatch=useDispatch();

	const products = useSelector((state) => state.products.products);
    return (
        <FlatList
        data={products}
        renderItem={({item})=>
        <Pressable onPress={()=>{
        console.log(item.id)
          dispatch(productsSlice.actions.setSelectedProduct(item.id));

          navigation.navigate('Product Details')}} style={styles.itemContainer}>
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