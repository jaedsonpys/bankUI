import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.headerContent}>
            <View style={styles.backIcon}>
                <Ionicons name="chevron-back" size={26} color="white" />
            </View>
            <View style={styles.profileContent}>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>Ana Júlia</Text>
                    {/* View para tipo de conta */}
                    <View style={styles.typeAccountContent}>
                        <Text style={styles.typeAccount}>PLUS</Text>
                    </View>
                </View>
                <View style={styles.profileImage}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    profileContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    typeAccountContent: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,

        borderRadius: 13,
        backgroundColor: '#ff9805',
        marginTop: 5
    },

    typeAccount: {
        fontSize: 10,
        color: 'white',
        fontWeight: '700',
    },

    profileImage: {
        marginLeft: 25,
        height: 50,
        width: 50,
        borderRadius: 15,
        backgroundColor: '#28e3d6',
        borderWidth: 3,
        borderColor: 'white'
    }
})