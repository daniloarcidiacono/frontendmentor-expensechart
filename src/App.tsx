import Attribution from "./components/attribution/Attribution";
import Design from "./components/design/Design";

function App() {
	return (
		<>
			<main>
				<Design />
				My balance
				$921.48

				Spending - Last 7 days

				mon
				tue
				wed
				thu
				fri
				sat
				sun

				Total this month
				$478.33

				+2.4%
				from last month
			</main>
			<footer>
				<Attribution 
					link={"https://github.com/daniloarcidiacono"} 
					author={"Danilo Arcidiacono"} 
				/>
			</footer>
		</>
	);
}

export default App;
