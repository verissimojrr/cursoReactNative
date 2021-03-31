import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'


/*
function Comp() {
    <Text>Comp Oficial</Text>
}

function Comp1() {
    <Text>Comp #1</Text>
}

function Comp2() {
    <Text>Comp #2</Text>
}

export { Comp, Comp1, Comp2 }
*/
/*
export default function Comp() {
    <Text>Comp Oficial</Text>
}

export function Comp1() {
    <Text>Comp #1</Text>
}

export function Comp2() {
    <Text>Comp #2</Text>
}
*/
/*
export default function Comp() {
    <Text>Comp Oficial</Text>
}

function Comp1() {
    <Text>Comp #1</Text>
}

function Comp2() {
    <Text>Comp #2</Text>
}

export { Comp1, Comp2}
*/
function Comp() {
    return <Text style={Estilo.txtGrande}>Comp Oficial</Text>
}

function Comp1() {
    return <Text style={Estilo.txtGrande}>Comp #1</Text>
}

function Comp2() {
    return <Text style={Estilo.txtGrande}>Comp #2</Text>
}

export { Comp1, Comp2 }
export default Comp