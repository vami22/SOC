import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View,TextInput, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Hra8 () {
    var samohlasky = ["a", "á", "ä","e","é","i","í","y","ý","o","ó","u","ú", "ia","ie","iu","ô"];
    var spoluhlasky = ["h","ch","k","g","d","t","n","l","č","dž","š","ž","c","dz","j","ď","ť","ň","ľ","b","m","p","r","s","v","z","f"];
    const [odpoved1, setodpoved1] = useState(0);
    const [odpoved2, setodpoved2] = useState(0);
    const [pocet1, setpocet1] = useState(0);
    const [pocet2, setpocet2] = useState(0);
    const sirka = Dimensions.get("screen").width;
    var co;
    const hlasky = async() => {
        var vykres2 = [];
        var zoznam = [];
        var posun;
        if((odpoved1 == pocet1) && (odpoved2 == pocet2)){
            if ((odpoved1 != 0 ) && (odpoved2 != 0)){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 1;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            var Pocet1  = (Math.floor(Math.random() * (10)) + 1);
            var Pocet2 =  (Math.floor(Math.random() * (10)) + 1);
            setpocet1(Pocet1);
            setpocet2(Pocet2);
            for (let i = 0; i < Pocet1; i++){
                posun = sirka / (Math.floor(Math.random() * 6) + 2);
                co = samohlasky [(Math.floor(Math.random() * (samohlasky.length)) + 0)];
                while (zoznam.indexOf(co) > -1 ){
                    co = samohlasky[(Math.floor(Math.random() * (samohlasky.length)) + 0)];
                }
                zoznam.push(co);
                vykres2.push (<Text style = {{fontSize: 30, marginLeft: posun}}>{co}</Text>);
            }
            for (let i = 0; i < Pocet2; i++){
                posun = sirka / (Math.floor(Math.random() * 6) + 2);
                co = spoluhlasky [(Math.floor(Math.random() * (spoluhlasky.length)) + 0)];
                while (zoznam.indexOf(co) > -1 ){
                    co = spoluhlasky[(Math.floor(Math.random() * (spoluhlasky.length)) + 0)];
                }
                zoznam.push(co);
                vykres2.push (<Text style = {{fontSize: 30, marginLeft: posun}}>{co}</Text>);

            }
            setTlacidlo(vykres2);

        }

    }
    const [Tlacidlo, setTlacidlo] = useState(<TouchableOpacity style = {styles.tlacidlo} onPress={hlasky}><Text style = {{fontSize: 50, fontFamily: "monospace"}}>ZAČAŤ</Text></TouchableOpacity>);
    return(
        <View>
            <View style= {[styles.obal, styles.prvy]}>{Tlacidlo}</View>
        <View style = {styles.obal}>
            <View style = {styles.medziobal}>
                <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setodpoved1(value)} onSubmitEditing = {hlasky}></TextInput>
                <Text style = {styles.nazov}>SAMOHLÁSKY</Text>
            </View>
            <View style = {styles.medziobal}>
                <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setodpoved2(value)} onSubmitEditing = {hlasky}></TextInput>
                <Text style = {styles.nazov}>SPOLUHLÁSKY</Text>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 4,
        borderRadius: 5,
        width: "80%",
        height: 60,
        textAlign: "center",
        marginRight: "auto",
        marginLeft: "auto",
        fontSize: 15,
        fontFamily: "monospace"
    },
    obal: {
        flexDirection:'row', 
        flexWrap:'wrap', 
        marginLeft: "auto", 
        marginRight: "auto",
        width: "100%",
    },
    slova: {
        fontSize: 20,
        marginLeft: "10%",

    },
    prvy: {
        height:"75%",
    },
    medziobal: {
        width:"50%",
    },
    nazov: {
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: "monospace",
        fontWeight: "bold",
    },
    tlacidlo: {
        backgroundColor: "#FFB244",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "50%",
        marginTop: "50%",
    }

  });