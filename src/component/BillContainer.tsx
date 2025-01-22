import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import SwipeButton from "./SwipButtonCus";




interface BillContainerProps {
    subTotal: number;
    discount: number;
    deliveryFee: number;
    billContainerHeight: any;
    directToCheckOut:()=>void;
}

const getTotal = (subTotal: number, discount: number, deliveryFee: number): number => {
    const total = subTotal * (1 - discount / 100) + deliveryFee;
    return Math.ceil(total * 100) / 100;
};

const formatNumber = (number: number): string => {
    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
};



const BillContainer: React.FC<BillContainerProps> = ({directToCheckOut, subTotal, discount, deliveryFee, billContainerHeight }) => {
    const total = getTotal(subTotal, discount, deliveryFee);

    return (
        <Animated.View style={[styles.billContainer, { height: subTotal !== 0 ? billContainerHeight : 0 }]}>
            <View style={styles.billWrapper}>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Subtotal</Text>
                    <Text style={styles.billText}>${formatNumber(subTotal)}</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Discount</Text>
                    <Text style={styles.billText}>{discount}%</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Delivery Fee</Text>
                    <Text style={styles.billText}>${formatNumber(deliveryFee)}</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalText}>${formatNumber(total)}</Text>
                </View>
                {/* <SwipeButton
                    thumbIconComponent={() => (
                        <LinearGradient
                            colors={['#1245d3', '#b500fd']}
                           style={styles.thumbIcon}
                        >
                            <Image source={require('../assets/image/arrowleft.png')} style={{ width: 30, height: 30 }} />
                        </LinearGradient>
                    )}
                    railBackgroundColor="#000000"
                    railBorderColor="#ff0000"
                    railFillBackgroundColor="#0011ff"
                    railFillBorderColor="#0d25ff"
                    titleColor="#7e7e7e"
                    title="Check Out"
                    onSwipeSuccess={directToCheckOut}
                    containerStyles={styles.swipeButtonContainer} 
                    railStyles={styles.swipeButtonRail} 
                /> */}
                <SwipeButton width={200} height={50} directToCheckOut={directToCheckOut}  />
            </View>
        </Animated.View>
    );
};

export default BillContainer;

const styles = StyleSheet.create({
 
    billContainer: {
        backgroundColor: "#1c212c",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    swipeButtonContainer: {
        width: '60%', 
        borderRadius: 10, 
        alignSelf: 'center', 
    },
    swipeButtonRail: {
        borderRadius: 10, 
    },
    billWrapper: {
        marginTop: 20,
        padding: 20,
    },
    billRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        paddingBottom: 10,
    },
    billText: {
        fontSize: 18,
        color: "#999999",
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    thumbIcon: {
        width: 60, // Adjust the width as needed
        height: 50, // Adjust the height as needed
        alignItems: 'center',
        justifyContent: 'center',
    },
});