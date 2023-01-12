import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View,  TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hra5 (){
    const [Vysledok, setVysledok] = useState("");
    var Znamienko;
    var Cislo1;
    var Cislo2;
    var rozsah = 100;
    const [Znamienka, setZnamienka] = useState ("");
    const Pocitanie = async(odp) => {
        if (odp == Znamienka){
            if (Znamienka != ""){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 1;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            Cislo1 = ((Math.floor(Math.random() * rozsah) + 0));
            Cislo2 = ((Math.floor(Math.random() * rozsah) + 0));
            if (Cislo1 == Cislo2) {
                setZnamienka("=");
            }
            if (Cislo1 > Cislo2) {
                setZnamienka(">");
            
            }
            if (Cislo1 < Cislo2) {
                setZnamienka("<");
            }
            setTlacidlo (<Text>{Cislo1} ? {Cislo2}</Text>);
        }
        

    }
    var i = ">";
    var y = "<"
    const [Tlacidlo, setTlacidlo] = useState(<TouchableOpacity style = {styles.a} onPress={() => Pocitanie("")}><Text  style = {{fontSize: 50, fontFamily: "monospace"}}>ZAČAŤ</Text></TouchableOpacity>);
    return(<View style = {styles.body}>
        <View style ={{marginBottom: "5%", marginLeft:"auto", marginRight:"auto"}}><Text style = {{fontSize: 50}}>
        {Tlacidlo}
        </Text></View>
        <Text style = {{width: "100%"}}>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie("=")}><Text  style = {{fontSize: 50, fontFamily: "monospace",textAlign:"center"}}> = </Text></TouchableOpacity>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie(">")}><Text  style = {{fontSize: 50, fontFamily: "monospace",textAlign:"center"}}> {i} </Text></TouchableOpacity>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie("<")}><Text  style = {{fontSize: 50, fontFamily: "monospace", textAlign:"center"}}> {y} </Text></TouchableOpacity></Text>
    </View>)
}

const styles = StyleSheet.create({
    body: {
        textAlign:"center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",

    },
    tlacidla: {
        width: "50%",
        fontSize: 50,
    },
    a: {
        backgroundColor: "#9EC1CF",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        height: "20%"
    },
  });