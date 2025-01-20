import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


interface ProductCardProps {
  name: string;
  price: string;
  image: any; 
  category: string;
  onPress: () => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, category, onPress }) => {
  console.log(image);
  return (
    <View style={styles.card}>
     
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/image/mountainbike.png')} style={styles.productImage} />
        <View style={styles.cardBottom}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      </View>

    
      <TouchableOpacity style={styles.likeButton}>
        <Image src=''/>
      </TouchableOpacity>

    

      
      <TouchableOpacity style={styles.cardTouchable} onPress={onPress} />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    flex: 1,
    maxWidth: '50%',
    position: 'relative',
  },
  imageWrapper: {
    transform: [{ skewX: "-8deg" }],
    padding: width * 0.04,
    margin: width * 0.05,
    backgroundColor: '#333333c3',
    borderRadius: 10,
    
  },
  productImage: {
    width: '100%',	
    height: height * 0.095,
    resizeMode:'cover',
   
  
  },
  likeButton: {

    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  likeText: {

    fontSize: 20,
    color: 'white',
  },
  cardBottom: {
   

    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  category: {
    
    color: 'white',
    fontSize: 12,
  },
  name: {

    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    
    color: 'white',
    fontSize: 14,
  },
  cardTouchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
});
