import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const Screen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage} </Text> : null}
			<ScrollView
				style={styles.resultListsStyle}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
			>
				<ResultsList
					results={filterResultsByPrice("$")}
					title="Cost Effective"
				/>
				<ResultsList
                    results={filterResultsByPrice("$$")}
                    title="Bit Pricier"
                />
				<ResultsList
					results={filterResultsByPrice("$$$")}
					title="Big Spender"
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	resultListsStyle: {
		marginBottom: 22,
	},
});

export default Screen;
