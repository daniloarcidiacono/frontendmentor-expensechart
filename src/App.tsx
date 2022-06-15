import Attribution from "./components/attribution/Attribution";
import Design from "./components/design/Design";
import BalanceCard from "./components/expenses/BalanceCard";
import ExpensesCard from "./components/expenses/ExpensesCard";
import { EXPENSES } from "./model/Expenses";

function App() {
	return (
		<>
			<main>
				<Design />
				<BalanceCard balance={921.48} />
				<ExpensesCard expenses={EXPENSES} monthTotal={478.33} deltaPercentage={2.4} />
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
