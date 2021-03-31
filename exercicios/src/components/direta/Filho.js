import React from 'react' 
import { Text, View, Button } from 'react-native'
import Estilo from './estilo'

export default props => {
    return (
        <React.Fragment>
            <Text style={Estilo.txtGrande}>{props.a}<Text/>
            <Text style={Estilo.txtGrande}>{props.b}<Text/>
        <React.Fragment/>
    )
}