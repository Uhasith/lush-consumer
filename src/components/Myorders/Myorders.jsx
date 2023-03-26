import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { request } from "src/request";
import moment from "moment";

function Myorders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await request("GET", `/v1/orders`);
      const allOrders = response.results;

      const filteredOrders = allOrders.filter(
        (order) => order.buyer && order.buyer.id === user._id
      );

      setOrders(filteredOrders);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="bg-gradient-to-br  from-green-900 to-green-500 h-96 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Order History</h1>
      </div>
      <div className="container mx-auto my-12">
        <table className="table-auto w-full rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-br from-teal-900 to-teal-900 text-white text-center">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Delivery Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-gray-100 hover:bg-gray-200 text-center"
              >
                <td className="border px-4 py-2">{order?.orderId}</td>
                <td className="border px-4 py-2">
                  {moment(order?.createdAt).format("YYYY-MM-DD") || "-"}
                </td>
                <td className="border px-4 py-2">{`${order?.totalPrice}€`}</td>
                <td className="border px-4 py-2">
                  {moment(order?.createdAt).format("YYYY-MM-DD") || "-"}
                </td>
                <td className="border px-4 py-2">
                  <span
                    className={`inline-block py-1 px-2 rounded-md ${
                      order.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {order?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Myorders;
