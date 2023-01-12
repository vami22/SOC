import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hra6 (){
    const [VetyOzn, setVetyOzn] = useState(["Dnes je pekne.","Zajtra bude pršať.", "Volám sa Jožko.", "Nemám rada červenú farbu.", "Bojím sa tmy.", "Chcem sa ísť kúpať.", "Pôjdem spať až večer.", "Na obed som mal zemiaky.", "Som tu nový.", "Zajtra sa pôjdem hrať s loptou."]);
    const [VetyOpy, setVetyOpy] = useState(["Čo budeme zajtra robiť?", "Spalo sa ti dobre?", "Akú hudbu máš najradšej?", "Čo si mal na raňajky?","Kde si včera bola?", "Ako sa voláš?", "Čo čítaš za knihu?", "Mal si už niekedy čokoládovú zmrzlinu", "Si doma?", "To je nová hračka ?"]);
    const [VetyRoz, setVetyRoz] = useState(["Choď vysypať smeti!", "Nekrič!","Zjec polievku!", "Odlož to!","Pekne sa hraj!","Zastav!", "Odlož tie taniere!", "Obleč si budnu!", "Vráť mi to!", "Odlož pastelky na miesto!"]);
    const [Veta, setVeta] = useState("");
    var Vypis;

    var Vyber = "";
    const Pocitanie = async(odp) => {
        if (odp == Veta){
            if (Veta != ""){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 1;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            Vyber = ((Math.floor(Math.random() * 3) + 1));

            if (Vyber == 1) {
                Vypis = VetyOzn[(Math.floor(Math.random() * (VetyOzn.length)) + 0)];
                setVeta(1);
            }
            if (Vyber == 2) {
                Vypis = VetyOpy[(Math.floor(Math.random() * (VetyOpy.length)) + 0)];
                setVeta(2);
            }
            if (Vyber == 3) {
                Vypis = VetyRoz[(Math.floor(Math.random() * (VetyRoz.length)) + 0)];
                setVeta(3);
            }
            setVeta(Vyber);
            setTlacidlo (<Text>{Vypis}</Text>);    
        }
        

    }
    const [Tlacidlo, setTlacidlo] = useState(<TouchableOpacity style = {styles.a} onPress={() => Pocitanie("")}><Text  style = {{fontSize: 50, fontFamily: "monospace"}}>ZAČAŤ</Text></TouchableOpacity>);
    return(<View style = {styles.body}>
        <View style ={{marginBottom: "5%", marginLeft:"auto", marginRight:"auto"}}><Text style = {{fontSize: 50}}>
        {Tlacidlo}
        </Text></View>
        <Text style = {{width: "100%"}}>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie(1)}><Text  style = {{fontSize: 15, fontFamily: "monospace",textAlign:"center", fontWeight: "bold"}}>Oznamovacia</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie(2)}><Text  style = {{fontSize: 15, fontFamily: "monospace",textAlign:"center",fontWeight: "bold"}}>Opytovacia</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.a} onPress={() => Pocitanie(3)}><Text  style = {{fontSize: 15, fontFamily: "monospace", textAlign:"center",fontWeight: "bold"}}>Rozkazovacia</Text></TouchableOpacity></Text>
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
    a: {
        backgroundColor: "#CC99C9",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        height: "20%"
    },
  });