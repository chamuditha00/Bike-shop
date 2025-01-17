import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import HeaderBar from '../component/HeaderBar';
import PromotionCard from '../component/PromotionCard';
import SelectionButton from '../component/TypeSelectButton';
import ProductCard from '../component/Productcard';
import BackgroundSvg from '../assets/svg/BackgroundSvg';



interface Product {
  id: number;
  name: string;
  price: string;
  image: any; 
  category: string;
  description: string;
  topic: string;
  specifications: string[];
}

function LandingPage({navigation}: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const [product, setProduct] = useState<Product[]>([]);


  const getProducts = async () => {
    try {
      const response = await fetch('http://10.200.29.82:3001/products');
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);


  // const products: Product[] = [
  //   { 
  //     id: 15, 
  //     name: 'Product 5', 
  //     price: '$10,000.00', 
  //     image: require('../assets/image/roadbike.png'), 
  //     category: 'Road',
  //     description: 'This is a road bike. It is designed for speed and efficiency on paved roads. The lightweight frame and aerodynamic design make it perfect for long-distance rides and competitive racing. Ideal for cyclists looking to improve their performance and enjoy a smooth ride.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Lightweight frame',
  //       'Aerodynamic design',
  //       'High-speed gears',
  //       'Suitable for long-distance rides',
  //     ],
  //   },
  //   { 
  //     id: 16, 
  //     name: 'Product 6', 
  //     price: '$80,000.00', 
  //     image: require('../assets/image/ElectricBicycle.png'), 
  //     category: 'Electric',
  //     description: 'This is an electric bike. It features a powerful motor and battery to assist with pedaling, making it easier to tackle hills and long distances. Perfect for commuters and recreational riders who want an extra boost. Enjoy the convenience and fun of electric cycling.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Powerful motor',
  //       'Long-lasting battery',
  //       'Pedal assist',
  //       'Suitable for commuting',
  //     ],
  //   },
  //   { 
  //     id: 1, 
  //     name: 'Product 4', 
  //     price: '$9,000.00', 
  //     image: require('../assets/image/mountainbike.png'), 
  //     category: 'Mountain',
  //     description: 'This is a mountain bike. Built for off-road adventures, it has a sturdy frame and suspension system to handle rough terrain. Ideal for trail riding, downhill racing, and exploring the great outdoors. Experience the thrill of mountain biking with this reliable bike.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Sturdy frame',
  //       'Suspension system',
  //       'Off-road tires',
  //       'Suitable for trail riding',
  //     ],
  //   },
  //   { 
  //     id: 13, 
  //     name: 'Product 3', 
  //     price: '$14,000.00', 
  //     image: require('../assets/image/roadbike.png'), 
  //     category: 'Road',
  //     description: 'This is a road bike. It is designed for speed and efficiency on paved roads. The lightweight frame and aerodynamic design make it perfect for long-distance rides and competitive racing. Ideal for cyclists looking to improve their performance and enjoy a smooth ride.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Lightweight frame',
  //       'Aerodynamic design',
  //       'High-speed gears',
  //       'Suitable for long-distance rides',
  //     ],
  //   },
  //   { 
  //     id: 12, 
  //     name: 'Product 2', 
  //     price: '$10,000.00', 
  //     image: require('../assets/image/mountainbike.png'), 
  //     category: 'Mountain',
  //     description: 'This is a mountain bike. Built for off-road adventures, it has a sturdy frame and suspension system to handle rough terrain. Ideal for trail riding, downhill racing, and exploring the great outdoors. Experience the thrill of mountain biking with this reliable bike.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Sturdy frame',
  //       'Suspension system',
  //       'Off-road tires',
  //       'Suitable for trail riding',
  //     ],
  //   },
  //   { 
  //     id: 11, 
  //     name: 'Product 1', 
  //     price: '$10,000.00', 
  //     image: require('../assets/image/helmet.png'), 
  //     category: 'Accessory',
  //     description: 'This is a helmet. Designed for safety and comfort, it provides essential protection for cyclists. The lightweight and aerodynamic design ensures a comfortable fit, while the ventilation system keeps you cool. Perfect for road, mountain, and recreational cycling. Stay safe with this high-quality helmet.',
  //     topic: 'Accessory',
  //     specifications: [
  //       'Lightweight design',
  //       'Aerodynamic shape',
  //       'Ventilation system',
  //       'Suitable for all types of cycling',
  //     ],
  //   },
  //   { 
  //     id: 10, 
  //     name: 'Product 0', 
  //     price: '$1,099.00', 
  //     image: require('../assets/image/roadbike.png'), 
  //     category: 'Road',
  //     description: 'This is a road bike. It is designed for speed and efficiency on paved roads. The lightweight frame and aerodynamic design make it perfect for long-distance rides and competitive racing. Ideal for cyclists looking to improve their performance and enjoy a smooth ride.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Lightweight frame',
  //       'Aerodynamic design',
  //       'High-speed gears',
  //       'Suitable for long-distance rides',
  //     ],
  //   },
  //   { 
  //     id: 19, 
  //     name: 'Product 9', 
  //     price: '$1999.00', 
  //     image: require('../assets/image/mountainbike.png'), 
  //     category: 'Mountain',
  //     description: 'This is a mountain bike. Built for off-road adventures, it has a sturdy frame and suspension system to handle rough terrain. Ideal for trail riding, downhill racing, and exploring the great outdoors. Experience the thrill of mountain biking with this reliable bike.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Sturdy frame',
  //       'Suspension system',
  //       'Off-road tires',
  //       'Suitable for trail riding',
  //     ],
  //   },
  //   { 
  //     id: 17, 
  //     name: 'Product 7', 
  //     price: '$20,000.00', 
  //     image: require('../assets/image/roadbike.png'), 
  //     category: 'Road',
  //     description: 'This is a road bike. It is designed for speed and efficiency on paved roads. The lightweight frame and aerodynamic design make it perfect for long-distance rides and competitive racing. Ideal for cyclists looking to improve their performance and enjoy a smooth ride.',
  //     topic: 'Bike',
  //     specifications: [
  //       'Lightweight frame',
  //       'Aerodynamic design',
  //       'High-speed gears',
  //       'Suitable for long-distance rides',
  //     ],
  //   },
  //   { 
  //     id: 18, 
  //     name: 'Product 8', 
  //     price: '$10,000.00', 
  //     image: require('../assets/image/helmet.png'), 
  //     category: 'Accessory',
  //     description: 'This is a helmet. Designed for safety and comfort, it provides essential protection for cyclists. The lightweight and aerodynamic design ensures a comfortable fit, while the ventilation system keeps you cool. Perfect for road, mountain, and recreational cycling. Stay safe with this high-quality helmet.',
  //     topic: 'Accessory',
  //     specifications: [
  //       'Lightweight design',
  //       'Aerodynamic shape',
  //       'Ventilation system',
  //       'Suitable for all types of cycling',
  //     ],
  //   },
  // ];

  const filteredProducts = product.filter(
    product => selectedCategory === 'All' || product.category === selectedCategory
  );

  
  const groupProducts = (products: Product[]) => {
    const grouped: Product[][] = [];
    for (let i = 0; i < products.length; i += 2) {
      grouped.push(products.slice(i, i + 2));
      
    }
    return grouped;
  };

  const groupedProducts = groupProducts(filteredProducts);

  const handleProductPress = (productId: number,topic: string, description:string, image:any,specifications:string[],price:string) => {
    navigation.navigate('BikeDetails',{
      productId,
      topic,
      description,
      image,
      specifications,
      price
    });
   
    console.log('Navigate to product details for ID:', productId, 'Topic:', topic, 'Description:', description,'imageurl', image, 'specifications',specifications[1],'\n',specifications[2],'\n',specifications[3],'\n',specifications[0]);
  };

  return (

    <View style={styles.container}>
      <View style={styles.backgroundWrapper}>
        <BackgroundSvg style={styles.background} />
      </View>

      <ScrollView style={{ width: '100%' }}>
        <HeaderBar />
        <PromotionCard />
        <SelectionButton SelectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <View style={styles.productCardContainer}>
          {groupedProducts.map((group, index) => (
            <View key={index} style={styles.productRow}>
              {group.map(product => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  onPress={() => handleProductPress(product.id, product.topic, product.description,product.image,product.specifications, product.price)}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242C3B',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  background: {
    position: 'absolute',
    top: 150,
    left: 0,
    right: 100,
    bottom: 0,
    zIndex: -1,
  },
  productCardContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 60,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LandingPage;
