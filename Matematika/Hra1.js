import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View, Image,TextInput, Button,TouchableOpacity, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hra1 (){
    const [Odpoved, setOdpoved] = useState("");
    const sirka = Dimensions.get("screen").width;
    const [GCislo, setGCislo] = useState("");
    const [Cislo, setCislo] = useState("");
    const [Obrazky, setObrazky] = useState ([require("../img/avokado.png"),require("../img/baklazan.png"),require("../img/huba.png"),require("../img/melon.png"),require("../img/mrkva.png"),require("../img/pomaranc.png")]);
    const D = async() => {
        var posun;
        var cislo;
        if (Odpoved == GCislo ){
            if (Odpoved != ""){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 1;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            cislo = ((Math.floor(Math.random() * 10) + 1));
            var cisloOBR = (Math.floor(Math.random() * (Obrazky.length)) + 0);
            var Obrazok = Obrazky[cisloOBR];
            var Zvykres = [];
            for (let i = 0; i < cislo; i++){
                posun = sirka / (Math.floor(Math.random() * 5) + 2);
                Zvykres.push (<Image key={i} style = {{width: 50,height: 50, resizeMode: "cover",marginLeft: posun, marginBottom: "5%" }} source={Obrazok}></Image>);
            }
            setVykres (Zvykres);
            setGCislo(cislo);
            setOtazky (<View style = {{margin:10, width: "100%"}}><Text style = {{textAlign: "center", fontSize: 50}}><Image style = {{width: 50,height: 50, resizeMode: "cover",marginLeft:"auto",marginRight: "auto", marginBottom: 10 }} source={Obrazok}></Image> ?</Text></View>);
            //AsyncStorage.setItem('coin', "1");
        }
        
    
    }
    const [Otazky, setOtazky] = useState("");
    const [Vykres, setVykres] = useState(<TouchableOpacity style = {styles.a} onPress={D}><Text  style = {{fontSize: 50, fontFamily: "monospace"}} >Začať</Text></TouchableOpacity>);
    return(
    <View>
        <View style = {{flexDirection:'row', flexWrap:'wrap', height: "75%",marginLeft: "auto", marginRight: "auto",width: "100%",}}>{Vykres}</View>
        <View >
            {Otazky}
        <TextInput style = {styles.input} placeholder="0" keyboardType= "numeric" onChangeText={(value) => setOdpoved(value)} onSubmitEditing = {D}></TextInput>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    body: {
        height: "100%",
    },
    hra: {
        flex: 3,
        width: "100%",
        backgroundColor: "red",

    },
    odpoved: {
        flex: 1,
        textAlign: "center",
    },
    a: {
        backgroundColor: "#FF6663",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "50%",
        marginTop: "50%",
        height: "20%"
    },
    input: {
        borderWidth: 4,
        borderRadius: 5,
        width: "25%",
        height: 50,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
    },

    tlacitko: {
        backgroundColor: "red",
        width: 20,
    },
    tlacidlo: {
        backgroundColor: "#FF8787",
    }
  });