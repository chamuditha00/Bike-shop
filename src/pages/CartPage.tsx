import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CartCard from "../component/CartCard";
import { useEffect, useState } from "react";
import BillContainer from "../component/BillContainer";
import CheckOutPage from "./CheckOutPage";
interface cartProduct{
  id:number;
  name: string;
  topic: string;
  price: string;
  image: any;
  quantity: number;
}


function CartPage({navigation}:any) {


  const directToCheckOut = () => {
    navigation.navigate('CheckoutPage');
};

  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const [animation] = useState(new Animated.Value(0));
  const [toggle, setToggle] = useState(require('../assets/image/arrowleft.png'));
     const [cart, setCart] = useState<cartProduct[]>([]);

     
     const getCart = async () => {
      try {
        const response = await fetch('http://10.200.29.82:3001/cart');
        const cart = await response.json();
        setCart(cart);
      } catch (error) {
        console.error('Error:', error);
      }

     }
     const parsePrice = (priceString: string): number => {
      const cleanedString = priceString.replace(/[$,]/g, '');
      return parseFloat(cleanedString);
    };


      const calTotal = () => {
       
        let total = 0;
        cart.forEach((item) => {
          let price = parsePrice(item.price);
          console.log('price:', price);
          console.log('quantity:', item.quantity);
          total += price * item.quantity;
          console.log('total:', total);
          
        });
        return total;
      }

     useEffect(() => {
      getCart();
      
    }, []);

    useEffect(() => {
      calTotal();
    }, [cart]);

    const toggleDescription = () => {
      setDescriptionVisible(!descriptionVisible);
      Animated.timing(animation, {
        toValue: descriptionVisible ? 0 : 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      
      setToggle(descriptionVisible ? require('../assets/image/arrowleft.png') : require('../assets/image/arrowDown.png'));
    };
  
    const descriptionHeight = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300], 
    });
  return (
    <View style={style.backGround} >
           <View style={style.statusBar}>
        <TouchableOpacity onPress={toggleDescription}>
          <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{ borderRadius: 10 ,width:44,height:44}}>
            <Image source={toggle} style={style.arrowIcon} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={style.headerText}>My Shopping Cart</Text>
        <View style={{ width: 50 }} /> 

        
      </View>
      <FlatList
          data={cart}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
           <CartCard image={item.image} price={item.price} topic={item.name} quantity={item.quantity} id={item.id} onUpdateQuantity={(id: number, quantity: any) => {
             const updatedCart = cart.map(product => product.id === id ? { ...product, quantity } : product);
             setCart(updatedCart);
           }} onRemoveItem={(id) => {
             const updatedCart = cart.filter(product => product.id !== id);
             setCart(updatedCart);
           }} />
         
          )}
        />

        <BillContainer directToCheckOut={directToCheckOut} subTotal={calTotal()} discount={30} deliveryFee={300} billContainerHeight={descriptionHeight}/>

        
    </View>
 
  );
}

export default CartPage;


const style = StyleSheet.create({

    backGround: {
        backgroundColor: "#242C3B",
        flex: 1,
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
})