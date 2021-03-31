import React from 'react'
import { Button } from 'react-native'

import arredondado from './estilo'

export default props => {


    function executar() {
        return () => console.warn('Funcionou!!! #1')      
    }
    /*function executar() {
        console.warn('Funcionou!!!')
    }*/

    return (
        <>
        <Button
        
            title ='Executar!'
            /*onPress = {executar}*/
            onPress = {executar()}
        
        />
        <Button
        
        title ='Executar!'
        /*onPress = {executar}*/
        onPress = {
            () => console.warn('Funciona mesmo!!!')
        }
    
    />

        </>
            
    )
}