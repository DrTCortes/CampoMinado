import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params'
import Field from './src/components/Field'
import Mines from './src/components/Mine'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <Text>Iniciando o Mines!</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text> */}
        
        <Field mined/>
        <Field opened mined/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={5}/>
        <Field opened mined exploded/>
        <Field flagged/>
        <Field flagged opened/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
