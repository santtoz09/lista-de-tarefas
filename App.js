import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const tarefas = [
    {id : "1",titulo :"Aprender Git"},
    {id : "2",titulo :"Aprender fazer Comit" },
    {id : "3",titulo :"Aprender utilizar o GitHub"},
  ] 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de tarefas</Text>

      <FlatList 
      data={tarefas}
      keyExtractor={(item) =>item.id}
      renderItem={({item}) =>(


        <Text style={{color:"white"}}>{item.titulo}</Text>
      )}


      />
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
    marginBottom: 20,

  }
});
