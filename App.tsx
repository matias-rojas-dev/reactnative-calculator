import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { styles } from './src/theme/appTheme'

export const App = () => {
  return (
    <SafeAreaView style={styles.backgroundBlack}>
      <StatusBar
        backgroundColor='black' // header (nav bar) of notifications
        barStyle='light-content' // icons of header
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}