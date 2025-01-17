import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface cartProps{
    id: number,
    image: any,
    price: string,
    topic: string,
    quantity: number,
   
}


const CartCard:React.FC<cartProps>=({image,price,topic, quantity,id})=>{

    const [productQuantity, setproductQuantity] = useState(quantity);
    return(
        <View style={style.cardWrapper}>
            <View style={{backgroundColor:'#ffffff26',borderRadius:10}}>
            <Image style={{width:100,height:100,resizeMode:'center',justifyContent:'center',alignContent:'center'}} source={require('../assets/image/roadbike.png')}/>
            </View>
            <View style={{justifyContent:'space-between'}}>
            <Text style={style.topic}>{topic}</Text>
            <Text style={style.priceTag}>{price}</Text>
            </View>
            <View style={style.quantityCounter}>
            <TouchableOpacity onPressIn={()=>{setproductQuantity(productQuantity+1)}}>
            <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{ borderRadius: 10 ,width:30,height:30,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/image/plus.png')} />
            </LinearGradient>
            </TouchableOpacity>
            <Text style={{color:'white',fontSize:20,margin:10}}>{productQuantity}</Text>
            <TouchableOpacity onPress={()=>{setproductQuantity(productQuantity-1)}}>
            <LinearGradient colors={['#ffffff7d', '#585758']} style={{ borderRadius: 10 ,width:30,height:30,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/image/minus.png')}  />
            </LinearGradient>
            </TouchableOpacity>
            </View>   
        </View>
    );
}

export default CartCard;


const style = StyleSheet.create({
    quantityCounter:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:10,
        marginEnd:10,
        
    },

    cardWrapper:{
        backgroundColor:'#333333c3',
        borderRadius:10,
        padding:10,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    topic:{
        fontSize:24,
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        
    },
    priceTag:{
        marginLeft:10,
        marginTop:40,
        fontSize:20,
        color:'#00a2ff',
    },
    plusIcon: {
        width: 30,
        height: 30,
        alignItems: 'center',
      },
      minusIcon: {
        width: 14,
        height: 14,
        alignItems: 'center',
        justifyContent:'center'
      },

});