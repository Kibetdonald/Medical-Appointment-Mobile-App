import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/SignIn";
import SignUpScreen from "./src/SignUpScreen";
import Dashboard from "./src/Dashboard";
import CallScreen from "./src/CallScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Call"
          component={CallScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
