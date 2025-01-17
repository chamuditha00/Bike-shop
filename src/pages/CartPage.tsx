import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CartCard from "../component/CartCard";
import { useEffect, useState } from "react";
interface cartProduct{
  id:number;
  name: string;
  topic: string;
  price: string;
  image: any;
  quantity: number;
}

function CartPage() {
  const increaseQuantity = async (id: number) => {
    try{
      const response = await fetch('http://10.200.29.82:3001/cart',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({
          id: id,
          quantity: 1,
        }),});

        console.log('Response:', response);
        if(!response.ok){
          throw new Error('Failed to add product to cart');
        }else{
            console.log('Product added to cart successfully');
        }



    }catch(error){
      console.error('Error:', error);
    }
   }

const decreaseQuantity = async (id: number,quantity:number) => {
    try{
      const response = await fetch('http://10.200.29.82:3001/cart',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({
          id: id,
          quantity: quantity-1,
        }),});

        console.log('Response:', response);
        if(!response.ok){
          throw new Error('Failed to add product to cart');
        }else{
            console.log('Product added to cart successfully');
        }
}catch(error){
      console.error('Error:', error);
    }
}


 

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
  
  return (
    <View style={style.backGround} >
           <View style={style.statusBar}>
        <TouchableOpacity >
          <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{ borderRadius: 10 ,width:44,height:44}}>
            <Image source={require('../assets/image/arrowleft.png')} style={style.arrowIcon} />
          </LinearGradient>
        </TouchableOpacity>
        <Text style={style.headerText}>My Shopping Cart</Text>
        <View style={{ width: 50 }} /> 

        
      </View>
      <FlatList
          data={cart}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
           <CartCard image={item.image} price={item.price} topic={item.name} quantity={item.quantity} id={item.id} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
         
          )}
        />

        
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