import React, { useEffect, useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/orders', {
      headers: {
        'aut-token': localStorage.getItem('aut-token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setOrders(data.orders);
      });
  }, []);

  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>
      {orders.length === 0 && <p>No orders.</p>}
      {orders.map((order, idx) => (
        <div key={idx} className="order-card">
          <div className="order-date">Date: {new Date(order.date).toLocaleString()}</div>
          <ul className="order-items">
            {Object.values(order.items).map((item, i) => (
              <li key={i}>
                {item.name || item.id} ({item.qty} pcs)
                {['hand','shaft','flex','loft'].map(opt => item[opt] ? `, ${opt}: ${item[opt]}` : '').join('')}
              </li>
            ))}
          </ul>
          <div className="order-total">Total price: {order.total} €</div>
        </div>
      ))}
    </div>
  );
};


export default Orders;