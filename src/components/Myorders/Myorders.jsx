import React from "react";
import { Fragment } from "react";

function Myorders() {
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
            <tr className="bg-gray-100 hover:bg-gray-200 text-center">
              <td className="border px-4 py-2">ORD-001</td>
              <td className="border px-4 py-2">2022-03-01</td>
              <td className="border px-4 py-2">$20.99</td>
              <td className="border px-4 py-2">2022-03-01</td>
              <td className="border px-4 py-2">
                <span className="inline-block bg-green-500 text-white py-1 px-2 rounded-md">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 text-center">
              <td className="border px-4 py-2">ORD-002</td>
              <td className="border px-4 py-2">2022-03-04</td>
              <td className="border px-4 py-2">$34.99</td>
              <td className="border px-4 py-2">2022-03-01</td>

              <td className="border px-4 py-2">
                <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-md">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="bg-gray-100 hover:bg-gray-200 text-center">
              <td className="border px-4 py-2">ORD-003</td>
              <td className="border px-4 py-2">2022-03-09</td>
              <td className="border px-4 py-2">$12.99</td>
              <td className="border px-4 py-2">2022-03-01</td>

              <td className="border px-4 py-2">
                <span className="inline-block bg-red-500 text-white py-1 px-2 rounded-md">
                  Cancelled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Myorders;
