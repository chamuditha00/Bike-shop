import React from "react";
import { Image, StyleSheet, Dimensions, Animated } from "react-native";


const { width, height } = Dimensions.get('window');

interface CoverImageProps{
    imageUrl:any
    descriptionVisible?:  boolean;
}


const CoverImage:React.FC<CoverImageProps>=({imageUrl,descriptionVisible})=>{
    return(

        <Animated.View style={[styles.coverImageWrapper, {height : descriptionVisible? height*0.2:height*0.75}, {position: descriptionVisible? 'relative':'absolute'}]} >
            <Image source={imageUrl} style={styles.coverImage}/>
        </Animated.View>
    );
}

export default CoverImage;


const styles = StyleSheet.create({

    coverImageWrapper: {
        marginTop:75,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',

    },
    coverImage: {
        padding: 10,
    },
});