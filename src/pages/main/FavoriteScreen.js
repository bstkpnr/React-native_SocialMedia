import React from 'react'
import { View, Text, FlatList } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { FavoriCard } from './components'

function FavoriteScreen() {
  const [favori, setFavori] = React.useState([])

  React.useEffect(() => favoriRead(), [])

  function favoriRead() {
    const currentUserId = auth().currentUser.uid
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
    return <FavoriCard post={item} />
  }

  return (
    <View>
      <FlatList
        data={favori}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export { FavoriteScreen }
