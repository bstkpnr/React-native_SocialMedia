import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

const postcard_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginBottom: 5,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white'
  },
  icon: { justifyContent: 'flex-start' },
  userName: {
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: '#1B95E0',
    color: 'white'
  },
  text: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    color: 'white'
  },
  date: {
    paddingLeft: 5,
    paddingVertical: 10,
    color: 'white'
  },
  saveIcon: {
    alignSelf: 'flex-end',
    paddingRight: 15
  },
  textContainer: {
    backgroundColor: '#000'
  },
  containerText: {
    backgroundColor: '#000'
  },
  userNametext: {
    color: '#D9D9D9'
  },
  dateText: {
    color: '#D9D9D9'
  }
})
const textInput_style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    left: 65,
    width: deviceSize.width * 0.7,
    backgroundColor: '#1B95E0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  text: {
    flex: 2,
    color: 'white'
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 5
  }
})

const text_style = StyleSheet.create({
  textContainer: {
    padding: 10,
    margin: 15,
    borderRadius: 10,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: deviceSize.width / 5,
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#1B95E0'
  }
})
const list_style = StyleSheet.create({
  container: {
    height: deviceSize.height * 0.78
  }
})

export { postcard_styles, textInput_style, text_style, list_style }
