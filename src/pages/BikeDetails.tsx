import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackgroundSvg from '../assets/svg/BackgroundSvg';	 
import CoverImage from '../component/CoverImage';

import DescriptionContainer from '../component/DescriptionContainer';


function BikeDetails({route, navigation}:any) {

  const {topic, description,image , specifications, price,productId} =route.params;
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const [animation] = useState(new Animated.Value(0));
  const [toggle, setToggle] = useState(require('../assets/image/arrowleft.png'));

  
  const directToCart= async ()=>{
 
      try {
        const response = await fetch('http://10.200.29.82:3001/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: productId,
            quantity: 1,
          }),
        });
        console.log('Response:', response);
    
        if (!response.ok) {
          throw new Error('Failed to add product to cart');
        }
    
        console.log('Product added to cart successfully');
      } catch (error) {
        console.error('Error:', error);
      }
  
   
    navigation.navigate('CartPage',{topic,image , price,productId});
    console.log('Navigate to CartPage for ID:',productId, topic, 'Topic:', topic, 'Description:', description,'imageurl', image, 'price', price);
  }

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
    Animated.timing(animation, {
      toValue: descriptionVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    
    setToggle(descriptionVisible ? require('../assets/image/arrowleft.png') : require('../assets/image/arrowDown.png'));
  };

  const descriptionHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [80, 400], 
  });



  return (
    <View style={style.container}>
      <View style={style.backgroundWrapper}>
        <BackgroundSvg />
      </View>
      <View style={style.statusBar}>
        <TouchableOpacity onPress={toggleDescription}>
          <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{ borderRadius: 10 ,width:44,height:44}}>
            <Image source={toggle} style={style.arrowIcon} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={style.headerText}>{topic}</Text>
        <View style={{ width: 50 }} /> 
      </View>
      <CoverImage imageUrl={image} descriptionVisible={descriptionVisible} />
    <DescriptionContainer descriptionVisible={descriptionVisible} 
     description={description} topic={topic} descriptionHeight={descriptionHeight}
      spacification={specifications} price={price} toggelDescription={toggleDescription}
      directToCart={directToCart}
      />
    </View>
  );
}

export default BikeDetails;

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#242C3B', 
    flex: 1,
    
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    margin:16
  },
  arrowIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  
});
