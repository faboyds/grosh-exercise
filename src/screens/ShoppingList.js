import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, ActivityIndicator} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/modules";
import { useFocusEffect } from '@react-navigation/native';
import Item from "../components/Item";


function Lists({ route, navigation }) {
    const dispatch = useDispatch();

    const {id, name} = route.params;

    const currentList = useSelector(state => state.user.currentList);
    const fetchingCurrentList = useSelector(state => state.user.fetchingCurrentList);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(actions.user.getListContent(id));
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{name}</Text>
                {
                    fetchingCurrentList?
                        <ActivityIndicator color={'#e48419'}/>
                        :
                        renderList()
                }
            </ScrollView>
        </SafeAreaView>
    );

    function renderList() {
        return currentList?.map(c =>
            <>
                <Text style={styles.categoryTitle}>
                    Category {c.category}
                </Text>
                {
                    c.groceries.map(l =>
                        <Item
                            key={l.id}
                            id={l.id}
                            name={l.name}
                            amount={l.amount}
                            price={l.price}
                            note={l.note}
                        />
                    )
                }
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#e4e4e788"
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#e4e4e788"
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 16,
        backgroundColor: "white",
        marginBottom: 8
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: "#e48419",
        marginTop: 8,
        marginHorizontal: 4,
        borderRadius: 10
    }
});

export default Lists;
