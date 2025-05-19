import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Linking, Alert, SafeAreaView, ScrollView, TextInput, TouchableOpacity} from 'react-native';

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
              <Text style={styles.descripcion}>Hola, soy programador de react native y mi materia favorita es DAI</Text>

              <Image 
                source={require('./assets/github.svg')}
                style={[styles.imagenes, styles.img]}
              />
                <Image 
                source={require('./assets/gmail.svg')}
                style={[styles.imagenes, styles.img]}
              />
                <Image 
                source={require('./assets/instagram.svg')}
                style={[styles.imagenes, styles.img]}
              />
                <Image 
                source={require('./assets/linkedin.svg')}
                style={[styles.imagenes, styles.img]}
              />

              {/* <TouchableOpacity onPress={handlePress}>
                <Image 
                  source={{uri: 'https://via.placeholder.com/150'}}  // Pon aquí la URL de la imagen que deseas mostrar
                  style={styles.image}
                />
              </TouchableOpacity> */}


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
    backgroundColor:'red'
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    marginBottom: 40,
    fontWeight: 'bold', 
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 40,
    borderRadius: 25,
    alignItems: 'center',
    display:'flex',
    justifyContent: 'center',
    width: '80%',
    height: '200%',
   
  
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
    marginBottom: 10,
    color: '#333',
  },
  button:
  {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
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
    borderRadius: 100,
    width: '100%',
  },
  input:{
    flex: 1,
    margin: 10,
    padding: 10,
    width: '130%',
    backgroundColor: 'white',  
    borderColor: 'gray',
    borderWidth: '0.1px',
    borderRadius: 5,
    textAlign: 'flex-start'
  },
  textInput: {
    color: 'gray', 
  },
  imagenes: {
    // width: 50,
    // height: 50,
    width: '22%',
    height ,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  img: {
    // width: '22%',
    // aspectRatio: 1,
    // borderRadius: 8,
  }
  
});
