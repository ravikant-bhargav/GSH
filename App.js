/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import React, { useRef, useEffect, useState } from "react";

import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  LogBox,
  Button,
  StatusBar,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import store from "./src/redux/store";
import { Provider } from "react-redux";

import { AuthLoadingStack } from "./src/navigation/AuthLoadingStack";
import { OnBoardingStack } from "./src/navigation/OnBoardingStack";
import { SignUpStack } from "./src/navigation/SignUpStack";
import { DashboardStack } from "./src/navigation/DashboardStack";

import { SafeAreaProvider } from "react-native-safe-area-context";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

LogBox.ignoreAllLogs();

//import DrawerMenu from './src/components/Drawer/DrawerMenu';

import CustomDrawer from "./src/navigation/CustomDrawer";
import MyProfile from "./src/screens/myaccount/MyProfile";
import { MyProfileStack } from "./src/navigation/MyProfileStack";
import { MyOrderStack } from "./src/navigation/MyOrderStack";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
//import DrawerScreen1 from './src/screens/drawerscreen/DrawerScreen1';

import { ChangeLanguage } from "./src/screens/changelanguage/ChangeLanguage";

export const THEME_COLOR = "#0069fe";
const Stack = createStackNavigator();

//let persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingStack"
          screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
          <Stack.Screen name="CustomDrawer" component={CustomDrawer} />

          <Stack.Screen
            name="AuthLoadingStack"
            component={AuthLoadingStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnBoardingStack"
            component={OnBoardingStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpStack"
            component={SignUpStack}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="DashboardStack" component={DashboardStack} options={{ headerShown: false }} />  */}
          <Stack.Screen
            name="MyProfileStack"
            component={MyProfileStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MyOrderStack"
            component={MyOrderStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangeLanguage"
            component={ChangeLanguage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
