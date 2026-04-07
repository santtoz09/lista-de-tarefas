import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [tarefas, setTarefas] = useState([
    { id: "1", titulo: "Aprender Git" },
    { id: "2", titulo: "Aprender fazer Comit" },
    { id: "3", titulo: "Aprender utilizar o GitHub" },
    { id: "4", titulo: "fazer git clone" },
  ])

  const [novaTarefa, setnovaTarefa] = useState('')



function addTarefa(){


  const task =[{
    id: String(Date.now()),
    titulo: novaTarefa
  }]

  
}



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de tarefas</Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (


          <Text style={styles.item}>{item.titulo}</Text>
        )}
      />



      <TextInput
        style={styles.input}
        value={novaTarefa}
        onChangeText= { (texto) => setnovaTarefa(texto) }
        placeholder='Digite uma tarefa'
        textAlign='center'
      />

      <TouchableOpacity style={styles.botao}><Text style={styles.textoBotao}>Adicionar tarefa</Text></TouchableOpacity>

    </View>
  );
}






// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },


  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
  },


  item: {
    color: "white",
    fontSize: 30,
    borderRadius: 12,
    backgroundColor: '#3b5ba449',
    margin: 20,
    padding: 10,
  },

  botao: {
    margin: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue",
    borderRadius: 100,
    height: 80,
    width: '70%'

  },

  textoBotao: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'

  },

  input: {
    borderWidth: 1,
    width: '90%',
    margin: 15,
    borderColor: '#606060',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    textAlign: 'center'
  }

});
