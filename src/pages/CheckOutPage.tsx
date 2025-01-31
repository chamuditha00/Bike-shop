import { Text, TouchableOpacity, View, Alert } from "react-native";


function CheckOutPage({navigation}:any) {	
     const logout= ()=>{
         
          navigation.navigate('LoginPage');
     }


  return (
   <View>
     <TouchableOpacity onPress={logout}/>
     
   </View>
    );
}

export default CheckOutPage;

