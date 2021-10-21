import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lists from "./src/screens/Lists";
import ShoppingList from "./src/screens/ShoppingList";
import {actions, createStore} from "./src/store";
import {Provider, useDispatch, useSelector} from "react-redux";

export const store = createStore();
const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#e48419"/>
            <Stack.Navigator>
                <Stack.Screen name="Main" options={{headerShown: false}} component={Main}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const MainStack = createStackNavigator();
function Main() {
  return (
      <MainStack.Navigator>
          <MainStack.Screen name="Lists" options={{headerShown: false}} component={Lists}/>
          <MainStack.Screen name="ShoppingList" options={{headerShown: false}} component={ShoppingList}/>
      </MainStack.Navigator>
  );
}

function AppContainer() {
    return (
        <Provider store={store}><App/></Provider>
    )
}

export default AppContainer;
