import React from "react";
import { useReducer } from "react";
import { useState, createContext } from "react";
import { storeProducts } from "../assets/data";

const ContextData = createContext();

const getPrice = (id) => {
	// return 1
	const indexOfitem = storeProducts.findIndex((e) => {
		e.id == id;
	});
	console.log(id);
	console.log(indexOfitem);
	return storeProducts[id].price;
};
const longString = " a stintg with cvalll"
console.log(longString)
const itemReducer = (items, actions) => {
	// actions. id= id type= inc,dec,clr
	console.log(typeof items);
	console.log(items);
	const exist = items?.some((e) => e.id == actions.id);
	console.log(exist);
	if (exist) {
		const index = items.findIndex((e) => e.id == actions.id);
		console.log(index);
		switch (actions.type) {
			case "inc":
				console.log("increment");
				console.log(items[index]);
				const newQuantity = +items[index].quantity + 1;
				const previousItems = items.filter((e) => e.id != actions.id);
				console.log(newQuantity);
				console.log(previousItems);
				return [
					...previousItems,
					{
						id: actions.id,
						quantity: newQuantity,
						cost: newQuantity * getPrice(actions.id),
					},
				];

				break;
			case "dec":
				console.log("decrement");
				const newQuantityDec = +items[index].quantity - 1;
				const previousItemsDec = items.filter(
					(e) => e.id != actions.id
				);
				console.log(newQuantityDec);
				console.log(previousItemsDec);
				return [
					...previousItemsDec,
					{
						id: actions.id,
						quantity: newQuantityDec,
						cost: newQuantityDec * getPrice(actions.id),
					},
				];
				break;
			default:
				break;
		}
	} else if (!exist) {
		return [
			...items,
			{ id: actions.id, quantity: 1, cost: getPrice(actions.id) },
		];
	}
};

function ContextProvider({ children }) {
	const [present, setPresent] = useState(6);
	const [items, dispatchItems] = useReducer(itemReducer, []);
	const [totalcost, setTotalcost] = useState(0);

	const updatePresent = (e) => {
		setPresent(e);
		// console.log(`${e} form context`);
	};
	const updateTotalcost = (e) => {
		const newTotalcost = items.reduce((e, f) => +e + f);
		setTotalcost(newTotalcost);
	};
	const getIndividual = (id) => {
		if (!items) return;
		const index = items.findIndex((e) => e.id == id);
		return [items[index]?.quantity, items[index]?.cost];
	};
	return (
		<>
			<ContextData.Provider
				value={{
					present,
					updatePresent,
					items,
					dispatchItems,
					totalcost,
					updateTotalcost,
					getIndividual,
				}}
			>
				{children}
			</ContextData.Provider>
		</>
	);
}

export { ContextProvider, ContextData };
// export default ContextData;
