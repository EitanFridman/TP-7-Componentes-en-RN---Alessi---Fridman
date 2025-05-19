import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="light" />
      

      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover">
          
        <ScrollView>
        <SafeAreaView style={{flex: 100}}>
        <Text style={styles.text}>Mi Carta Personal</Text>
            {/* <View style={styles.card}>
              <Image 
                source={require('./assets/profile.jpg')}
                style={styles.image}
              />
              
              <Text style={styles.nombre}>Rabin Iztak</Text>
              <Text style={styles.ocupacion}>Programador</Text>
              <Text style={styles.descripcion}>Hola, soy programador de react native y mi materia favorita es DAI</Text>

              <Button 
              styles={styles.button}
              title= 'Ver Perfil'
              onPress = {()=> Alert.alert("Hola")}/>
            </View> */}

            <View style={styles.card}>
              <Image 
                source={require('./assets/profile.jpg')}
                style={styles.image}
              />
              
              <Text style={styles.nombre}>Rabin Iztak</Text>
              <Text style={styles.ocupacion}>Programador</Text>

              <TextInput style= {styles.input} 
              placeholder='Escriba su comentario'>
              </TextInput>

              <View style = {styles.fondoB}>
                <Button 
                styles ={styles.button}
                title = 'Ver Perfil'
                onPress = {()=> Alert.alert("Hola")}/>
              </View>
           
            </View>

        </SafeAreaView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold', 
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: 260,
    margin: 30,
  
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 30,
    fontWeight: 'bold',
    
  },
  ocupacion: {
    fontSize: 16,
    color: '#555',

  },
  descripcion: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#333',
  },
  button:
  {
    
  },
  fondoB:{
    backgroundColor: 'blue',
    borderRadius: 10,
  }
});
