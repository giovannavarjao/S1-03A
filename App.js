import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Image, TextInput } from 'react-native';

export default function App() {

    pressButon = () => {
        alert("Você apertou o botão")
    }

  
    return (
        <View style={styles.container}>

            <ImageBackground
             source={ require('./src/assets/images/rosaaa.jpg')}
             style={styles.img}>
            

            <View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
            </View>
            <View style={styles.secondaryContainer}>

                <TextInput style={styles.inputName}
                    placeholder='User'
                    inputMode='Text'
                    secureTextEntry={false}
                    placeholderTextColor='white'
                />

                <TextInput style={styles.inputName}
                    placeholder='Digite sua senha'
                    inputMode='numeric'
                    secureTextEntry={true}
                    placeholderTextColor='white'
                />


                <Button
                    style={{ backgroundColor: 'red' }}
                    onPress={pressButon}
                    title='Click Me!'
                    color='pink'
                    />


            </View>
            <View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
            </View>
            </ImageBackground>

        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    img: {
        width: '100%',
        height: '100%'
    },

    secondaryContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputName: {
        height: 100,
        backgroundColor: 'pink',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    }
})