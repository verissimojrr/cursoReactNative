import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default props => {
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) +props.min
    
    return <Text style={Estilo.txtGrande}> O número aleatório é o {aleatorio} </Text>     
}