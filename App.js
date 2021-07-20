import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Pages
import FirstPage from '/home/lua/v2_mundo_coletor/src/pages/FirstPage';
import SecondPage from '/home/lua/v2_mundo_coletor/src/pages/SecondPage';
import ThirdPage from '/home/lua/v2_mundo_coletor/src/pages/ThirdPage';

//SidBar
import CustomSidebarMenu from '/home/lua/v2_mundo_coletor/src/components/CustomSidebarMenu'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackIconHeaderLeft = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('/home/lua/v2_mundo_coletor/assets/icon-menu.png')}
          style={{ width: 18, height: 15, marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='FirstPage'>
      <Stack.Screen
        name='FirstPage'
        component={FirstPage}
        options={{
          title: 'Home',
          headerLeft: () => (<StackIconHeaderLeft navigationProps={navigation} />),
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold', color: '#000' },
        }} />
    </Stack.Navigator>
  )
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName='SecondPage'
      screenOptions={{
        headerLeft: () => (<StackIconHeaderLeft navigationProps={navigation} />),
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold', color: '#000' },
      }} >
      <Stack.Screen
        name='SecondPage'
        component={SecondPage}
        options={{ title: 'Pontos de Coletas' }}
      />
      <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}
        options={{ title: 'Coletor(a)' }}
      />
    </Stack.Navigator >
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style='auto' backgroundColor='#fff' />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#000',
            inactiveTiniColor: '#000',
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
          <Drawer.Screen
            name='FirstPage'
            options={{ drawerLabel: 'Primeira Tela' }}
            component={firstScreenStack}
          />
          <Drawer.Screen
            name='SecondPage'
            options={{ drawerLabel: 'Segunda Tela' }}
            component={secondScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView >
  );
}
