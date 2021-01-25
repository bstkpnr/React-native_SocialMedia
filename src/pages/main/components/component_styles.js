import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const postcard_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0efeb',
    marginBottom: 5,
    padding: 10
  },
  icon: { justifyContent: 'flex-start' },
  userName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#a0c4ff'
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
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#a0c4ff',
    margin: 10,
    padding: 5,
    width: 350,
    height: 50,
    top: deviceSize.height / 4,
    borderRadius: 10,
    justifyContent: 'center'
  }
})

export { postcard_styles, textInput_style }
