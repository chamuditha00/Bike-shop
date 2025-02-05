import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../pages/LandingPage';
import BikeDetails from '../pages/BikeDetails';
import CartPage from '../pages/CartPage';
import CheckOutPage from '../pages/CheckOutPage';
import LoginPage from '../pages/LoginPage';


const Stack = createStackNavigator();
const NavigationContainers: React.FC = () =>{

    return(
      
      <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginPage" screenOptions={{animation:'fade'}}>
      <Stack.Screen
      name='LoginPage'
      component={LoginPage}
      options={{headerShown:false}}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="BikeDetails"
        component={BikeDetails}
        options={{ headerShown: false }}
     />
     <Stack.Screen
        name="CartPage"
        component={CartPage}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="CheckoutPage"
        component={CheckOutPage}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
      </NavigationContainer>
      
      );
}
export default NavigationContainers;