import { View, Text } from 'react-native'
import React from 'react'
import Login from './Components/Login'


const App = () => {
  return (
    <>
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Login />
      </View>

    </>
  )
}

export default App