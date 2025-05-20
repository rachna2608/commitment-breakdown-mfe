import axios from 'axios';
import { useEffect, useState } from 'react';

type Commitment = {
  id: number;
  assetClass: string;
  currency: string;
  amountGBP: number;
};

type Props = {
  investorId: number;
};
// const mockCommitments: Commitment[] = [
//   { id: 1, assetClass: 'Hedge Funds', currency: 'GBP', amountGBP: 100000 },
//   { id: 2, assetClass: 'Private Equity', currency: 'GBP', amountGBP: 250000 },
//   { id: 3, assetClass: 'Real Estate', currency: 'GBP', amountGBP: 300000 },
//   { id: 4, assetClass: 'Hedge Fund', currency: 'GBP', amountGBP: 150000 },
// ];

export default function CommitmentTable({ investorId }: Props) {
  console.log('Rendering CommitmentTable for investorId:', investorId);
  const [commitments, setCommitments] = useState<Commitment[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    if (!investorId) return;

    const fetchData = async () => {
      const url = filter === "all"
        ? `http://localhost:5288/api/investors/${investorId}/commitments`
        : `http://localhost:5288/api/investors/${investorId}/commitments?assetClass=${filter}`;

      const response = await axios.get(url);
      setCommitments(response.data);
    };

    fetchData();
  }, [investorId, filter]);

  // useEffect(() => {
  //   const filtered = filter === 'all'
  //     ? mockCommitments
  //     : mockCommitments.filter(c => c.assetClass === filter);

  //   setCommitments(filtered);
  // }, [filter]);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('Hedge Funds')}>Hedge Funds</button>
        <button onClick={() => setFilter('Private Equity')}>Private Equity</button>
        <button onClick={() => setFilter('Real Estate')}>Real Estate</button>
      </div>
      <table border={1} cellPadding={6} style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Asset Class</th>
            <th>Currency</th>
            <th>Amount (GBP)</th>
          </tr>
        </thead>
        <tbody>
          {commitments.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.assetClass}</td>
              <td>{c.currency}</td>
              <td>{c.amountGBP.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
