import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from '../pages/LandingPage';
import BikeDetails from '../pages/BikeDetails';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingPage} />
      <Tab.Screen name="Profile" component={BikeDetails} />
    </Tab.Navigator>
  );
}

export default BottomNav;