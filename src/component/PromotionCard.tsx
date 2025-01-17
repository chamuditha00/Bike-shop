import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import CardBgSvg from "../assets/svg/CardBgSvg"; // Adjust the path if needed
const { width, height } = Dimensions.get('window');
function PromotionCard() {
  return (
  
      <View style={style.cardBg}>
        <View style={style.CardBackground}>
          <CardBgSvg style={style.background} />
         
          <Image source={require('../assets/image/BikeImg.png')} style={style.imgSize} />
          <Text style={style.discount}>30% Off</Text>
        </View>
      </View>
  );
}

export default PromotionCard;

const style = StyleSheet.create({

  CardBackground:{
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  
  },
  cardBg: {
  
    marginTop: width * 0.01,
    alignItems: "center",
    justifyContent: "center",
    marginStart: width * 0.05,
    marginEnd: width * 0.05,
  },
  background: {
    
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  
    
  },
  discount: {
    color: "#ffffffac",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "poppins",
    alignSelf: "flex-start",
    marginStart: width * 0.05,
  },
  imgSize: {
    marginTop: -height * 0.39,
    height: 175,
  
  },
});
