import './ExpensesCard.scss';
import { Expense } from "../../model/Expenses";
import ExpensesChart from './ExpensesChart';

export interface ExpensesCardProps {
    expenses: Expense[];
    monthTotal: number;
    deltaPercentage: number;
}

function ExpensesCard({ expenses, monthTotal, deltaPercentage }: ExpensesCardProps) {
    return (
        <div className="expenses">
            <h1 className="expenses__title">Spending - Last {expenses.length} days</h1>
            <ExpensesChart className="expenses__chart" expenses={expenses} />
            <hr className="expenses__separator" />
            <div className="expenses__footer">
                <div className="expenses__total">
                    <p className="expenses__totallabel">Total this month</p>
                    <p className="expenses__totalamount">${monthTotal}</p>
                </div>
                <div className="expenses__delta">
                    <p className="expenses__deltapercentage">+{deltaPercentage}%</p>
                    <p className="expenses__deltalabel">from last month</p>
                </div>
            </div>
        </div>
    );
}

export default ExpensesCard;