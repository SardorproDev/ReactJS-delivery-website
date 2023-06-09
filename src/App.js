import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import './css/grid.css';
import './css/style.css';
import { Routes, Route } from "react-router-dom";
import ProductPageTwo from "./products/ProductPageTwo";
import NoteFound from "./layouts/NoteFound";
import { getAllCategory, getFilterCategory } from './config/api';
import ProductItem from "./products/ProductItem";
import { useEffect, useState } from 'react'
import Category from "./products/Category";
import Recipe from "./products/Recipe";
import Backet from "./products/Backet";

function App() {
	const [data, setData] = useState([]);
	// const [meals, setMeals] = useState([]);


	useEffect(() => {
		getAllCategory().then(data => setData(data.categories))
			.catch((error) => console.log(error))
	}, []);

	// useEffect(() => {
	// 	getFilterCategory(str).then(data => setMeals(data.meals))
	// }, [])

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<ProductItem data={data} />} />
				<Route path="/products" element={<ProductPageTwo  />} />
				<Route path="/category/:name" element={<Category />} />
				<Route path="/meal/:id" element={<Recipe />} />
				<Route path="*" element={<NoteFound />} />
			</Routes>
			<Backet />
			<Footer />
		</div>
	);
}

export default App;
