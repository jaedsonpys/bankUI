import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Main() {
    return (
        <View style={styles.mainContent}></View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        marginTop: 35,
        width: '100%',
        height: '100%',

        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white'
    }
})