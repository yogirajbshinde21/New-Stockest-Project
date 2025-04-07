import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3002/allOrders");
        setAllHoldings(res.data);
      } catch (error) {
        setError("Failed to fetch holdings");
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  // Filter only buy and remaining stocks
  const filteredHoldings = allHoldings.filter(stock => 
    stock.orderType === "buy" || stock.orderType === "remaining"
  );

  // Prepare data for the graph
  const labels = filteredHoldings.map((stock) => stock.name || "Unknown");
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: filteredHoldings.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // If loading, show loading state
  if (loading) return <p>Loading...</p>;

  // If there's an error, show the error message
  if (error) return <p>{error}</p>;

  return (
    <>
      <h3 className="title">Holdings ({filteredHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {filteredHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

