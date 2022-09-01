import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.data}>Type</th>
          <th className={s.data}>Amount</th>
          <th className={s.data}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.rows}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.item} key={id}>
            <td className={s.data}>{type[0].toUpperCase() + type.slice(1)}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
