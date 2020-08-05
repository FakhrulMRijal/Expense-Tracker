import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.total < 0 ? '-' : '+';

  return (
    <li className={transaction.total < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.total))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
