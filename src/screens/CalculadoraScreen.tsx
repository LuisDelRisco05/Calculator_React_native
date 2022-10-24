import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';


export default function Calculadora() {

    const {
        numeroanterior,
        numero,
        limpiar,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        positivoNegativo,
        armarNumero
} = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            {
            ( numeroanterior !== '0') && ( <Text style={styles.resultadoPequeno}>{numeroanterior}</Text>)
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            <View style={styles.fila}>  
                <BotonCalc text="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalc text="&plusmn;" color="#9B9B9B" accion={positivoNegativo}/>
                <BotonCalc text="&laquo;" color="#9B9B9B" accion={btnDelete} />
                <BotonCalc text="&divide;" color="#FF9427" accion={btnDividir} />
            </View>

            <View style={styles.fila}>  
                <BotonCalc text="7" accion={armarNumero} />
                <BotonCalc text="8" accion={armarNumero} />
                <BotonCalc text="9" accion={armarNumero} />
                <BotonCalc text="x" color="#FF9427" accion={btnMultiplicar} />
            </View>

            <View style={styles.fila}>  
                <BotonCalc text="4" accion={armarNumero} />
                <BotonCalc text="5" accion={armarNumero} />
                <BotonCalc text="6" accion={armarNumero} />
                <BotonCalc text="&ndash;" color="#FF9427" accion={btnRestar} />
            </View>

            <View style={styles.fila}>  
                <BotonCalc text="1" accion={armarNumero} />
                <BotonCalc text="2" accion={armarNumero} />
                <BotonCalc text="3" accion={armarNumero} />
                <BotonCalc text="+" color="#FF9427" accion={btnSumar} />
            </View>

            <View style={styles.fila}>  
                <BotonCalc text="0" accion={armarNumero} ancho={180} />
                <BotonCalc text="." accion={armarNumero}  />
                <BotonCalc text="=" color="#9B9B9B" accion={calcular} />
            </View>

        </View>
    )
}
