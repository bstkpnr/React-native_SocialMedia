import React from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { PostCard } from './components'

const currentUserId = auth().currentUser.uid
function FavoriteScreen() {
  const [favori, setFavori] = React.useState([])

  useEffect(() => favoriRead(), [])

  function favoriRead() {
    database()
      .ref(`user_saved/${currentUserId}`)
      .on('value', (snapShot) => {
        const data = snapShot.val()
        if (!data) {
          return null
        }
        setFavori(Object.values(data))
      })
  }
  const renderItem = ({ item }) => {
    return <PostCard post={item} />
  }

  return (
    <View>
      <Text>Favorite Page</Text>
      <FlatList
        data={favori}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export { FavoriteScreen }
