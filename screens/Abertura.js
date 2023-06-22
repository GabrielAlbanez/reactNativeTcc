import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { StyleSheet } from 'react-native';

export default function Abertura({ navigation }) {

    const nameButtons = [
        {
            id: '1',
            title: 'Logar',
        },
        {
            id: '2',
            title: 'Registrar',
        },
    ];


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View><Text>Logo</Text></View>
                <View>
                    <FlatList
                        data={nameButtons}
                        renderItem={({ item }) => <View style={{flex: 1, flexDirection: "row"}}><Text>{item.title}</Text></View>}
                        keyExtractor={(item => item.id)}
                    />
                </View>
            </View>
            <View style={styles.main}><Text>main</Text></View>
            <View style={styles.footer}><Text>footer</Text></View>


            {/* <Button title='Login'onPress={()=>{
            navigation.navigate("Login")
        }}></Button> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,

    },
    header: {
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal: 30,
    },
    main: {
        backgroundColor: "green",
        flex: 7,
    },
    footer: {
        backgroundColor: "purple",
        flex: 1,
    },
});