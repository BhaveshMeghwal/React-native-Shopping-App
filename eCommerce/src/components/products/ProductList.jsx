import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
// import useFetch from '../../hook/useFetch'
import ProductCard from './ProductCard'

import {data} from "./ProductsData"

const ProductList = () => {

    // const { data, isLoading, error } = useFetch()
    // if (isLoading) {
    //     return (
    //         <View>
    //             <ActivityIndicator />
    //         </View>
    //     )
    // }
    // if (error) return (<Text>Something Went Wrong</Text>)
    return (
        <View >
            <Text style={styles.text}>Products</Text>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (<ProductCard item={item} />)}
                contentContainerStyle={styles.card}
                ItemSeparatorComponent={() => (<View />)}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    card: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    text:{
        fontSize: 20,
     fontWeight: 400,
     marginBottom: 15,
     color: '#446761',

    },
})