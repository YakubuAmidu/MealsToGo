import React, { createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { text } from 'react-native';

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from '../../components/utility/safe-area.component';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const Restaurants = () => {
    <SafeArea>
        <Text>Restaurants</Text>
    </SafeArea>
}

const Map = () => {
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
}

const Settings = () => {
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
}




export const AppNavigator = () => {
return (
<NavigationContainer>
<Tab.Navigator
  screenOptions={createScreenOptions}
  tabBarOptions={{
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
  }}
  <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
  <Tab.Screen name="Map" component={Map} />
  <Tab.Screen name="Settings" component={Settings} />
</Tab.Navigator>
</NavigationContainer>
)
}