
import {

  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
function Header() {
  return (
   <SafeAreaView>
    <View style={style.statusBar}>
    <Text style={style.headerText}>Chooes Your Bike</Text>
    <Image source={require('../assets/image/CartButton.png')} style={style.searchIcon}/>
   </View>
   </SafeAreaView>

  );
}
export default Header;

const style = StyleSheet.create({
  statusBar:{
    marginTop: width * 0.05,
    flexDirection: 'row',
     alignItems: 'center' ,
      justifyContent: 'space-between',
       backgroundColor: '#242C3B',
       marginHorizontal: width * 0.05,
      

  },
  headerText:{
    color:"white",
    fontSize:25,
    fontWeight:"bold",
    fontFamily:"poppins",

  },
  searchIcon:{
    
    width:44,
    height:44,
    alignSelf:"flex-end",}

})