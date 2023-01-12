import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import Hra1 from "./Matematika/Hra1";
import Hra2 from "./Matematika/Hra2";
import Hra3 from "./Matematika/Hra3";
import Hra4 from "./Matematika/Hra4";
import Hra5 from "./Matematika/Hra5";
import Hra6 from "./Slovencina/Hra6";
import Hra7 from "./Slovencina/Hra7";
import Hra8 from "./Slovencina/Hra8";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function UvodnaObrazovka ({navigation}){
  const [coin, setcoin] = useState(0);
  async function priestor(){
    setcoin( await AsyncStorage.getItem('coin'));
  }
  const presuvanie = (nazov) => {
    navigation.replace(nazov);
  }
  priestor();
  return(
    <View style = {{backgroundColor: "#fdf0b1",height: "100%", width: "100%"}}>
      <View style = {{margin: "5%"}}>
    <View style = {{ height:"8%"}}>
    <Text> <Image style = {{width: 50,height: 50, resizeMode: "cover",marginTop:"6%"}} source={require("./img/coin.png")}></Image>
    <Text style = {{fontSize: 50,marginTop: 20}}> {coin}</Text></Text>
    </View>
    <Text style = {{fontSize: 50, marginTop:"3%"}}> MATEMATIKA </Text>
    <TouchableOpacity style = {[styles.tlacitko, styles.D1]} onPress = {() => presuvanie("Hra1")}><Text style = {styles.nazov}>Spočítaj obrázky</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D2]} onPress = {() => presuvanie("Hra2")}><Text style = {styles.nazov}>Prkíklady do 10</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D3]} onPress = {() => presuvanie("Hra3")}><Text style = {styles.nazov}>Príklady do 20</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D4]} onPress = {() => presuvanie("Hra4")}><Text style = {styles.nazov}>Malá násobilka</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D5]} onPress = {() => presuvanie("Hra5")}><Text style = {styles.nazov}>Porovnanie</Text></TouchableOpacity>
    <Text style = {{fontSize: 50, marginTop: "5%"}}> SLOVENČINA</Text>
    <TouchableOpacity style = {[styles.tlacitko, styles.D6]} onPress = {() => presuvanie("Hra6")}><Text style = {styles.nazov}>Typ vety</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D1]} onPress = {() => presuvanie("Hra7")}><Text style = {styles.nazov}>Usporiadaj podľa abecedy</Text></TouchableOpacity>
    <TouchableOpacity style = {[styles.tlacitko, styles.D2]} onPress = {() => presuvanie("Hra8")}><Text style = {styles.nazov}>Urči hlásky</Text></TouchableOpacity>
  </View>
    </View>
  );
}

const domov = () => {
  navigation.replace("Uvodna_Obrazovka");
}
function PrvaHraObrazovka ({navigation}){
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(
  <View style = {[styles.body]}>
    <View style = {[styles.Hlavicka, styles.D1]}>
      <Text style = {styles.nadpis}>Spočítaj obrázky</Text>
      <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra1></Hra1>
    </View>

  </View>
  );
}

function Hra2Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {[styles.body]}>
    <View style = {[styles.Hlavicka,styles.D2]}>
    <Text style = {styles.nadpis}>Príklady do 10</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra2></Hra2>
    </View>

  </View>)
}

function Hra3Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D3]}>
    <Text style = {styles.nadpis}>Príklady do 20</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra3></Hra3>
    </View>

  </View>)
}
function Hra4Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D4]}>
    <Text style = {styles.nadpis}>Malá násobilka</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra4></Hra4>
    </View>

  </View>)
}
function Hra5Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D5]}>
    <Text style = {styles.nadpis}>Porovnanie</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra5></Hra5>
    </View>

  </View>)
}

function Hra6Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D6]}>
    <Text style = {styles.nadpis}>Typ vety</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra6></Hra6>
    </View>

  </View>)
}
function Hra7Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D1]}>
    <Text style = {styles.nadpis}>Usporiadaj</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra7></Hra7>
    </View>

  </View>)
}
function Hra8Obrazovka({navigation}) {
  const domov = () => {
    navigation.replace("Uvodna_Obrazovka");
  }
  return(<View style = {styles.body}>
    <View style = {[styles.Hlavicka,styles.D2]}>
    <Text style = {styles.nadpis}>Urči hlásky</Text>
    <Pressable onPress = {domov}><Image style = {styles.domcek} source = {require("./img/domcek.png")}></Image></Pressable>
    </View>
    <View style = {{flex: 17, backgroundColor: "#fdf0b1"}}>
    <Hra8></Hra8>
    </View>

  </View>)
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header:() => null}}>
        <Stack.Screen name="Uvodna_Obrazovka" component={UvodnaObrazovka} />
        <Stack.Screen name="Hra1" component={PrvaHraObrazovka}/>
        <Stack.Screen name= "Hra2" component={Hra2Obrazovka}/>
        <Stack.Screen name= "Hra3" component={Hra3Obrazovka}/>
        <Stack.Screen name= "Hra4" component={Hra4Obrazovka}/>
        <Stack.Screen name= "Hra5" component={Hra5Obrazovka}/>
        <Stack.Screen name= "Hra6" component={Hra6Obrazovka}/>
        <Stack.Screen name= "Hra7" component={Hra7Obrazovka}/>
        <Stack.Screen name= "Hra8" component={Hra8Obrazovka}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height: "100%",
    width: "100%",
  },
  text: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight:"900",
  },
  image: {
    width: 50,
    heigh: 0,
  },
  Hlavicka: {
    flex: 2,
    width: "100%",
    flexDirection:'row', 
    flexWrap:'wrap',
},
tlacitko: {
  height: "8%",
  borderRadius: 5,
  padding: 5,
  marginLeft: "10%",
  marginTop: "2%",
},
nazov: {
  fontSize: 20,
  fontWeight: "bold",
  marginLeft: "10%",
  marginTop:"auto",
  marginBottom: "auto",
},
domcek: {
  width: 50,
  height: 50,
  resizeMode: "cover",
  marginRight: 0, 
  marginTop:30,
  marginBottom: "auto"

},
nadpis: {
  fontSize: 30,
  marginRight: "5%",
  marginLeft: "5%",
  marginTop: 30,
  fontWeight: "bold",
  fontFamily: "monospace"
},
D1: {
  backgroundColor: "#FF6663",
},
D2: {
  backgroundColor: "#FFB244",
},
D3: {
  backgroundColor: "#FDFD97",
},
D4: {
  backgroundColor: "#9EE09E",
},
D5: {
  backgroundColor: "#9EC1CF",
},
D6: {
  backgroundColor: "#CC99C9",
},
});