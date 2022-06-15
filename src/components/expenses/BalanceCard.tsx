import './BalanceCard.scss';
import logo from '../../assets/images/logo.svg';

export interface BalanceCardProps {
    balance: number;
}

function BalanceCard({ balance }: BalanceCardProps) {
    return (
        <>
            <div className="balance">
                <div className="balance__heading">
                    <p className="balance__title">My balance</p>
                    <p className="balance__amount">${balance}</p>
                </div>
                <img className="balance__logo" src={logo} alt="Logo" />
            </div>
        </>
    );
}

export default BalanceCard;