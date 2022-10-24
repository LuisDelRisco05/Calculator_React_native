import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string,
    color?: string,
    ancho?: number,
    accion: ( numeroTexto: string) => void,
}


export default function BotonCalc({text, color ='#2D2D2D', ancho, accion}:Props) {
    return (

        <TouchableOpacity onPress={() => accion( text )}>
            <View style={{...styles.btn, backgroundColor: color, width: (ancho === 180)? ancho : 80}}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                    }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btn: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10           
    }, 
    btnText: {
        fontSize: 35,
        fontWeight: '400',
        color: 'white',
    },
});