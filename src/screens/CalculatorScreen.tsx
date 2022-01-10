import React from 'react'
import { Text, View } from 'react-native'
import { BtnCalc } from '../components/BtnCalc'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
    return (
        <View style={styles.containerCalculator}>
            <Text style={styles.smallResult}>1,500.00</Text>
            <Text style={styles.resultTextWhite}>1,500.00</Text>

            <View style={styles.rows}>
                <BtnCalc text='C' btnColor='#9B9B9B' />
                <BtnCalc text='+/-' btnColor='#9B9B9B' />
                <BtnCalc text='%' btnColor='#9B9B9B' />
                <BtnCalc text='/' btnColor='#FF9427' />
            </View>

            <View style={styles.rows}>
                <BtnCalc text='7' />
                <BtnCalc text='8' />
                <BtnCalc text='9' />
                <BtnCalc text='X' btnColor='#FF9427' />
            </View>

            <View style={styles.rows}>
                <BtnCalc text='4' />
                <BtnCalc text='5' />
                <BtnCalc text='6' />
                <BtnCalc text='-' btnColor='#FF9427' />
            </View>

            <View style={styles.rows}>
                <BtnCalc text='1' />
                <BtnCalc text='2' />
                <BtnCalc text='3' />
                <BtnCalc text='+' btnColor='#FF9427' />
            </View>

            <View style={styles.rows}>
                <BtnCalc text='C' bigBtn />
                <BtnCalc text='.' />
                <BtnCalc text='=' btnColor='#FF9427' />
            </View>

        </View>
    )
}

