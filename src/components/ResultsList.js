import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "../components/ResultDetail";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }

	return (
		<View style={styles.viewStyle}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
                            delayPressIn={50}
							onPress={() => navigation.navigate("ResultsShow", {id: item.id})}
						>
							<ResultDetail result={item} />
						</TouchableOpacity>
					);
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		marginBottom: 10,
		borderBottomColor: "grey",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	titleStyle: {
		marginLeft: 15,
		fontSize: 22,
		fontWeight: "bold",
	},
});

export default withNavigation(ResultsList);
