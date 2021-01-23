import { StyleSheet } from 'react-native'

const postcard_styles = StyleSheet.create({
  container: { backgroundColor: '#bcbcbc', marginBottom: 5 },
  icon: {},
  userName: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange'
  },
  text: { paddingLeft: 5, paddingVertical: 10, backgroundColor: '#fff' },
  saveIcon: { alignSelf: 'flex-end', paddingRight: 5, backgroundColor: '#fff' }
})

export { postcard_styles }
