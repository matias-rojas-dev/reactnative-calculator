import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string | number,
    btnColor?: string,
    bigBtn?: boolean
}

export const BtnCalc = ({ text, btnColor = '#2D2D2D', bigBtn = false }: Props) => {


    return (
        <TouchableOpacity
            activeOpacity={0.5}
        >
            <View
                style={{
                    ...styles.btn,
                    backgroundColor: btnColor,
                    width: (bigBtn) ? 180 : 80
                }}
            >
                <Text style={{
                    ...styles.btnText,
                    color: btnColor === '#9B9B9B' ? 'black' : 'white'
                }}>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}