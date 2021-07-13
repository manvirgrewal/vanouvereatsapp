import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ( { term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.barStyle}>
			<Feather style={styles.iconStyle} name="search" />
			<TextInput
				style={styles.textStyle}
				placeholder="Search"
				autoCapitalize="none"
				autoCorrect={false}
                value={term}
                //onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                //onEndEditing={() => onTermSubmit()}
                onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	barStyle: {
		height: 45,
		borderRadius: 5,
		backgroundColor: "#F0EEEE",
		marginHorizontal: 15,
		marginTop: 15,
		flexDirection: "row",
        marginBottom: 10
	},
	iconStyle: {
		fontSize: 40,
		color: "black",
		alignSelf: "center",
		marginHorizontal: 10,
	},
	textStyle: {
		fontSize: 20,
		flex: 1,
	},
});

export default SearchBar;
