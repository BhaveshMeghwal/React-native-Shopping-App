// ProductCard.js

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const ProductCard = ({item}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("ProductDetails",{item})} key={item._id} >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        {/* <Text style={styles.price}>${item.price}</Text> */}
        <TouchableOpacity style={styles.button} onPress={() => onAddToCart(product)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 145,
    backgroundColor: '#343434',
    borderRadius:10,
    // borderStartStartRadius:10,
    // padding: 10,
    margin: 10,
    overflow:"hidden",
    shadowColor: '#fc3',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  image: {
    width: "100%",
    height: 128,
    // borderRadius: 10,
  },
  details: {
    flex: 1,
    // flexDirection: "column",
    padding: 10,
  },
  name: {
    fontSize: 12,
    // fontWeight: 'bold',
    // textAlign:"center",
    marginBottom: 5,
    color: '#f6f6f6'
  },
  price: {
    fontSize: 10,
    // color: '#888',
    // marginBottom: 10,
  },
  button: {
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
export default ProductCard;
