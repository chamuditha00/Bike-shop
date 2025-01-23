import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface SwipeButtonProps {
    width: number;
    height: number;
    railColor?: string;
    thumbColor?: string;
    directToCheckOut:() =>void;
    reset:() => void;
    restValue? :  boolean
}


const SwipeButton:React.FC<SwipeButtonProps> = ({
    width, height, railColor, thumbColor, directToCheckOut, reset, restValue

}) => {

    useEffect(() => {
        if(restValue){
            setSuccess(false);
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
              }).start();
        }
    }, [restValue]);
  const pan = useRef(new Animated.ValueXY()).current;
  const [success, setSuccess] = useState(false);
 

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > width - height) {
        setSuccess(true);
        reset();
        Animated.spring(pan, {
          toValue: { x: width - height, y: 0 },
          useNativeDriver: false,
        }).start(() => {
          directToCheckOut();
       
        });
      } else {
        setSuccess(false);
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rail,
          {
            width,
            height,
            backgroundColor: railColor,
            borderRadius: 10,
          },
        ]}
        
      >
       <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'transparent']}
              style={styles.innerShadow}
            />
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            pan.getLayout(),
            styles.thumb,
            {
              width: height,
              height,
              backgroundColor: thumbColor,
              borderRadius: 10,
            },
          ]}
        >
                 <LinearGradient
                            colors={['#1245d3', '#b500fd']}
                           style={styles.thumbIcon}
                        >
                            <Image source={require('../assets/image/arrowleft.png')} style={{ width: 30, height: 30 }} />
                        </LinearGradient>
        </Animated.View>
        {!success && (
          <Text style={[styles.text]}>Check Out</Text>
        )}
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    innerShadow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 10,
      },
    thumbIcon: {
        width: 50, 
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  rail: {
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    fontWeight: 'bold',
  },
});

export default SwipeButton;
