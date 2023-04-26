import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FullPost from "./components/FullPost/FullPost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import { HomePage } from "./components/pages/HomePage";
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="FullPost" component={FullPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Posts"
          component={Home}
        />
        <Tab.Screen name="Form" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
