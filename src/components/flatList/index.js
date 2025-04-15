import React from "react";
import { Vie, Text,FlatList, View } from "react-native";
import frutas from "../../dados/frutas";

const ListarFrutas = () =>{
    return(
        <FlatList data = { frutas }
                keyExtractor={(item) => item.id}
                renderItem={ ( { item } ) => (
                <View style={{marginTop: 70}}>
                    <Text>
                        { item.id }
                    </Text>
                </View>
        )}  
        />

    )
}

export default ListarFrutas;