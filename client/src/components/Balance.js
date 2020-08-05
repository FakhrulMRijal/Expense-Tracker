import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const totals = transactions.map(transaction => transaction.total);

  const balance = totals.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
    <h1>${numberWithCommas(balance)}</h1>
    </div>
  )
}
