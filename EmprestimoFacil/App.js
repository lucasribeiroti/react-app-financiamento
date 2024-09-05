import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/util/model/components/Base/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header titulo="Empréstimo Fácil" corFundo="#bbb"/>
      <Header titulo="O seu aplicativo de empréstimo"
      tamanho="M"/>

      {/*<Header titulo="blabla" 
      tamanho="P"/>*/}

      <View style={styles.body}>
        <Text>Botafogo</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flexGrow:1,
    backgroundColor: "#ddd"
  }
});
