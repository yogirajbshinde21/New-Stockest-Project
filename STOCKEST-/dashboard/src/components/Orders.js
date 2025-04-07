
import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    // Fetch the order data from your backend API
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order._id}</td> {/* Assuming your order has an ID */}
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td>{order.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;

