import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Text, ActivityIndicator} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import ShoppingListPreview from "../components/ShoppingListPreview";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/modules";
import { useFocusEffect } from '@react-navigation/native';


function Lists() {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const lists = useSelector(state => state.user.lists);
    const fetchingLists = useSelector(state => state.user.fetchingLists);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(actions.user.getLists());
        }, [])
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>My Shopping Lists</Text>
                {
                    fetchingLists?
                        <ActivityIndicator color={'#e48419'}/>
                        :
                        renderList()
                }
            </ScrollView>
        </SafeAreaView>
    );

    function renderList() {
        return lists
            .map(l =>
                <ShoppingListPreview
                    key={l.id}
                    id={l.id}
                    name={l.name}
                    size={l.size}
                />
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
    }
});

export default Lists;
