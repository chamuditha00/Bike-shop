import { Animated, StyleSheet, Text, View } from "react-native";


interface BillContainerProps {
    subTotal: number;
    discount: number;
    deliveryFee: number;
    billContainerHeight: any;
}
const getTotal = (subTotal: number, discount: number, deliveryFee: number) => {
    let total = subTotal - (subTotal * discount) / 100 + deliveryFee;
    return Math.ceil(total*100)/100;
}
const BillContainer: React.FC<BillContainerProps> = ({ subTotal, discount, deliveryFee, billContainerHeight }) => {
    return (
        <Animated.View style={[styles.billContainer, { height: subTotal!==0 ?billContainerHeight:0 }]}>
            <View style={styles.billWrapper}>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Subtotal</Text>
                    <Text style={styles.billText}>${subTotal}</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Discount</Text>
                    <Text style={styles.billText}>{discount}%</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Delivery Fee</Text>
                    <Text style={styles.billText}>${deliveryFee}</Text>
                </View>
                <View style={styles.billRow}>
                    <Text style={styles.billText}>Total</Text>
                    <Text style={styles.billText}>{getTotal(subTotal,discount,deliveryFee)}</Text>
                </View>
            </View>
        </Animated.View>
    );
};

export default BillContainer;

const styles = StyleSheet.create({
    billContainer: {
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    billWrapper: {
        padding: 20,
    },
    billRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    billText: {
        fontSize: 16,
        fontFamily: "poppins",
    },
});