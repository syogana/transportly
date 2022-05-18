import React from "react";

function OrdersTable({ scheduleAndOrders, ordersByDestination }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Order</th>
            <th>Flight</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Day</th>
          </tr>
          {scheduleAndOrders &&
            scheduleAndOrders.map((item, index) => (
              <OrderRecord
                key={index}
                orders={item.orders}
                flight={item.flight_number}
                arrival={item.arrival_city}
                departure={item.departure_city}
                day={item.day}
              />
            ))}

          {ordersByDestination &&
            Object.keys(ordersByDestination).map(
              (destination, index) =>
                ordersByDestination[destination].length > 0 && (
                  <OrderRecord
                    key={index}
                    orders={ordersByDestination[destination]}
                    flight="-"
                    arrival={destination}
                    departure="YUL"
                    day="-"
                  />
                )
            )}
        </tbody>
      </table>
    </div>
  );
}

function OrderRecord({ orders, flight, arrival, departure, day }) {
  return orders.map((order, index) => (
    <tr key={index}>
      <td>{order}</td>
      <td>{flight}</td>
      <td>{departure}</td>
      <td>{arrival}</td>
      <td>{day}</td>
    </tr>
  ));
}

export default OrdersTable;
