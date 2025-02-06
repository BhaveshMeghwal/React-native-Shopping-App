import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { SliderBox } from 'react-native-image-slider-box'
// import Carousel from 'react-native-snap-carousel';

const Carousel = () => {
    const slides = [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
    
  return (
    <View style={styles.container}>
      {/* <SliderBox
        images={slides}
        sliderBoxHeight={200}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        dotStyle={styles.dotStyle}
        autoplay
        circleLoop
        ImageComponentStyle={styles.imageStyle}
      /> */}
      {/* <Image source={{uri:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/> */}
      <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
          resizeMode="cover"
        />

    </View>
  )
}

export default Carousel


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    imageStyle: {
      borderRadius: 15,
      width: '97%',
      marginTop: 5,
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 2,
    },
  });
  