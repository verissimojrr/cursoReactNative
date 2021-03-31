import React/*,{ Fragment }*/ from 'react'
import { Text,  /*View*/ } from 'react-native'

import Estilo from  './estilo'

export default props => {

    return (
        <React.Fragment key='1'>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>)
        /*<>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>)*/
        /*<Fragment>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>)*/
        /*<React.Fragment>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </React.Fragment>)*/

        /*<View>
            <Text style={Estilo.txtGrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>)*/
}