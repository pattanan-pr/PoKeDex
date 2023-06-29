import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Pokemon from './screen/Pokemon';
import PokemonDetailsScreen from './screen/PokemonDetailsScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pokemon"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
