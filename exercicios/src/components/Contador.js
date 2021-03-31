import React, { useState } from 'react'
import { Text, Button } from 'react-native'

import Estilo from './estilo'

export default ({inicial=0, passo=1}) => {

    const [numero, setNumero] = useState(inicial)
    //let numero = props.inicial

    const inc = () => {
        setNumero( numero + /*1*/passo)
        //numero++ 
        //console.warn(numero)
    }
    const dec = () => {
        setNumero( numero - /*1*/passo)
        //numero-- 
        //console.warn(numero)
    }

    return (
        <>
            <Text>
                {numero}
            </Text>
            <Button title='+' onPress = { inc } />
            <Button title='-' onPress = { dec } />

        </>

    )
}

