import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import CriarServ from '../pages/criarServ';
import MeusServ from '../pages/meusServ';
import CustomTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false }} tabBar={props=><CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="criarServ" component={CriarServ} />
      <Tab.Screen name="meusServ" component={MeusServ} />
    </Tab.Navigator>
  );
}