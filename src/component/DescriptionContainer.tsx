import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';





const { width } = Dimensions.get('window');

interface DescriptionContainerProps {
  topic: string;
  description: string;
  descriptionHeight: any;
  spacification: string[];
  price: string;
  descriptionVisible?:  boolean;
  toggelDescription?:()=>void;
  directToCart?:()=>void;
  
}



const DescriptionContainer:React.FC<DescriptionContainerProps> = ({ topic, description, descriptionHeight , spacification , price, descriptionVisible, toggelDescription , directToCart}) => {
  const [isDescriptionPressed, setIsDescriptionPressed] = useState(true);
  const [isSpecificationPressed, setIsSpecificationPressed] = useState(false);

  
  const handleDescriptionPress = () => {
    setIsDescriptionPressed(true);
    setIsSpecificationPressed(false);
    if(!descriptionVisible){
      toggelDescription && toggelDescription();
      }
  };

  const handleSpecificationPress = () => {
    setIsSpecificationPressed(true);
    setIsDescriptionPressed(false);
    if(!descriptionVisible){
    toggelDescription && toggelDescription();
    }

  };
 
  return (
    <Animated.View style={[styles.descriptionContainer, { height: descriptionHeight }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={[styles.button, isDescriptionPressed && styles.buttonPressed]}
          onPress={handleDescriptionPress}
        >
          {!isDescriptionPressed && (
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'transparent']}
              style={styles.innerShadow}
            />
          )}
          <Text style={[styles.buttonText, isDescriptionPressed && styles.buttonTextPressed]}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isSpecificationPressed && styles.buttonPressed]}
          onPress={handleSpecificationPress}
        >
          {!isSpecificationPressed && (
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'transparent']}
              style={styles.innerShadow}
            />
          )}
          <Text style={[styles.buttonText, isSpecificationPressed && styles.buttonTextPressed]}>Specification</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.topic}>{isDescriptionPressed ?topic:"Specification"}</Text>
      {!isSpecificationPressed ?<Text style={styles.descriptionText}>{description}</Text>:
      <Text style={styles.specificationList}>{spacification.join('\n')}</Text>}
      <View style={[styles.cartSection, {bottom: descriptionVisible? 0: -100}]}>
        <Text style={styles.priceTag}>{price}</Text>
        <TouchableOpacity onPress={directToCart}>
          <LinearGradient colors={['#00a2ff', '#3e04aa']} style={{width:150, height:50, padding:10,margin:10,marginEnd:20,borderRadius:10, justifyContent:'center',alignContent:'center'}}>
          <Text style={styles.buttonTextCart}>Add to Cart</Text>
          </LinearGradient>
          
        </TouchableOpacity>
        </View>
      
    </Animated.View>
  );
};

export default DescriptionContainer;

const styles = StyleSheet.create({
  buttonTextCart: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  priceTag: {
    color: '#3D9CEA',
    fontSize: 22,
    fontWeight: 'bold',
    margin:20,
    marginStart:30,
    alignItems:'center',
  },
  cartSection:{
    backgroundColor:'#363535',
    height:100,
    width:width,
    position:'absolute',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    
  
  },
  specificationList:{
    color:'#8b8b8b',
    fontSize:16,
    lineHeight:30

  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    backgroundColor: '#242C3B',
    padding: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    padding: 10,
    backgroundColor: '#1b212c',
    position: 'relative',
  },
  buttonPressed: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 0,
  },
  innerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  buttonText: {
    color: '#a09d9d',
    fontSize: 16,
  },
  buttonTextPressed: {
    color: '#4286EE',
    fontWeight: 'bold',
  },
  topic: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionText: {
    color: '#8b8b8b',
    fontSize: 16,
  },
});