import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import yelp from '../api/yelp';


const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null
    }

	return (
		<View>
			<FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(image) => image}
                renderItem={({ item }) => {
                    return <Image source={{uri: item}} style={styles.imageStyle}/>
                }}
            />
		</View>
	);
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 325,
        height: 300,
        alignSelf: 'center',
        marginBottom: 12
    }
});

export default ResultsShowScreen;
