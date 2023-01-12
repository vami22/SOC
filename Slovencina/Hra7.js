import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {Text,StyleSheet , View,TextInput,TouchableOpacity,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function abeceda () {
    const slova = ["Jablko", "Citrón", "Banán", "Mrkva","Paradajka","Malina", "Jahoda", "Zubár","Doktor","Učiteľ","Motorkárka", "Taxikár","Tanečnica","Opravárka","Elektrikár","Kniha","Auto","Vankúš","Dar","Dúha","Somár","Hrniec", "Balík","Zrkadlo","Rádio","Radar","Pes","Mačka","Ryba","Slon","Pštros","Práčka","Koritnačka", "Krokodíl", "Jeleň","Slimák","Srnka","Ihla","Iskra","Bobor","Xenofón","Ypsilon","Yeti","Hračka","Hymna","Hlad","Hus","Egreš","Električka","Farba","Fakt","Gregor","Gabriela","Iveta","Nos","Oči","Ruka","Noha","Zobák","Srsť","Syn","Otec","Mama","Dcéra","Babka","Dedo","Teta","Bratranec","Sesternica","Smiech","Plač","Pusa","Objatie","Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December","Rok","Deň","Mesiac","Hodina","Minúta","Sekunda","Opica","Web","Watt","Western","Ulica","Ucho"];
    const [odpoved, setodpoved] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [poradie,setporadie] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [zobrazenie, setzobrazenie] = useState([]);
    const [medziODP, setmedziODP] = useState();
    var Vyber;
    var ZacPismena;
    var slovo;
    var pocet = 9;
    var Zoradene;
    var medziporadie;
    var Vyber2;
    const generovanie = async(odp, index) => {
        setTlacidlo("");
        console.log(poradie);
        if ((odp != "zaciatok") && (index!= "zaciatok")) {
            var pole = odpoved;
            pole[index] = (odp - 1);
            setodpoved(pole);
        }
        console.log(odpoved);
        if (JSON.stringify(odpoved) == JSON.stringify(poradie)){
            if (odp != ""){
                let p = parseInt(await AsyncStorage.getItem('coin'));
                p = p + 2;
                p = p.toString();
                AsyncStorage.setItem('coin', p);
            }
            ZacPismena = [];
            Vyber = [];
            Zoradene = [];
            medziporadie = [];
            Vyber2 = [];
            for (let i = 0; i <= pocet; i++){
                slovo = slova[(Math.floor(Math.random() * (slova.length)) + 0)];
                while (ZacPismena.indexOf(slovo[0]) > -1 ){
                     slovo = slova[(Math.floor(Math.random() * (slova.length)) + 0)];
                 }
                ZacPismena.push(slovo[0]);
                Vyber.push(slovo);
                Vyber2.push(slovo);
                
            }
            setzobrazenie(Vyber2);
            Zoradene = Vyber.sort();
            for (let i = 0; i <= pocet; i++){
                 medziporadie.push(Zoradene.indexOf(Vyber2[i]));
            }
            setporadie(medziporadie);
        }
    }

    const [Tlacidlo, setTlacidlo] = useState(<TouchableOpacity style = {styles.a} onPress={() => generovanie("zaciatok","zaciatok")}><Text  style = {{fontSize: 50, fontFamily: "monospace"}}>ZAČAŤ</Text></TouchableOpacity>);
    return(
    <View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[0]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,0)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[1]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,1)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[2]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,2)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[3]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,3)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[4]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,4)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[5]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,5)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[6]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,6)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[7]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,7)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[8]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,8)}></TextInput>
        </View>
        <View style = {styles.obal}>
            <Text style = {styles.slova}>{zobrazenie[9]}</Text>
            <TextInput style = {styles.input} placeholder="?" keyboardType= "numeric" onChangeText={(value) => setmedziODP(value)} onSubmitEditing = {() => generovanie(medziODP ,9)}></TextInput>
        </View>
        <View>{Tlacidlo}</View>
    </View>)
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 4,
        borderRadius: 5,
        width: "25%",
        height: 60,
        textAlign: "center",
        marginRight: "5%",
        marginLeft: "auto",
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
        fontFamily: "monospace",
        marginTop: "5%",
        fontWeight: "bold"

    },
    a: {
        backgroundColor: "#FF6663",
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
    },
  });