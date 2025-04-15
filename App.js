import React from "react";
import { View } from "react-native";
import ListarFrutas from "./src/components/flatList";


const App = () =>{
  return(
    <View style={{ flex: 1 }}>
      <ListarFrutas/>
    </View>
  )
}

export default App;