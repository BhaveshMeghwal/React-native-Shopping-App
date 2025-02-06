import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProductList from '../components/products/ProductList';
import ProductRow from '../components/products/ProductRow';
// import Carousel from '../components/home/Carousel';
import styles from './home.styles';

const Home = ({ navigation }) => {

  const categories = [
    { id: '1', name: 'Bracelets', image: 'https://rankajewellers.in/cdn/shop/products/BRA6152_2_3e7b715b-fdd8-4009-859f-44388a389317.webp?v=1680241310' },
    { id: '2', name: 'Necklace', image: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/312/1659013251_ce18167be7daa7b3e45e.jpg' },
    { id: '3', name: 'Nose Pins', image: 'https://rankajewellers.in/cdn/shop/products/mng_359_1_05954c97-8658-4cf6-8853-ca5b95951d72.jpg?v=1649146059' },
    { id: '4', name: 'Earrings', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ335DbeEaBx8BfiRt2zYmLEwplw-UqdMKuiCIAVIjPaiddP_4fEgu9CQvxtUUgj3QdeVM&usqp=CAU' },
    { id: '5', name: 'Bangles', image: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1217/1671205036_00339dd41542896df32c.png' },
    { id: '6', name: 'Chains', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd98bc28/images/hi-res/512880CVLAA00_1.jpg?sw=640&sh=640' },
    { id: '7', name: 'Gold Coins', image: 'https://www.kundanrefinery.com/pub/media/catalog/product/cache/a6819a77997e6f5ec84977f1af72369f/k/r/kr14-a_1.jpg' },
    { id: '8', name: 'Mangalsutras', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfbOTsV6zKSPq8Tpum2xOJwc4Ae7trnJsoA&s' },
    // { id: '3', name: '', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <View style={styles.location}>
          <Icon name="map-marker-alt" size={20} color="#FFD700" style={styles.icon} />
          <Text style={styles.locationText}>Bangalore</Text></View>
        <TouchableOpacity style={styles.cartIconContainer} onPress={() => { navigation.navigate("Cart") }}>
          <Icon name="shopping-bag" size={20} color="#FFD700" />
        </TouchableOpacity>
      </View>

      <ScrollView >

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryContainer}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* <Text style={styles.header}>Welcome to Our Store</Text> */}
        {/* <Carousel/> */}
        <Image
          source={{ uri: "https://c4.wallpaperflare.com/wallpaper/338/279/754/models-model-brown-eyes-earrings-girl-hd-wallpaper-preview.jpg" }} // Replace with your hero image URL
          style={styles.heroImage}
          resizeMode="cover"
        />

        <ProductRow />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};


export default Home;
