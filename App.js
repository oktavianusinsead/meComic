import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './src/navigator/AppStack'

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}

export default App
