import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Players from './components/Players';
import Teams from './components/Teams';
import MyDrawer from './MyDrawer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName='Teams' screenOptions={{ 
        headerRight: () => (<Icon name='menu' type="material" color="white" onPress={() => navigation.navigate("MyDrawer")}/>),
        headerShown: true, 
        headerStyle: { backgroundColor: "#27272F"}, 
        gestureEnable: true, 
        gestureDirection: "horizontal" }}>
            <Stack.Screen name="Teams" component={Teams} options={{ headerTintColor: "#FFFFFF", title: 'TEAMS' }} />
            <Stack.Screen name="Players" component={Players} options={{ headerTintColor: "#FFFFFF", title: 'PLAYERS' }} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

/* const styles = StyleSheet.create({
    screen: {
        headerTintColor: "#ffffff",
    }
}); */

export default StackNavigator;