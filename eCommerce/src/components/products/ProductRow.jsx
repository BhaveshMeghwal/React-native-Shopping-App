import { View, Text, ActivityIndicator,FlatList,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../../hook/useFetch'
import ProductCard from './ProductCard'

const ProductRow = () => {
  // const {data, isLoading, error} = useFetch()

  const data=[
    {
      "id": 1,
      "name": "Diamond Ring",
      "image": "https://img.tatacliq.com/images/i21//658Wx734H/MP000000024148433_658Wx734H_202412202218421.jpeg"
    },
    {
      "id": 2,
      "name": "Gold Necklace",
      "image": "https://img.tatacliq.com/images/i7/658Wx734H/MP000000012406452_658Wx734H_202203090612501.jpeg"
    },
    {
      "id": 3,
      "name": "Emerald Earrings",
      "image": "https://img.tatacliq.com/images/i9/658Wx734H/MP000000016480033_658Wx734H_202302111325541.jpeg"
    },
    {
      "id": 4,
      "name": "Ruby Bracelet",
      "image": "https://example.com/images/ruby-bracelet.jpg"
    },
    {
      "id": 5,
      "name": "Sapphire Pendant",
      "image": "https://example.com/images/sapphire-pendant.jpg"
    }
  ]
  


  return (
      <View>
      {/* {isLoading ? <ActivityIndicator /> : error ?(<Text style={styles.error}>Something went wrong {error} </Text>): 
        (<FlatList
          data={data}
          keyExtractor={(item)=>{item._id}}
          renderItem={({ item }) => <ProductCard item={item} />}
          horizontal
          contentContainerStyle={styles.card}
        />)
        
      } */}
      <FlatList
        style={styles.container}
          data={data}
          keyExtractor={(item)=>{item._id}}
          renderItem={({ item }) => <ProductCard item={item} />}
          horizontal
          contentContainerStyle={styles.card}
        />

      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // padding:20,
    paddingVertical:10,
    // borderBottomColor:"#000",
    // borderBottomWidth:1,
  },
  error:{
    color: '#e23133',
  },
  
})
  export default ProductRow