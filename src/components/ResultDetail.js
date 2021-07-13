import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
	return (
		<View style={styles.viewStyle}>
            {result.image_url ? <Image source={{uri: result.image_url}} style={styles.imageStyle}/> : null}
			<Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.detailsStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
		</View>
	);
};

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15,
        marginHorizontal: 8,
        marginBottom: 5,
        marginTop: 5
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        height: 125,
        width: 250,
        borderRadius: 4,
        marginBottom: 4
    },
    detailsStyle: {
        fontSize: 15,
        color: 'grey'
    }
});

export default ResultDetail;
