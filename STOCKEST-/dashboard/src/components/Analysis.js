import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  BarElement, 
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend, 
  ArcElement 
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const Analysis = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from backend API
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  // Aggregate data for charts
  const instrumentNames = [...new Set(orders.map((order) => order.name))]; // Unique instruments

  const quantityByInstrument = instrumentNames.map((name) =>
    orders
      .filter((order) => order.name === name)
      .reduce((acc, curr) => acc + curr.qty, 0)
  );

  const valueByInstrument = instrumentNames.map((name) =>
    orders
      .filter((order) => order.name === name)
      .reduce((acc, curr) => acc + curr.price * curr.qty, 0)
  );

  // Data for Bar Chart (Quantity of each instrument)
  const barChartData = {
    labels: instrumentNames,
    datasets: [
      {
        label: "Quantity",
        data: quantityByInstrument,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for Pie Chart (Value distribution by instrument)
  const pieChartData = {
    labels: instrumentNames,
    datasets: [
      {
        label: "Total Value",
        data: valueByInstrument,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Orders Chart</h3>
      <div style={{ width: "600px", margin: "20px auto" }}>
        <Bar data={barChartData} options={{ responsive: true }} />
      </div>

      <div style={{ width: "400px", margin: "20px auto" }}>
        <Pie data={pieChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Analysis;
