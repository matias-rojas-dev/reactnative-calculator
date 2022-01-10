import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundBlack: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerCalculator: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    resultTextWhite: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    smallResult: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 30,
        textAlign: 'right'
    },
    btn: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '400',
        color: 'white'
    },
});