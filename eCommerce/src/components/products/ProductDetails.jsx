import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity style={styles.backIcon} >
                    <Icon name="chevron-left" size={18} color="#ffcb74" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.backIcon} >
                    <Icon name="heart" size={18} color="#ffcb74" />
                </TouchableOpacity>
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <ScrollView style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}/-</Text>
                <Text style={styles.description}>{item.description}</Text>

                <TouchableOpacity style={styles.addButton} onPress={() => { /* Add to Cart Logic */ }}>
                    <Icon name="shopping-bag" size={18} color="#2f2f2f" style={styles.cartIcon} />
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f5f5f5',
    },
    upperRow: {
        flexDirection: "row",
        // marginHorizontal:4,
        paddingHorizontal: 15,
        marginVertical: 10,
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999
    },
    backIcon: {
        backgroundColor: '#2f2f2f',
        // width:120,
        // height:120,
        padding: 10,
        borderRadius: 30,
    },
    image: {
        // width: '100%',
        // height: 500,
        aspectRatio: .7,
        resizeMode: "cover",
    },
    detailsContainer: {
        marginTop: -20,
        paddingHorizontal: 25,
        paddingVertical: 30,
        backgroundColor: '#2f2f2f',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
    },
    name: {
        fontSize: 22,
        fontWeight: "500",
        color: '#ffcb74',
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        color:"#f6f6f6",
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color:"#f6f6f6",
        marginBottom: 20,
    },
    addButton: {
        flexDirection: "row",
        alignitem: "center",
        justifyContent: "center",
        backgroundColor: '#ffcb74',
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginVertical: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#2F2f2f',
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
});
// backgroundColor: '#343434',
// color="#FFD700"
export default ProductDetails;