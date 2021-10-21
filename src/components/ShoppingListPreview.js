import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function ShoppingListPreview({id, name, size}){
    const navigation = useNavigation();

    return (
        name?
            <TouchableOpacity style={ styles.container } onPress={() => navigation.navigate('ShoppingList', {id, name})}>
                <View style={styles.contentView}>
                    <View style={styles.nameRow}>
                        <Text style={styles.nameText}>{name}</Text>
                    </View>

                    <View style={styles.nameRow}>
                        <Text style={styles.messageText}>{size} items</Text>
                    </View>
                </View>
            </TouchableOpacity>
            :
            <></>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftColor: '#e48419',
        borderLeftWidth: 4,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: "white",
        margin: 4
    },
    contentView: {
        flex: 1
    },
    nameRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 14,
        color: "#1E1F20",
        lineHeight: 20,
        fontWeight: "500"
    },
    messageText: {
        fontSize: 14,
        color: "#8F92A1",
        lineHeight: 22
    },
});

export default ShoppingListPreview;
