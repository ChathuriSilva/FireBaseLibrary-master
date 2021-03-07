import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
 
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Demo Library System</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        height :80,
        paddingTop :40,
        backgroundColor : '#808B97'
    },
    title : {
        textAlign :'center',
        fontSize : 20,
        fontWeight :'bold',
        color :'white' 
    }
})