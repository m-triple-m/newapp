import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DiceSimulator = () => {
    return (
        <View>
            <Text
                style={styles.title}
            >Dice Simulator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    }
});

export default DiceSimulator