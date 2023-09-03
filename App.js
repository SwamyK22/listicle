import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Signin from './src/screens/auth/Signin';

const App = () => {
  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  )
}

export default App