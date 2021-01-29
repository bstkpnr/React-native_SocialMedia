import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SignInScreen, SignUpScreen } from './pages/auth/'
import { HomeScreen, FavoriteScreen } from './pages/main'
import auth from '@react-native-firebase/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function App() {
  const [initializing, setInitializing] = React.useState(true)
  const [hasUserAuth, setUser] = React.useState()

  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) {
      setInitializing(false)
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  })

  if (initializing) {
    return null
  }

  return (
    <NavigationContainer>
      {hasUserAuth ? (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => generateIcon(color, route),
            tabBarLabel: () => null
          })}
          tabBarOptions={{
            activeTintColor: '#1DA1F2',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  )
}
function generateIcon(color, route) {
  let iconName

  switch (route.name) {
    case 'Home':
      iconName = 'home'
      break

    case 'Favorite':
      iconName = 'heart'
      break

    default:
      break
  }
  return <Ionicons name={iconName} color={color} size={30} />
}

export default App
