// SearchScreen.js

import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Sample product data (normally fetched from an API)
  const products = [
    { id: '1', name: 'Smartphone', price: 299, image: 'https://via.placeholder.com/200', description: 'A great smartphone with excellent features.' },
    { id: '2', name: 'Jacket', price: 79, image: 'https://via.placeholder.com/200', description: 'A stylish jacket for all seasons.' },
    { id: '3', name: 'Shoes', price: 59, image: 'https://via.placeholder.com/200', description: 'Comfortable and stylish shoes.' },
    // Add more products as needed
  ];

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.productContainer}
            onPress={() => navigation.navigate('ProductDescription', { product: item })}
          >
            {/* <Image source={{ uri: item.imageUrl }} style={styles.productImage} /> */}
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No products found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#FF6347',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666666',
    marginTop: 20,
  },
});

export default Search;
