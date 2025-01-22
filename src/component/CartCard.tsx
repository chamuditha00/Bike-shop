import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface cartProps {
  id: number;
  image: string;
  price: string;
  topic: string;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void; 
}

const CartCard: React.FC<cartProps> = ({ id, image, price, topic, quantity, onUpdateQuantity, onRemoveItem }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const updateQuantity = async (newQuantity: number) => {
    try {
      const response = await fetch('http://10.200.29.82:3001/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
          quantity: newQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update product quantity');
      } else {
        setProductQuantity(newQuantity);
        onUpdateQuantity(id, newQuantity); // Update the parent component
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const increaseQuantity = () => {
    updateQuantity(productQuantity + 1);
  };

  const decreaseQuantity = () => {
    updateQuantity(productQuantity - 1);
  };

  return (
    <View style={style.cardWrapper}>
      <View style={{ backgroundColor: '#ffffff26', borderRadius: 10 }}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'center', justifyContent: 'center', alignContent: 'center' }}
          source={require('../assets/image/roadbike.png')}
        />
      </View>
      <View style={{ justifyContent: 'space-between' }}>
        <Text style={style.topic}>{topic}</Text>
        <Text style={style.priceTag}>{price}</Text>
      </View>
      <View style={style.quantityCounter}>
        <TouchableOpacity onPress={increaseQuantity}>
          <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{ borderRadius: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/image/plus.png')} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>{productQuantity}</Text>
        <TouchableOpacity onPress={decreaseQuantity}>
          <LinearGradient colors={['#ffffff7d', '#585758']} style={{ borderRadius: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/image/minus.png')} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  cardWrapper: {
    backgroundColor: '#333333c3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topic: {
    color: 'white',
    fontSize: 22,
    marginBottom:30
  },
  priceTag: {
    color: '#5acbf8',
    fontSize: 18,
  },
  quantityCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginEnd: 10,
  },
});

export default CartCard;