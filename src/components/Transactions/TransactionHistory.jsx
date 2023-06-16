import PropTypes from 'prop-types';
import { Table, TableRaw, TableData, TableHeader } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableRaw>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRaw>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRaw key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRaw>
        ))}
      </tbody>
    </Table>
  );
};

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
