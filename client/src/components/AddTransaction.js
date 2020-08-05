import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [total, settotal] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      total: +total
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="total"
            >total <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={total} onChange={(e) => settotal(e.target.value)} placeholder="Enter total..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
