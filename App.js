import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Linking, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native';

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

          <View style={styles.card}>
            <Image 
              source={require('./assets/profile.jpg')}
              style={styles.image}
            />
            
            <Text style={styles.nombre}>Rabin Iztak</Text>
            <Text style={styles.ocupacion}>Programador</Text>
            <Text style={styles.descripcion}>Hola, soy programador de react native y mi materia favorita es DAI</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com')}>
                <Image source={require('./assets/github.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com')}>
                <Image source={require('./assets/gmail.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
                <Image source={require('./assets/instagram.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
                <Image source={require('./assets/linkedin.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>

            <View style = {styles.fondoB}>


            <TouchableOpacity 
              style={styles.button} 
              onPress={ () => Linking.openURL('https://mi-portfolio.com/')}>
              <Text style={styles.buttonText}>Ver Portfolio</Text> {}
            </TouchableOpacity>

            </View>


          
            <TextInput style= {[styles.input, styles.textInput]} 
            placeholder='Escribi un mensaje...'>
            </TextInput>

            <View style = {styles.fondoB}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={ () => Linking.openURL('https://whatsapp.com')}>
              <Text style={styles.buttonText}>Contacto</Text> {}
            </TouchableOpacity>
          </View>

          </View>

            <View style={styles.card}>
            <Image 
              source={require('./assets/profile.jpg')}
              style={styles.image}
            />
            
            <Text style={styles.nombre}>Rabin Iztak</Text>
            <Text style={styles.ocupacion}>Programador</Text>
            <Text style={styles.descripcion}>Hola, soy programador de react native y mi materia favorita es DAI</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com')}>
                <Image source={require('./assets/github.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com')}>
                <Image source={require('./assets/gmail.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com')}>
                <Image source={require('./assets/instagram.png')} style={styles.socialIcon} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
                <Image source={require('./assets/linkedin.png')} style={styles.socialIcon} />
              </TouchableOpacity>
            </View>

            <View style = {styles.fondoB}>


            <TouchableOpacity 
              style={styles.button} 
              onPress={ () => Linking.openURL('https://mi-portfolio.com/')}>
              <Text style={styles.buttonText}>Ver Portfolio</Text> {}
            </TouchableOpacity>

            </View>


          
            <TextInput style= {[styles.input, styles.textInput]} 
            placeholder='Escribi un mensaje...'>
            </TextInput>

            <View style = {styles.fondoB}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={ () => Linking.openURL('https://whatsapp.com')}>
              <Text style={styles.buttonText}>Contacto</Text> {}
            </TouchableOpacity>
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
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold', 
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 40,
    borderRadius: 25,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '200%',
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderColor:'blue',
    borderWidth: 1,
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
    marginBottom: 10,
    color: '#333',
  },
  button:
  {
    width: '100%',
    // backgroundColor: '#007bff',
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fondoB:{
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '60%',
  },
  input:{
    flex: 1,
    margin: 10,
    padding: 10,
    textAlign: 'flex-start',
    width: '120%',
    backgroundColor: 'white',  
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10
  },
  textInput: {
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    marginBottom: 30
  },

  socialIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // importante para que no se recorte
  },
  
});
