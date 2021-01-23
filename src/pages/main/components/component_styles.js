import { StyleSheet, Dimensions } from 'react-native'
const deviceSize = Dimensions.get('window')

const postcard_styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0efeb',
    marginBottom: 5,
    padding: 10
  },
  icon: { justifyContent: 'flex-start' },
  userName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#a0c4ff',
    height: 40
  },
  text: { paddingLeft: 5, paddingVertical: 10, backgroundColor: '#fff' },
  date: {
    paddingLeft: 5,
    paddingVertical: 10
  },
  saveIcon: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    backgroundColor: '#f0efeb'
  }
})
const textInput_style = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#a0c4ff',
    margin: 10,
    padding: 5,
    top: 600,
    width: 350,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center'
  }
})

export { postcard_styles, textInput_style }
