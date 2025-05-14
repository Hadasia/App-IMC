import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [corResultado, setCorResultado] = useState('#111');

  function CalcularIMC(peso, altura) {
  
    if (peso === '' || altura === '') {
      alert('Preencha todos os campos');
      return;
    }
    if (peso <= 0 || altura <= 0) {
      alert('Preencha com valores positivos');
      return;
    }

   if (peso === String  || altura === String) {
         alert('Preencha com números');
   }
    
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (altura > 10) {
      altura = altura / 100;
    }

    let imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5) {
      mensagem = "Abaixo do peso";
      setCorResultado('#FFD700');
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = "Peso normal";
      setCorResultado('green');
    } else if (imc >= 24.9 && imc < 29.9) {
      mensagem = "Sobrepeso";
      setCorResultado('#FFD700');
    } else if (imc >= 29.9 && imc < 34.9) {
      mensagem = "Obesidade grau I";
      setCorResultado('red');
    } else if (imc >= 34.9 && imc < 39.9) {
      mensagem = "Obesidade grau II";
      setCorResultado('red');
    } else {
      mensagem = "Obesidade grau III";
      setCorResultado('darkred');
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)}\n${mensagem}`);
  }

  function limparDados() {
    setPeso('');
    setAltura('');
    setResultado('');
    setCorResultado('#444');
  }

  return (
    <View style={{ alignItems: 'center', paddingTop: 80 }}>
      <Text style={styles.titulo}>Cálculo de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder='Peso' keyboardType='numeric' value={peso} onChangeText={setPeso} />

      <TextInput style={styles.input} placeholder='Altura' keyboardType='numeric' value={altura} onChangeText={setAltura} />

      <View style={styles.botao}>
        <Button title="Calcular IMC"onPress={() => CalcularIMC(peso, altura)} color="pink"/>
        <Button title="Limpar dados" onPress={limparDados} color="#F08080"/>
      </View>

      {resultado !== '' && (<Text style={[styles.resultado, { color: corResultado }]}>{resultado}</Text> )}
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontFamily: 'Arial',
    color: '#F08080',
    fontSize: 40,
    paddingTop: 200,
    textAlign: "center"
  },
  input: {
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: 'rgb(255, 192, 203)',
    fontSize: 20,
    width: 300
  },
  resultado: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 20
  },

  botao: {
  flexDirection: 'row',
  marginTop: 10,
  gap: 60, 
}
});
