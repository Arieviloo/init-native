import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const handleSubimit = () => {
    const valorALtura = altura / 100;
    const imc = peso / (valorALtura * valorALtura);

    if (imc <= 18.6) {
      alert(`${imc.toFixed(2)} Você está abaixo do peso`);
    } else if (imc >= 18.6 && imc < 24.9) {
      alert(`${imc.toFixed(2)} Você está com o peso ideal`);
    } else if (imc >= 24.9) {
      alert(`${imc.toFixed(2)} está acima do peso`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubimit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c3",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#333",
    margin: 8,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 50,
    fontSize: 20,
    color: "#fff",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
