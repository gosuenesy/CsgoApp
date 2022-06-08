import * as React from 'react';
import { Alert } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import Players from './components/Players';
import Teams from './components/Teams';
import Results from './components/Results';
import News from './components/News';
import Login from './components/Login';
import { auth } from './FirebaseConfig'

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='News' screenOptions={{
            headerShown: true, 
            headerStyle: { backgroundColor: "#27272F"},
            drawerContentStyle : { backgroundColor: "#27272F" },
            backgroundColor: "#373740", 
            drawerActiveTintColor: "#1EB980",
            gestureEnable: true, 
            gestureDirection: "horizontal" }}>
            {
                auth.currentUser === null?
                <Drawer.Screen name="Profile" component={News} title="Profile" options={{ headerTintColor: "#FFFFFF", drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='account-circle' type="material-community" color="white"/>) }} />
                :
                <Drawer.Screen name={auth.currentUser?.email} component={News} title={auth.currentUser?.email} options={{ headerTintColor: "#FFFFFF", drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='account-circle' type="material-community" color="white"/>) }} />
            }
            <Drawer.Screen name="News" component={News} options={{ headerTintColor: "#FFFFFF", title: 'News', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='newspaper-variant' type="material-community" color="white"/>) }} />
            <Drawer.Screen name="Results" component={Results} options={{ headerTintColor: "#FFFFFF", title: 'Results', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='scoreboard' type="material-community" color="white"/>) }} />
            <Drawer.Screen name="Teams" component={Teams} options={{ headerTintColor: "#FFFFFF", title: 'Teams', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='groups' type="material" color="white"/>) }} />
            <Drawer.Screen name="Players" component={Players} options={{ headerTintColor: "#FFFFFF", title: 'Players', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='recent-actors' type="material" color="white"/>) }} />
            {
                auth.currentUser === null?
                <Drawer.Screen name="Sign in" component={Login} options={{ headerShown: true, headerTintColor: "#FFFFFF", title: 'Sign In', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='login' type="material" color="white"/>) }} />
                :
                <Drawer.Screen name="Sign out" component={Login} options={{ headerShown: true, headerTitle: "Sign in", headerTintColor: "#FFFFFF", title: 'Sign Out', drawerLabelStyle: { color: "#FFFFFF" }, drawerIcon: () => (<Icon name='login' type="material" color="white"/>) }} />
            }
        </Drawer.Navigator>
    );
}


export default MyDrawer;