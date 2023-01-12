import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View, Image,TextInput, Button, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hra4 (){
    const [Odpoved, setOdpoved] = useState("");
    const [Vysledok, setVysledok] = useState("");
    const [Znamienka, setZnamienka] = useState (["+","-"]);
    var rozsah = 10;

    const Pocitanie = async() => {
        var cislo1;
        var cislo2;
        if (Odpoved == Vysledok){
            if (Odpoved != ""){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 1;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            cislo1 = (Math.floor(Math.random() * rozsah) + 0);
            cislo2 = (Math.floor(Math.random() * rozsah) + 0);
            setVysledok(cislo1*cislo2);
            setTlacidlo(<Text>{cislo1} * {cislo2} = </Text>);
        }
        

    }
    const [Tlacidlo, setTlacidlo] = useState(<TouchableOpacity style = {styles.a} onPress={Pocitanie}><Text  style = {{fontSize: 50, fontFamily: "monospace"}}>ZAČAŤ</Text></TouchableOpacity>);
    return(<View style = {{flexDirection:'row', flexWrap:'wrap', height: "100%", marginLeft: "auto", marginRight: "auto", marginTop: "50%"}}>
        <Text style = {{fontSize: 50}}>
            {Tlacidlo}
        </Text>
        <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setOdpoved(value)} onSubmitEditing = {Pocitanie}></TextInput>
    </View>)
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 4,
        borderRadius: 5,
        width: "25%",
        height: "10%",
        textAlign: "center",
        fontSize: 40,
    },
    a: {
        backgroundColor: "#9EE09E",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        height: "20%"
    },
  });