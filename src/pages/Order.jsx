import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pages from "./Pages.css"


function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from your API or database
    // Replace this with your actual API endpoint
    fetch("http://localhost:3000/api/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>Order List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <Link to={`/orders/${order.id}`}>{order.orderNumber}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderList;
