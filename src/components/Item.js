import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Item({id, name, amount, price, note}){
    return (
        name?
            <TouchableOpacity style={ styles.container }>
                <View style={styles.contentView}>
                    <View style={styles.row}>
                        <Text style={styles.nameText}>{amount? amount + 'x ' : ''}{name}</Text>
                    </View>

                    <View style={styles.row}>
                        {
                            price && <Text style={styles.priceText}>{price}€</Text>
                        }
                    </View>

                    <View style={styles.row}>
                        {
                            note && <Text style={styles.notesText}>{note}€</Text>
                        }
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
    row: {
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
    priceText: {
        fontSize: 14,
        color: "#8F92A1",
        lineHeight: 22,
        fontWeight: 'bold'
    },
    notesText: {
        fontSize: 14,
        color: "#8F92A1",
        lineHeight: 22
    },
});

export default Item;
