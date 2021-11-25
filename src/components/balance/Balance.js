import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Balance() {
    return (
        <View style={styles.contentBalance}>
            <Text style={styles.value}>523.89$</Text>
            <Text style={{color: 'white'}}>Your balance</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentBalance: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 30
    },

    value: {
        fontWeight: '700',
        color: 'white',
        fontSize: 35
    }
})