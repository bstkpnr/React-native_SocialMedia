import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignInScreen, SignUpScreen } from './pages/auth/'
import { HomeScreen, FavoriteScreen } from './pages/main'
import auth from '@react-native-firebase/auth'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const hasUserAuth = auth().currentUser
const hasAuthUser = auth().onAuthStateChanged((user) => {
  if (user) {
    return true
  } else {
    return false
  }
})

function App() {
  return (
    <NavigationContainer>
      {hasAuthUser ? (
        <>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignIn"
              component={SignInScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SignUp"
              component={SignUpScreen}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  )
}

export default App
