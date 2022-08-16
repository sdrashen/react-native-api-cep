import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import containerCep from './components/ApiContainerStyle'
import inputBox from './components/TextInputStyle'
import titlesStyle from './components/TitleStyle'

export default function () {
  const [cep, setCep] = useState(' ')
  async function handleApi() {
    await fetch(`https://ws.apicep.com/cep.json?code=${cep}`).then(res =>
      res.json().then(json => {
        if (json.ok === true) {
          alert = json.address
        } else {
          alert('CEP inexistente')
        }
      })
    )
  }

  return (
    <View style={styles.container}>
      <View style={containerCep.box}>
        <Text style={titlesStyle.titleText}>BUSCA CEP</Text>
        <TextInput
          onChangeText={t => setCep(t)}
          style={inputBox.inputStyle}
          placeholder="Insira o cep aqui"
        />
        <Button title="Buscar" onPress={handleApi} />

        <StatusBar style="light" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
