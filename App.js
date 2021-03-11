import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './src/Component/Login';
import DashboardScreen from './src/Component/Dashboard';
import CasesScreen from './src/Component/Dashboard/Case';
import CaseDetail from './src/Component/Dashboard/CaseDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from './src/Drawer/sidebar';
import { Icon } from 'native-base';
import TeamScreen from './src/Component/Dashboard/Team';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeamInner from './src/Component/Dashboard/Team/teamInner';
import TeamList from './src/Component/Team/TeamList';
import Demo from './src/Component/Team/Demo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CaseDetail" component={CaseDetail} />
        <Stack.Screen name="Team" component={TeamScreen} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <SideBar {...props} />}
      drawerContentOptions={{
        activeTintColor: '#fff',
        itemStyle: {},
        activeBackgroundColor: '#b33f3f',
        inactiveTintColor: "blue"
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabel: 'Dashboard',
          drawerIcon: config => <Icon type="AntDesign" style={{ color: config.focused ? config.color : 'red' }} name="home" />,

        }}
      />
      <Drawer.Screen
        name="Case"
        component={CasesScreen}
        options={{
          drawerLabel: 'Cases Screen',
          drawerIcon: config => <Icon type="MaterialCommunityIcons" name="account-details" style={{ color: config.focused ? config.color : 'red' }} />
        }}
      />
      <Drawer.Screen
        name="MyTabs"
        component={TabNav}
        options={{
          drawerLabel: 'Tabs',
          drawerIcon: config => <Icon type="MaterialCommunityIcons" name="account-details" style={{ color: config.focused ? config.color : 'red' }} />
        }}
      />

    </Drawer.Navigator>
  )
}
function TabNav() {
  return (
    <Tab.Navigator initialRouteName="TeamList">
      <Tab.Screen
        name="TeamList"
        component={TeamList}
        options={{
          tabBarIcon: config => <Icon type="MaterialCommunityIcons" name="account-details" />
        }} />
      <Tab.Screen name="Demo" component={Demo} />
    </Tab.Navigator>
  );
}
